#!/usr/bin/env python3
"""
fetch_intelligence_index.py
===========================

Extrae TODOS los datos públicos del Artificial Analysis Intelligence Index
(https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
y los vuelca a:

  data/intelligence-index.json        snapshot consolidado (último)
  data/intelligence-index.jsonl       histórico (1 línea/día, append)
  data/raw/<YYYY-MM-DD>/*.json        payloads crudos del día (auditoría)
  src/data/intelligence-index.ts      módulo TS importable por Astro
  docs/intelligence-index.md          informe Markdown legible

Descubrimiento clave (jun-2026): la página es una SPA Next.js con RSC (React
Server Components). Los datos NO se sirven via API JSON ni en responses
`application/json`; van embebidos en el HTML inicial como strings dentro de
bloques `self.__next_f.push([1,"..."])`. Concretamente:

  - "models":[ {id, slug, name, shortName, deprecated, isReasoning, creator} ]
      -> catálogo de modelos (metadata básica, 511+ modelos)
  - "defaultData":[ { ...131 campos por modelo... } ]
      -> datos ricos: intelligence_index, gdpval_breakdown, omniscience,
         costes, tiempos, precios, sub-evaluaciones, etc. (531+ entradas)

Estrategia:
  1. httpx: descargar el HTML de la página (Vercel cachea el prerender).
  2. Extraer los bloques self.__next_f.push([1,"..."]) y decodificarlos.
  3. Parsear los arrays "models" y "defaultData" del stream RSC unificado.
  4. Cruzar models (metadata) con defaultData (datos) por slug/id.
  5. Organizar por secciones y escribir salidas.

Esto evita Playwright (no hace falta navegador) y es rápido y robusto.
Se mantiene un fallback con Playwright por si Vercel deja de prerenderizar.

Robustez ante cambios de la SPA de artificialanalysis.ai:
  - La fase 1 (RSC-HTML) depende de dos cosas: (a) que el prerender de Vercel
    siga embebiendo los bloques `self.__next_f.push([1,"..."])`, y (b) que el
    stream RSC siga conteniendo los arrays "models" y "defaultData". Si AA cambia
    su build de Next.js, esos nombres o el formato del stream pueden moverse.
  - Síntoma típico: la fase RSC-HTML "no tiene éxito" o captura 0 secciones.
    El script cae automáticamente al fallback Playwright (HTML ya renderizado).
  - Para validar el fallback sin esperar a que se rompa la fase 1, usar
    `--force-playwright`. Para diagnosticar el parseo, los payloads crudos
    quedan en `data/raw/<fecha>/` (gitignored).
  - `--no-playwright` deja solo la fase 1 (CI rápido o entornos sin navegador):
    si la fase 1 falla, aborta con código de salida ≠ 0 en vez de tirar de
    Playwright.

Uso:
  python scripts/fetch_intelligence_index.py [--dry-run] [--sections a,b,c]
                                             [--no-playwright | --force-playwright]
                                             [--verbose] [--repo-root PATH]
"""

from __future__ import annotations

import argparse
import json
import logging
import re
import sys
import time
from dataclasses import dataclass, field
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

try:
    import httpx
except ImportError:  # pragma: no cover
    httpx = None  # type: ignore[assignment]

# ---------------------------------------------------------------------------
# Configuración
# ---------------------------------------------------------------------------

TARGET_URL = "https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index"
USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
)

# Secciones reconocidas (clave en el snapshot de salida).
ALL_SECTIONS: list[str] = [
    "intelligence_index",
    "sub_evaluations",
    "coding_agent_index",
    "aa_briefcase",
    "aa_omniscience",
    "gdpval_aa_v2",
    "openness_index",
    "cost_per_task",
    "time_per_task",
    "output_tokens",
    "speed_latency",
    "price_cost",
    "metadata",
]

# Sub-evaluaciones del Intelligence Index v4.1.
SUB_EVALUATIONS: list[str] = [
    "GDPval-AA v2",
    "tau3-Banking",
    "Terminal-Bench v2.1",
    "SciCode",
    "Humanity's Last Exam",
    "GPQA Diamond",
    "CritPt",
    "AA-Omniscience",
    "AA-LCR",
]

