#!/usr/bin/env python3
"""Construye el catálogo autoimportado a partir del Intelligence Index.

Lee ``data/intelligence-index-master.json`` (generado a diario por
``scripts/fetch_intelligence_index.py``; este script NO vuelve a raspar la web)
y emite ``src/data/auto-models.ts`` con tres exports consumidos por la capa de
fusión de ``src/data/models.ts``:

  - ``autoModels``    : top N modelos por ``coding_index`` mapeados al tipo Model.
  - ``autoSpecs``     : specs frescas (precio/contexto/benchmarks/…) por slug, de
                        TODO el master, para refrescar los modelos ya curados.
  - ``autoCompanies`` : metadatos de empresas (creators) que aún no existen en el
                        objeto ``companies`` curado a mano.

El catálogo curado (models.ts) siempre tiene prioridad: lo autogenerado solo
rellena huecos y añade modelos nuevos del mercado. Ver CLAUDE.md.

Uso:
    python scripts/build_auto_catalog.py [--top 50] [--dry-run] [--verbose]
"""
from __future__ import annotations

import argparse
import json
import logging
import re
from pathlib import Path
from typing import Any

log = logging.getLogger("build_auto_catalog")

# Creator de Artificial Analysis -> clave existente en `companies` de models.ts.
# Lo que no esté aquí se autogenera en `autoCompanies` (curable luego a mano).
CREATOR_TO_COMPANY: dict[str, str] = {
    "Anthropic": "Anthropic",
    "OpenAI": "OpenAI",
    "Google": "Google",
    "Microsoft": "Microsoft",
    "xAI": "xAI",
    "Meta": "Meta",
    "Mistral": "Mistral",
    "DeepSeek": "DeepSeek",
    "Alibaba": "Alibaba",
    "Z AI": "Zhipu",          # Z AI = Zhipu / familia GLM
    "Kimi": "Moonshot",       # Kimi = Moonshot AI
    "MiniMax": "MiniMax",
    "Xiaomi": "Xiaomi",       # familia MiMo
    "Baidu": "Baidu",         # familia ERNIE
    "Tencent": "Tencent",     # familia Hunyuan
    "StepFun": "StepFun",
}

# Origen (nacionalidad de la empresa) para los creators autogenerados.
CREATOR_ORIGIN: dict[str, str] = {
    "NVIDIA": "US", "Amazon": "US", "IBM": "US", "Cohere": "US",
    "Perplexity": "US", "Allen Institute for AI": "US", "Nous Research": "US",
    "Liquid AI": "US", "Databricks": "US", "Snowflake": "US", "ServiceNow": "US",
    "Reka AI": "US", "OpenChat": "US", "Arcee AI": "US", "Inception": "US",
    "Prime Intellect": "US", "AI21 Labs": "EU", "Mistral": "EU",
    "Swiss AI Initiative": "EU", "Multiverse Computing": "EU", "TII UAE": "EU",
    "InclusionAI": "China", "KwaiKAT": "China", "China Mobile": "China",
    "ByteDance Seed": "China", "OpenBMB": "China", "LongCat": "China",
    "Nanbeige": "China", "Motif Technologies": "China", "Trillion Labs": "China",
    "LG AI Research": "US", "Upstage": "US", "Naver": "US", "Korea Telecom": "US",
    "Sarvam": "US", "MBZUAI Institute of Foundation Models": "EU",
}

DEFAULT_ACCENT = "#64748b"  # slate-500 neutro para empresas sin marca curada
KNOWN_COMPANY_KEYS = set(CREATOR_TO_COMPANY.values())

GENERATED_HEADER = (
    "// AUTOGENERADO por scripts/build_auto_catalog.py — NO EDITAR A MANO.\n"
    "// Se regenera a diario a partir de data/intelligence-index-master.json.\n"
    "// El catálogo curado (models.ts) SIEMPRE tiene prioridad sobre estos datos:\n"
    "// la fusión de models.ts solo rellena huecos y añade modelos nuevos.\n"
)


def find_repo_root(explicit: str | None) -> Path:
    if explicit:
        return Path(explicit).resolve()
    here = Path(__file__).resolve()
    for parent in [here.parent, *here.parents]:
        if (parent / "data" / "intelligence-index-master.json").exists():
            return parent
    # Fallback: raíz del repo es el padre de scripts/
    return here.parent.parent