# Campos de defaultData que mapean a cada sección (para el snapshot estructurado).
SECTION_FIELDS: dict[str, list[str]] = {
    "intelligence_index": [
        "intelligence_index", "intelligence_index_v4_1", "estimated_intelligence_index",
        "estimated_intelligence_index_v4_1", "intelligence_index_is_estimated",
        "agentic_index", "coding_index", "math_index",
    ],
    "sub_evaluations": [
        "gdpval", "gdpval_v2", "gdpval_breakdown", "gdpval_v2_breakdown", "gdpval_normalized",
        "tau_banking", "tau2",
        "terminalbench_v2_1", "terminalbench_hard",
        "scicode", "hle", "gpqa", "critpt", "lcr",
        "omniscience", "omniscience_breakdown",
        "ifbench", "livecodebench", "humaneval", "aime", "aime25",
        "mmlu_pro", "mmmu_pro", "math_500", "global_mmlu_lite_json",
        "apex_agents", "apex_agents_token_use", "it_bench_sre", "it_bench_breakdown",
    ],
    "coding_agent_index": ["coding_index", "agentic_index"],
    "aa_briefcase": ["briefcase", "briefcase_breakdown"],
    "aa_omniscience": ["omniscience", "omniscience_breakdown", "omniscience_token_use"],
    "gdpval_aa_v2": ["gdpval_v2", "gdpval_v2_breakdown", "gdpval_token_use", "gdpval_normalized"],
    "openness_index": [
        "is_open_weights", "commercial_allowed", "license_name", "license_url",
        "model_weights_source_url", "open_source_categorization", "training_information",
    ],
    "cost_per_task": [
        "intelligenceIndexCostPerTask", "intelligence_index_cost", "intelligence_index_per_m_output_tokens",
        "evalCost", "indexCompute",
    ],
    "time_per_task": ["intelligenceIndexTimePerTask", "evalTimePerTask"],
    "output_tokens": [
        "intelligenceIndexOutputTokensPerTask", "output_tokens", "canonicalIntelligenceIndexTokenCount",
        "intelligence_index_token_counts", "canonicalEvalTokenCounts", "eval_token_counts",
        "canonical_eval_token_counts", "tokenCounts", "representative_query_token_counts",
    ],
    "speed_latency": [
        "end_to_end_response_time_metrics", "time_to_first_answer_token_metrics",
        "timescaleData", "performanceByPromptLength", "performanceDataSource",
    ],
    "price_cost": [
        "price_1m_input_tokens", "price_1m_output_tokens",
        "price_1m_blended_0_3_1", "price_1m_blended_7_2_1", "price_1m_blended_0_1_1",
        "price_1m_blended_100_1_1", "price_1m_blended_0_100_1",
        "cache_hit_price", "cacheWritePrice", "cacheHitRate", "fallbackPrice",
        "cache_hit_discount_percent", "price_per_1k_1mp_images",
    ],
    "metadata": [
        "id", "slug", "name", "short_name", "model_family_slug", "model_creator_id",
        "model_creators", "host_models", "model_url", "hosts_url", "name_and_creator_label",
        "context_window_tokens", "contextWindowFormatted", "parameters", "activeParams",
        "inference_parameters_active_billions", "size_class", "reasoning_model",
        "reasoning_properties", "release_date", "knowledge_cutoff_date",
        "input_modality_text", "input_modality_image", "input_modality_speech", "input_modality_video",
        "output_modality_text", "output_modality_image", "output_modality_speech", "output_modality_video",
        "frontier_model", "deprecated", "deprecated_to", "deleted", "display_order",
        "computed_performance_host_model_id", "show_host_model_evals", "tokenizer_id",
        "additional_text", "lab_claimed_aime", "lab_claimed_gpqa", "lab_claimed_hle",
        "lab_claimed_humaneval", "lab_claimed_livecodebench", "lab_claimed_math_500",
        "lab_claimed_mmlu_pro", "lab_claimed_scicode",
    ],
}

# Campos SLIM por sección para el snapshot de salida (.json/.ts). Solo escalares
# clave; los objetos anidados grandes (breakdowns, series temporales, multilingüe)
# se conservan íntegros en data/raw/<fecha>/defaultData.json para auditoría.
SECTION_SLIM_FIELDS: dict[str, list[str]] = {
    "intelligence_index": ["intelligence_index", "intelligence_index_v4_1", "agentic_index", "coding_index", "math_index"],
    "sub_evaluations": ["gdpval", "gdpval_v2", "tau_banking", "terminalbench_v2_1", "scicode", "hle", "gpqa", "critpt", "lcr", "omniscience", "ifbench", "livecodebench", "humaneval", "aime", "mmlu_pro", "mmmu_pro", "math_500"],
    "coding_agent_index": ["coding_index", "agentic_index"],
    "aa_briefcase": ["briefcase"],
    "aa_omniscience": ["omniscience"],
    "gdpval_aa_v2": ["gdpval_v2", "gdpval_normalized"],
    "openness_index": ["is_open_weights", "commercial_allowed", "license_name", "license_url"],
    "cost_per_task": ["intelligence_index_cost", "intelligence_index_per_m_output_tokens", "evalCost", "indexCompute"],
    "time_per_task": ["intelligenceIndexTimePerTask", "evalTimePerTask"],
    "output_tokens": ["output_tokens"],
    "speed_latency": ["performanceDataSource"],
    "price_cost": ["price_1m_input_tokens", "price_1m_output_tokens", "price_1m_blended_7_2_1", "cache_hit_price", "cache_hit_discount_percent"],
    "metadata": ["slug", "name", "short_name", "model_family_slug", "context_window_tokens", "parameters", "activeParams", "size_class", "reasoning_model", "release_date", "knowledge_cutoff_date", "frontier_model", "deprecated", "license_name"],
}

log = logging.getLogger("ii-fetch")


# ---------------------------------------------------------------------------
# Utilidades
# ---------------------------------------------------------------------------


def now_iso() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def today_stamp() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%d")


def safe_json(text: str) -> Any | None:
    try:
        return json.loads(text)
    except Exception:
        return None


def slugify(s: str) -> str:
    s = re.sub(r"[^a-zA-Z0-9_-]+", "_", s).strip("_").lower()
    return s or "payload"


# ---------------------------------------------------------------------------
# Resultado
# ---------------------------------------------------------------------------


@dataclass
class Snapshot:
    fetched_at: str
    source_url: str
    index_version: str | None
    method: str  # "rsc-html" | "playwright"
    n_models: int
    n_default_data: int
    sections_captured: list[str] = field(default_factory=list)
    sections_failed: list[str] = field(default_factory=list)
    data: dict[str, Any] = field(default_factory=dict)

    def to_dict(self) -> dict:
        return {
            "fetched_at": self.fetched_at,
            "source_url": self.source_url,
            "index_version": self.index_version,
            "method": self.method,
            "n_models": self.n_models,
            "n_default_data": self.n_default_data,
            "sections_captured": self.sections_captured,
            "sections_failed": self.sections_failed,
            "data": self.data,
        }


# ---------------------------------------------------------------------------
# Fase 1: Descarga HTML + extracción RSC (sin navegador)
# ---------------------------------------------------------------------------


def fetch_html(timeout: float = 30.0) -> str | None:
    """Descarga el HTML prerenderizado de Vercel (incluye datos RSC embebidos)."""
    if httpx is None:
        log.error("httpx no instalado. Ejecuta: pip install httpx")
        return None
    headers = {
        "User-Agent": USER_AGENT,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "es-ES,es;q=0.9,en;q=0.8",
    }
    try:
        with httpx.Client(headers=headers, timeout=timeout, follow_redirects=True) as client:
            r = client.get(TARGET_URL)
            if r.status_code != 200:
                log.error("HTTP %s al descargar la página", r.status_code)
                return None
            if "text/html" not in r.headers.get("content-type", "").lower():
                log.error("Content-Type inesperado: %s", r.headers.get("content-type"))
                return None
            log.info("HTML descargado: %d bytes", len(r.text))
            return r.text
    except Exception as e:
        log.error("Error descargando HTML: %s", e)
        return None


def extract_next_f_stream(html: str) -> str:
    """Extrae y decodifica los bloques self.__next_f.push([1,"..."]) del HTML.

    Next.js RSC streaming embebe el payload en múltiples pushes; cada string
    está escapado con \\\" y \\\\. Los concatenamos para reconstruir el stream.
    """
    # Patrón: self.__next_f.push([1,"..."])
    # El string interno puede contener \" y \\ escapados.
    pattern = re.compile(r'self\.__next_f\.push\(\[\s*1,\s*"((?:[^"\\]|\\.)*)"\s*\]\)', re.S)
    pushes = pattern.findall(html)
    log.info("Encontrados %d bloques __next_f.push", len(pushes))
    if not pushes:
        return ""
    parts: list[str] = []
    for p in pushes:
        # Desescapar solo secuencias JS string: \" -> " y \\ -> \.
        # NO tocar \n/\t/\r: en el RSC son separadores de fila Y escapes JSON
        # (json.loads los maneja dentro de los arrays). Convertirlos a reales
        # rompería los strings JSON. Verificado: con solo estos dos reemplazos
        # la extracción de defaultData/models funciona correctamente.
        decoded = p.replace('\\"', '"').replace("\\\\", "\\")
        parts.append(decoded)
    return "\n".join(parts)


def extract_balanced_array(stream: str, key: str) -> list | None:
    """Encuentra '"key":[' en el stream y extrae el array JSON balanceado."""
    m = re.search(rf'"{re.escape(key)}"\s*:\s*\[', stream)
    if not m:
        return None
    start = m.end() - 1  # posición del [
    depth = 0
    in_str = False
    esc = False
    for j in range(start, len(stream)):
        c = stream[j]
        if in_str:
            if esc:
                esc = False
            elif c == "\\":
                esc = True
            elif c == '"':
                in_str = False
        else:
            if c == '"':
                in_str = True
            elif c == "[":
                depth += 1
            elif c == "]":
                depth -= 1
                if depth == 0:
                    arr_str = stream[start : j + 1]
                    return safe_json(arr_str)
    return None