def num(v: Any) -> float | None:
    """Devuelve un número redondeado y limpio o None."""
    if v is None or isinstance(v, bool):
        return None
    try:
        f = float(v)
    except (TypeError, ValueError):
        return None
    if f != f:  # NaN
        return None
    return round(f, 4)


def round1(v: Any) -> float | None:
    f = num(v)
    return None if f is None else round(f, 1)


def display_name(row: dict[str, Any]) -> str:
    name = (row.get("short_name") or row.get("name") or row.get("slug") or "").strip()
    return name


def derive_categories(row: dict[str, Any]) -> list[str]:
    cats = ["coding"]
    if row.get("reasoning_model"):
        cats.append("reasoning")
    if row.get("agentic_index") is not None:
        cats.append("agentic")
    price_in = num(row.get("price_1m_input"))
    if price_in is not None and price_in <= 0.5:
        cats.append("budget")
    return cats


def build_spec(row: dict[str, Any]) -> dict[str, Any] | None:
    """Specs frescas para refrescar un modelo curado. None si no hay nada útil."""
    spec: dict[str, Any] = {}
    pin, pout = num(row.get("price_1m_input")), num(row.get("price_1m_output"))
    if pin is not None or pout is not None:
        spec["pricing"] = {"inputPer1M": pin, "outputPer1M": pout, "approx": True}
    ctx = num(row.get("context_window_tokens"))
    if ctx is not None:
        spec["context"] = int(ctx)
    bench: dict[str, float] = {}
    if round1(row.get("livecodebench")) is not None:
        bench["liveCodeBench"] = round1(row.get("livecodebench"))
    if round1(row.get("humaneval")) is not None:
        bench["humanEval"] = round1(row.get("humaneval"))
    if bench:
        spec["benchmarks"] = bench
    params = num(row.get("parameters"))
    if params is not None:
        spec["parameters"] = params
    rel = row.get("release_date")
    if isinstance(rel, str) and rel:
        spec["releaseDate"] = rel
    return spec or None


def build_model(row: dict[str, Any], company_key: str, origin: str) -> dict[str, Any]:
    pin, pout = num(row.get("price_1m_input")), num(row.get("price_1m_output"))
    model: dict[str, Any] = {
        "id": row["slug"],
        "iiSlug": row["slug"],
        "company": company_key,
        "origin": origin,
        "displayName": display_name(row),
        "kind": "model",
        "category": derive_categories(row),
        "context": int(num(row.get("context_window_tokens")))
        if num(row.get("context_window_tokens")) is not None
        else None,
        "pricing": {"inputPer1M": pin, "outputPer1M": pout, "approx": True},
        "modalities": ["text"],
        "openWeight": bool(row.get("is_open_weights")) or False,
    }
    rel = row.get("release_date")
    if isinstance(rel, str) and rel:
        model["releaseDate"] = rel
    params = num(row.get("parameters"))
    if params is not None:
        model["parameters"] = params
    bench: dict[str, float] = {}
    if round1(row.get("livecodebench")) is not None:
        bench["liveCodeBench"] = round1(row.get("livecodebench"))
    if round1(row.get("humaneval")) is not None:
        bench["humanEval"] = round1(row.get("humaneval"))
    if bench:
        model["benchmarks"] = bench
    model["notes"] = (
        f"Importado automáticamente del Artificial Analysis Intelligence Index "
        f"(Coding Index {round1(row.get('coding_index'))}). Precios aproximados; "
        f"verifica en la web oficial del proveedor."
    )
    return model


def company_for(creator: str | None) -> tuple[str, str]:
    """Devuelve (clave_de_empresa, origen)."""
    creator = (creator or "Desconocido").strip()
    if creator in CREATOR_TO_COMPANY:
        return CREATOR_TO_COMPANY[creator], _origin_for_known(CREATOR_TO_COMPANY[creator])
    # Clave autogenerada estable a partir del nombre del creator.
    key = re.sub(r"[^A-Za-z0-9]+", "", creator) or "Desconocido"
    return key, CREATOR_ORIGIN.get(creator, "US")


# Origen de las empresas ya conocidas (coincide con companies de models.ts).
_KNOWN_ORIGIN = {
    "Anthropic": "US", "OpenAI": "US", "Google": "US", "Microsoft": "US",
    "xAI": "US", "Meta": "Open", "Mistral": "EU", "DeepSeek": "China",
    "Alibaba": "China", "Zhipu": "China", "Moonshot": "China", "MiniMax": "China",
    "Xiaomi": "China", "Baidu": "China", "Tencent": "China", "StepFun": "China",
}