def extract_index_version(html: str, stream: str) -> str | None:
    # Buscar "Intelligence Index vX.Y" en el HTML visible o en el stream.
    for text in (html, stream):
        m = re.search(r"Intelligence Index\s*(v[\d.]+)", text)
        if m:
            return m.group(1)
    # Si existen campos *_v4_1 en defaultData, deducir v4.1 (el HTML prerender
    # de Vercel no incluye el literal "v4.1" hasta hidratar).
    if re.search(r'"intelligence_index_v4_1"\s*:', stream):
        return "v4.1 (deducido)"
    return None


def parse_rsc_html(html: str) -> tuple[Snapshot | None, list | None, list | None]:
    """Fase principal: extrae models + defaultData del HTML RSC.

    Devuelve (snapshot, models_meta, default_data) o (None, None, None).
    """
    stream = extract_next_f_stream(html)
    if not stream:
        log.error("No se extrajo stream __next_f del HTML.")
        return None, None, None
    log.info("Stream RSC unificado: %d bytes", len(stream))

    models_meta = extract_balanced_array(stream, "models")
    default_data = extract_balanced_array(stream, "defaultData")

    if not default_data:
        log.error("No se encontró 'defaultData' en el stream.")
        return None, None, None
    log.info("models (metadata): %d | defaultData: %d", len(models_meta or []), len(default_data))

    # Indexar metadata por id para enriquecer defaultData.
    meta_by_id: dict[str, dict] = {}
    if models_meta:
        for mm in models_meta:
            mid = mm.get("id")
            if mid:
                meta_by_id[mid] = mm

    # Construir snapshot por secciones (SLIM: solo escalares clave).
    data: dict[str, Any] = {}
    captured: set[str] = set()

    for entry in default_data:
        if not isinstance(entry, dict):
            continue
        slug = entry.get("slug")
        name = entry.get("name") or entry.get("short_name") or slug
        creator = entry.get("model_creators") or meta_by_id.get(entry.get("id", ""), {}).get("creator")
        creator_name: str | None = None
        if isinstance(creator, dict):
            creator_name = creator.get("name")
        elif isinstance(creator, list) and creator:
            creator_name = creator[0].get("name") if isinstance(creator[0], dict) else str(creator[0])

        for section, fields in SECTION_SLIM_FIELDS.items():
            row: dict[str, Any] = {"slug": slug, "name": name, "creator": creator_name}
            has_any = False
            for f in fields:
                if f in entry:
                    row[f] = entry[f]
                    has_any = True
            if has_any:
                data.setdefault(section, []).append(row)
                captured.add(section)

    # Tabla maestra: todas las métricas clave por modelo en una sola lista.
    master_rows: list[dict] = []
    for entry in default_data:
        if not isinstance(entry, dict):
            continue
        row = {
            "slug": entry.get("slug"),
            "name": entry.get("name"),
            "short_name": entry.get("short_name"),
            "creator": _creator_name(entry, meta_by_id),
            "intelligence_index": entry.get("intelligence_index"),
            "intelligence_index_v4_1": entry.get("intelligence_index_v4_1"),
            "coding_index": entry.get("coding_index"),
            "agentic_index": entry.get("agentic_index"),
            "gdpval_v2": entry.get("gdpval_v2"),
            "gdpval_elo": (entry.get("gdpval_breakdown") or {}).get("elo") if isinstance(entry.get("gdpval_breakdown"), dict) else None,
            "omniscience": entry.get("omniscience"),
            "scicode": entry.get("scicode"),
            "hle": entry.get("hle"),
            "gpqa": entry.get("gpqa"),
            "critpt": entry.get("critpt"),
            "lcr": entry.get("lcr"),
            "terminalbench_v2_1": entry.get("terminalbench_v2_1"),
            "tau_banking": entry.get("tau_banking"),
            "ifbench": entry.get("ifbench"),
            "livecodebench": entry.get("livecodebench"),
            "humaneval": entry.get("humaneval"),
            "aime": entry.get("aime"),
            "mmlu_pro": entry.get("mmlu_pro"),
            "mmmu_pro": entry.get("mmmu_pro"),
            "briefcase": entry.get("briefcase"),
            "is_open_weights": entry.get("is_open_weights"),
            "context_window_tokens": entry.get("context_window_tokens"),
            "parameters": entry.get("parameters"),
            "activeParams": entry.get("activeParams"),
            "release_date": entry.get("release_date"),
            "reasoning_model": entry.get("reasoning_model"),
            "frontier_model": entry.get("frontier_model"),
            "deprecated": entry.get("deprecated"),
            "price_1m_input": entry.get("price_1m_input_tokens"),
            "price_1m_output": entry.get("price_1m_output_tokens"),
            "price_1m_blended_7_2_1": entry.get("price_1m_blended_7_2_1"),
            "cost_per_task_total": (entry.get("intelligenceIndexCostPerTask") or {}).get("cost", {}).get("total") if isinstance(entry.get("intelligenceIndexCostPerTask"), dict) else None,
            "time_per_task": entry.get("intelligenceIndexTimePerTask"),
            "output_tokens_per_task": (entry.get("intelligenceIndexOutputTokensPerTask") or {}).get("output") if isinstance(entry.get("intelligenceIndexOutputTokensPerTask"), dict) else None,
        }
        master_rows.append(row)
    # Ordenar por intelligence_index desc (None al final).
    master_rows.sort(key=lambda r: (r.get("intelligence_index") is None, -(r.get("intelligence_index") or 0)))
    data["master_table"] = master_rows
    captured.add("master_table")

    sections_captured = [s for s in ALL_SECTIONS if s in captured]
    sections_failed = [s for s in ALL_SECTIONS if s not in captured]

    snap = Snapshot(
        fetched_at=now_iso(),
        source_url=TARGET_URL,
        index_version=extract_index_version(html, stream),
        method="rsc-html",
        n_models=len(models_meta or []),
        n_default_data=len(default_data),
        sections_captured=sections_captured,
        sections_failed=sections_failed,
        data=data,
    )
    return snap, models_meta, default_data


def _creator_name(entry: dict, meta_by_id: dict) -> str | None:
    c = entry.get("model_creators")
    if isinstance(c, list) and c:
        first = c[0]
        return first.get("name") if isinstance(first, dict) else str(first)
    if isinstance(c, dict):
        return c.get("name")
    meta = meta_by_id.get(entry.get("id", ""), {})
    cc = meta.get("creator")
    if isinstance(cc, dict):
        return cc.get("name")
    return None


# ---------------------------------------------------------------------------
# Fase 2: Playwright fallback (si Vercel deja de prerenderizar)
# ---------------------------------------------------------------------------


def try_playwright_fallback(raw_dir: Path) -> tuple[Snapshot | None, list | None, list | None]:
    """Si la fase RSC-HTML falla, usar Playwright para obtener el HTML renderizado."""
    try:
        from playwright.sync_api import sync_playwright
    except ImportError:
        log.error("Playwright no instalado. Ejecuta: pip install playwright && playwright install chromium")
        return None, None, None

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        ctx = browser.new_context(user_agent=USER_AGENT, viewport={"width": 1440, "height": 900})
        page = ctx.new_page()
        log.info("Playwright: navegando a %s", TARGET_URL)
        try:
            page.goto(TARGET_URL, wait_until="domcontentloaded", timeout=60_000)
            page.wait_for_load_state("networkidle", timeout=60_000)
        except Exception as e:
            log.warning("Playwright carga incompleta: %s", e)
        html = page.content()
        browser.close()

    # Guardar HTML crudo para auditoría.
    raw_dir.mkdir(parents=True, exist_ok=True)
    (raw_dir / "page.html").write_text(html, encoding="utf-8")

    snap, models_meta, default_data = parse_rsc_html(html)
    if snap is not None:
        snap.method = "playwright"
    return snap, models_meta, default_data


# ---------------------------------------------------------------------------
# Escritura de salidas
# ---------------------------------------------------------------------------