def _origin_for_known(company_key: str) -> str:
    return _KNOWN_ORIGIN.get(company_key, "US")


def ts_literal(value: Any, indent: int = 0) -> str:
    """Serializa un valor Python como literal TS (JSON es subconjunto válido)."""
    return json.dumps(value, ensure_ascii=False, indent=2)


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--repo-root", default=None)
    ap.add_argument("--top", type=int, default=50, help="Nº de modelos a importar")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--verbose", action="store_true")
    args = ap.parse_args()

    logging.basicConfig(
        level=logging.DEBUG if args.verbose else logging.INFO,
        format="%(levelname)s %(message)s",
    )

    repo = find_repo_root(args.repo_root)
    master_path = repo / "data" / "intelligence-index-master.json"
    out_path = repo / "src" / "data" / "auto-models.ts"
    log.info("Repo root: %s", repo)
    log.info("Master:    %s", master_path)

    if not master_path.exists():
        log.error("No existe %s — ejecuta antes fetch_intelligence_index.py", master_path)
        return 1

    rows: list[dict[str, Any]] = json.loads(master_path.read_text(encoding="utf-8"))
    log.info("Filas en el master: %d", len(rows))

    # 1) autoSpecs: TODO el master con slug y algo útil.
    auto_specs: dict[str, Any] = {}
    for r in rows:
        slug = r.get("slug")
        if not slug:
            continue
        spec = build_spec(r)
        if spec is not None:
            auto_specs[slug] = spec
    log.info("autoSpecs: %d modelos con specs", len(auto_specs))

    # 2) autoModels: top N por coding_index, no deprecados, con slug.
    candidates = [
        r for r in rows
        if r.get("slug")
        and r.get("coding_index") is not None
        and not r.get("deprecated")
    ]
    candidates.sort(key=lambda r: r["coding_index"], reverse=True)
    selected = candidates[: args.top]
    log.info("Candidatos con coding_index (no deprecados): %d", len(candidates))
    log.info("Seleccionados (top %d): %d", args.top, len(selected))

    auto_models: list[dict[str, Any]] = []
    auto_companies: dict[str, Any] = {}
    creator_counts: dict[str, int] = {}
    for r in selected:
        creator = r.get("creator")
        company_key, origin = company_for(creator)
        creator_counts[creator or "?"] = creator_counts.get(creator or "?", 0) + 1
        auto_models.append(build_model(r, company_key, origin))
        # ¿Empresa desconocida? -> generar metadato.
        if company_key not in KNOWN_COMPANY_KEYS and company_key not in auto_companies:
            auto_companies[company_key] = {
                "name": (creator or company_key).strip(),
                "origin": origin,
                "accent": DEFAULT_ACCENT,
                "blurb": f"{(creator or company_key).strip()} — datos del Artificial "
                f"Analysis Intelligence Index.",
            }

    log.info("autoCompanies (nuevas, no curadas): %d -> %s",
             len(auto_companies), sorted(auto_companies))
    if args.verbose:
        for c, n in sorted(creator_counts.items(), key=lambda x: -x[1]):
            log.debug("  %2d  %s", n, c)

    # 3) Emitir TS.
    ts = (
        GENERATED_HEADER
        + "\nimport type { Model, CompanyMeta } from './types';\n\n"
        + "/** Specs frescas por slug del Intelligence Index, para refrescar curados. */\n"
        + "export interface AutoSpec {\n"
        + "  pricing?: { inputPer1M: number | null; outputPer1M: number | null; approx: true };\n"
        + "  context?: number;\n"
        + "  benchmarks?: { liveCodeBench?: number; humanEval?: number };\n"
        + "  parameters?: number;\n"
        + "  releaseDate?: string;\n"
        + "}\n\n"
        + f"export const autoModels: Model[] = {ts_literal(auto_models)};\n\n"
        + f"export const autoSpecs: Record<string, AutoSpec> = {ts_literal(auto_specs)};\n\n"
        + f"export const autoCompanies: Record<string, CompanyMeta> = {ts_literal(auto_companies)};\n"
    )

    if args.dry_run:
        log.info("[dry-run] No se escribe. Tamaño TS: %d bytes, %d modelos.",
                 len(ts), len(auto_models))
        return 0

    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(ts, encoding="utf-8")
    log.info("Escrito %s (%d modelos, %d specs, %d empresas nuevas)",
             out_path, len(auto_models), len(auto_specs), len(auto_companies))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