def write_snapshot_files(
    snap: Snapshot,
    repo_root: Path,
    dry_run: bool,
    html: str | None,
    models_meta: list | None = None,
    default_data: list | None = None,
) -> None:
    data_dir = repo_root / "data"
    raw_dir = data_dir / "raw" / today_stamp()
    src_data = repo_root / "src" / "data"
    docs_dir = repo_root / "docs"

    snapshot_path = data_dir / "intelligence-index.json"
    history_path = data_dir / "intelligence-index.jsonl"
    ts_path = src_data / "intelligence-index.ts"
    md_path = docs_dir / "intelligence-index.md"
    master_path = data_dir / "intelligence-index-master.json"

    if dry_run:
        log.info("[dry-run] se escribirían:")
        for p in (snapshot_path, master_path, history_path, ts_path, md_path):
            log.info("  %s", p)
        log.info("  %s/page.html + defaultData.json + models.json", raw_dir)
        return

    data_dir.mkdir(parents=True, exist_ok=True)
    raw_dir.mkdir(parents=True, exist_ok=True)
    src_data.mkdir(parents=True, exist_ok=True)
    docs_dir.mkdir(parents=True, exist_ok=True)

    # Snapshot consolidado (SLIM: master_table + secciones con campos clave).
    snapshot_path.write_text(
        json.dumps(snap.to_dict(), ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    log.info("Escrito %s", snapshot_path)

    # Tabla maestra compacta (para consumo directo).
    master_path.write_text(
        json.dumps(snap.data.get("master_table", []), ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    log.info("Escrito %s", master_path)

    # Histórico (1 línea/día, idempotente).
    history_entry = {
        "date": today_stamp(),
        "fetched_at": snap.fetched_at,
        "method": snap.method,
        "index_version": snap.index_version,
        "n_models": snap.n_models,
        "n_default_data": snap.n_default_data,
        "sections_captured": snap.sections_captured,
        "sections_failed": snap.sections_failed,
        "summary": _build_history_summary(snap),
    }
    _append_history(history_path, history_entry)
    log.info("Actualizado %s", history_path)

    # Auditoría: HTML + defaultData completo + models en data/raw/<fecha>/.
    if html:
        (raw_dir / "page.html").write_text(html, encoding="utf-8")
        log.info("Escrito %s (%d bytes)", raw_dir / "page.html", len(html))
    if default_data is not None:
        (raw_dir / "defaultData.json").write_text(
            json.dumps(default_data, ensure_ascii=False, indent=2), encoding="utf-8"
        )
        log.info("Escrito %s/defaultData.json", raw_dir)
    if models_meta is not None:
        (raw_dir / "models.json").write_text(
            json.dumps(models_meta, ensure_ascii=False, indent=2), encoding="utf-8"
        )
        log.info("Escrito %s/models.json", raw_dir)

    # Módulo TS importable por Astro (solo master_table + metadata; sin payload gigante).
    ts_path.write_text(_render_ts_module(snap), encoding="utf-8")
    log.info("Escrito %s", ts_path)

    # Informe Markdown.
    md_path.write_text(_render_markdown_report(snap), encoding="utf-8")
    log.info("Escrito %s", md_path)


def _append_history(path: Path, entry: dict) -> None:
    today = entry["date"]
    lines: list[str] = []
    if path.exists():
        for line in path.read_text(encoding="utf-8").splitlines():
            try:
                obj = json.loads(line)
                if obj.get("date") == today:
                    continue
                lines.append(line)
            except Exception:
                lines.append(line)
    lines.append(json.dumps(entry, ensure_ascii=False))
    path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def _build_history_summary(snap: Snapshot) -> dict:
    summary: dict = {"top_intelligence_index": []}
    master = snap.data.get("master_table", [])
    for row in master[:15]:
        summary["top_intelligence_index"].append({
            "name": row.get("name"),
            "slug": row.get("slug"),
            "creator": row.get("creator"),
            "intelligence_index": row.get("intelligence_index"),
            "coding_index": row.get("coding_index"),
        })
    return summary


def _render_ts_module(snap: Snapshot) -> str:
    # Solo master_table + metadata en el .ts (evita un fichero de ~19MB).
    master = snap.data.get("master_table", [])
    meta = {
        "fetched_at": snap.fetched_at,
        "source_url": snap.source_url,
        "index_version": snap.index_version,
        "method": snap.method,
        "n_models": snap.n_models,
        "n_default_data": snap.n_default_data,
        "sections_captured": snap.sections_captured,
        "sections_failed": snap.sections_failed,
    }
    return f"""// AUTOGENERADO por scripts/fetch_intelligence_index.py (skill update-intelligence-index).
// No editar a mano. Última actualización: {snap.fetched_at}
// Fuente: {snap.source_url} (método: {snap.method}, versión: {snap.index_version or '?'})
// Modelos: {snap.n_models} metadata / {snap.n_default_data} con datos.
// Snapshot completo en ../../data/intelligence-index.json; raw en ../../data/raw/.

import type {{ MasterRow, IntelligenceIndexMeta }} from './intelligence-index-types';

export const intelligenceIndexMeta: IntelligenceIndexMeta = {json.dumps(meta, ensure_ascii=False, indent=2)};

export const intelligenceIndexMaster: MasterRow[] = {json.dumps(master, ensure_ascii=False, indent=2)};

export const lastUpdated = intelligenceIndexMeta.fetched_at;
export const indexVersion = intelligenceIndexMeta.index_version;
export const sectionsCaptured = intelligenceIndexMeta.sections_captured;
export default intelligenceIndexMaster;
"""


def _render_markdown_report(snap: Snapshot) -> str:
    lines: list[str] = []
    lines.append("# Artificial Analysis Intelligence Index")
    lines.append("")
    lines.append(f"- **Última actualización:** `{snap.fetched_at}`")
    lines.append(f"- **Fuente:** {snap.source_url}")
    lines.append(f"- **Versión del índice:** {snap.index_version or 'desconocida'}")
    lines.append(f"- **Método de extracción:** `{snap.method}`")
    lines.append(f"- **Modelos (metadata):** {snap.n_models}")
    lines.append(f"- **Entradas con datos:** {snap.n_default_data}")
    lines.append(f"- **Secciones capturadas:** {', '.join(snap.sections_captured) or '—'}")
    lines.append(f"- **Secciones NO capturadas:** {', '.join(snap.sections_failed) or '—'}")
    lines.append("")
    lines.append("> Datos públicos de Artificial Analysis. Uso personal/educativo. "
                 "Verifica siempre la fuente original.")
    lines.append("")
    lines.append("## Sub-evaluaciones del Intelligence Index v4.1")
    lines.append("")
    for s in SUB_EVALUATIONS:
        lines.append(f"- {s}")
    lines.append("")

    # Top 25 Intelligence Index (tabla maestra).
    master = snap.data.get("master_table", [])
    lines.append("## Top 25 — Artificial Analysis Intelligence Index")
    lines.append("")
    lines.append("| # | Modelo | Creador | II | Coding | Agentic | GDPval v2 (Elo) | Omniscience | Open | Contexto |")
    lines.append("|---|---|---|---|---|---|---|---|---|---|")
    for i, r in enumerate(master[:25], 1):
        lines.append(
            f"| {i} | {r.get('name') or '—'} | {r.get('creator') or '—'} "
            f"| {_fmt(r.get('intelligence_index'))} "
            f"| {_fmt(r.get('coding_index'))} | {_fmt(r.get('agentic_index'))} "
            f"| {_fmt(r.get('gdpval_elo'))} | {_fmt(r.get('omniscience'))} "
            f"| {'✓' if r.get('is_open_weights') else '—'} "
            f"| {_fmt_ctx(r.get('context_window_tokens'))} |"
        )
    lines.append("")

    # Secciones detalladas.
    for section in ALL_SECTIONS:
        if section == "metadata":
            continue
        payload = snap.data.get(section)
        if not payload:
            continue
        lines.append(f"## `{section}`")
        lines.append("")
        if isinstance(payload, list) and payload and isinstance(payload[0], dict):
            cols = list(dict.fromkeys(k for p in payload[:50] for k in p.keys()))[:10]
            lines.append("| " + " | ".join(cols) + " |")
            lines.append("| " + " | ".join("---" for _ in cols) + " |")
            for p in payload[:30]:
                lines.append("| " + " | ".join(_md_cell(p.get(c)) for c in cols) + " |")
            if len(payload) > 30:
                lines.append(f"\n_…y {len(payload) - 30} filas más. Ver JSON completo en `data/intelligence-index.json`._")
        elif isinstance(payload, dict):
            lines.append("```json")
            lines.append(json.dumps(payload, ensure_ascii=False, indent=2)[:5000])
            lines.append("```")
        lines.append("")

    lines.append("---")
    lines.append(f"_Generado automáticamente por `scripts/fetch_intelligence_index.py`._")
    return "\n".join(lines) + "\n"


def _fmt(v: Any) -> str:
    if v is None:
        return "—"
    if isinstance(v, float):
        return f"{v:.2f}"
    return str(v)


def _fmt_ctx(n: Any) -> str:
    if n is None:
        return "—"
    try:
        n = int(n)
    except Exception:
        return str(n)
    return f"{n // 1_000_000}M" if n >= 1_000_000 else f"{n // 1000}K"


def _md_cell(v: Any) -> str:
    if v is None:
        return "—"
    if isinstance(v, (dict, list)):
        s = json.dumps(v, ensure_ascii=False)
        return s.replace("|", "\\|")[:80]
    s = str(v)
    return s.replace("|", "\\|").replace("\n", " ")[:100]


# ---------------------------------------------------------------------------
# Tipos TS (fijos)
# ---------------------------------------------------------------------------


TS_TYPES = """// Tipos para el snapshot del Artificial Analysis Intelligence Index.
// AUTOGENERADO por la skill update-intelligence-index.

export interface IntelligenceIndexMeta {
  fetched_at: string;
  source_url: string;
  index_version: string | null;
  method: 'rsc-html' | 'playwright';
  n_models: number;
  n_default_data: number;
  sections_captured: string[];
  sections_failed: string[];
}

export interface MasterRow {
  slug: string | null;
  name: string | null;
  short_name?: string | null;
  creator?: string | null;
  intelligence_index?: number | null;
  intelligence_index_v4_1?: number | null;
  coding_index?: number | null;
  agentic_index?: number | null;
  gdpval_v2?: number | null;
  gdpval_elo?: number | null;
  omniscience?: number | null;
  scicode?: number | null;
  hle?: number | null;
  gpqa?: number | null;
  critpt?: number | null;
  lcr?: number | null;
  terminalbench_v2_1?: number | null;
  tau_banking?: number | null;
  ifbench?: number | null;
  livecodebench?: number | null;
  humaneval?: number | null;
  aime?: number | null;
  mmlu_pro?: number | null;
  mmmu_pro?: number | null;
  briefcase?: number | null;
  is_open_weights?: boolean | null;
  context_window_tokens?: number | null;
  parameters?: number | null;
  activeParams?: number | null;
  release_date?: string | null;
  reasoning_model?: boolean | null;
  frontier_model?: boolean | null;
  deprecated?: boolean | null;
  price_1m_input?: number | null;
  price_1m_output?: number | null;
  price_1m_blended_7_2_1?: number | null;
  cost_per_task_total?: number | null;
  time_per_task?: number | null;
  output_tokens_per_task?: number | null;
}

// Snapshot completo (en data/intelligence-index.json). La interfaz detallada
// de las secciones es Record<string, unknown> por simplicidad; usa master_table
// para acceder a las métricas por modelo con tipado.
export interface IntelligenceIndexSnapshot extends IntelligenceIndexMeta {
  data: {
    master_table: MasterRow[];
    [section: string]: unknown;
  };
}
"""


def ensure_ts_types(repo_root: Path) -> None:
    types_path = repo_root / "src" / "data" / "intelligence-index-types.ts"
    types_path.parent.mkdir(parents=True, exist_ok=True)
    types_path.write_text(TS_TYPES, encoding="utf-8")
    log.info("Escrito %s (tipos)", types_path)


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------


def parse_args(argv: list[str]) -> argparse.Namespace:
    p = argparse.ArgumentParser(description="Fetch Artificial Analysis Intelligence Index")
    p.add_argument("--repo-root", default=None, help="Ruta raíz del repo Astro (default: auto)")
    p.add_argument("--dry-run", action="store_true", help="No escribir archivos")
    p.add_argument("--no-playwright", action="store_true", help="Solo RSC-HTML; no usar Playwright como fallback")
    p.add_argument(
        "--force-playwright",
        action="store_true",
        help="Forzar el fallback Playwright (ignora RSC-HTML); útil para validar el fallback",
    )
    p.add_argument("--sections", default=None, help="Lista de secciones separadas por coma (default: todas)")
    p.add_argument("--verbose", action="store_true", help="Log detallado")
    return p.parse_args(argv)


def find_repo_root() -> Path:
    candidates = [
        Path(r"C:\Users\jesus\OneDrive\Documents\Claude\Projects\Modelos de Inteligencia Artificial"),
        Path.cwd(),
    ]
    for c in candidates:
        if (c / "src" / "data" / "models.ts").exists() or (c / "astro.config.mjs").exists():
            return c
    return Path.cwd()


def main(argv: list[str] | None = None) -> int:
    args = parse_args(argv if argv is not None else sys.argv[1:])
    logging.basicConfig(
        level=logging.DEBUG if args.verbose else logging.INFO,
        format="%(asctime)s %(levelname)s %(message)s",
        datefmt="%H:%M:%S",
    )

    repo_root = Path(args.repo_root) if args.repo_root else find_repo_root()
    log.info("Repo raíz: %s", repo_root)

    # Filtrar secciones (afecta a ALL_SECTIONS y SECTION_SLIM_FIELDS usados en parseo/escritura).
    global ALL_SECTIONS, SECTION_SLIM_FIELDS
    if args.sections:
        wanted = {s.strip() for s in args.sections.split(",") if s.strip()}
        wanted.add("master_table")
        ALL_SECTIONS = [s for s in ALL_SECTIONS if s in wanted]
        SECTION_SLIM_FIELDS = {k: v for k, v in SECTION_SLIM_FIELDS.items() if k in wanted}

    if args.force_playwright and args.no_playwright:
        log.error("--force-playwright y --no-playwright son incompatibles.")
        return 2

    # Fase 1: RSC-HTML (se omite si se fuerza el fallback Playwright).
    if args.force_playwright:
        log.info("--force-playwright: se omite la fase RSC-HTML.")
        html = None
    else:
        html = fetch_html()
    snap: Snapshot | None = None
    models_meta: list | None = None
    default_data: list | None = None
    if html:
        snap, models_meta, default_data = parse_rsc_html(html)
    if snap is not None:
        log.info("Fase RSC-HTML OK. Secciones: %s", snap.sections_captured)
    else:
        log.warning("Fase RSC-HTML sin éxito.")
        if args.no_playwright:
            log.error("No se obtuvieron datos y --no-playwright está activo. Abortando.")
            return 2
        raw_dir = repo_root / "data" / "raw" / today_stamp()
        snap, models_meta, default_data = try_playwright_fallback(raw_dir)
        if snap is None:
            log.error("Playwright fallback también falló. No se pudo obtener información.")
            return 3
        log.info("Fase Playwright OK. Secciones: %s", snap.sections_captured)

    # Tipos TS (siempre idempotente).
    ensure_ts_types(repo_root)

    # Escribir salidas.
    write_snapshot_files(
        snap, repo_root, dry_run=args.dry_run, html=html,
        models_meta=models_meta, default_data=default_data,
    )

    log.info("Listo. %d modelos en tabla maestra.", len(snap.data.get("master_table", [])))
    if snap.sections_failed:
        log.warning("Secciones NO capturadas: %s", snap.sections_failed)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
