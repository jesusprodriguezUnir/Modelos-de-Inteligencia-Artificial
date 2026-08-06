#!/usr/bin/env python3
"""Enriquece el catálogo con datos de múltiples fuentes públicas.

Fuentes:
  1. OpenRouter API (https://openrouter.ai/api/v1/models) — precios exactos,
     contexto, modalidades, benchmarks de AA y Design Arena. Sin autenticación.

Escribe ``data/multi-source-enrichment.json`` que ``build_auto_catalog.py``
lee opcionalmente para sobrescribir precios y añadir benchmarks.

Uso:
  python scripts/fetch_multi_sources.py [--dry-run] [--verbose] [--repo-root PATH]
"""
from __future__ import annotations

import argparse
import json
import logging
import re
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

try:
    import httpx
except ImportError:
    httpx = None  # type: ignore[assignment]

log = logging.getLogger("fetch-multi")

OPENROUTER_URL = "https://openrouter.ai/api/v1/models"
USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
)


def find_repo_root(explicit: str | None) -> Path:
    if explicit:
        return Path(explicit).resolve()
    here = Path(__file__).resolve()
    for parent in [here.parent, *here.parents]:
        if (parent / "data").exists() and (parent / "src" / "data").exists():
            return parent
    return here.parent.parent


def fetch_openrouter() -> list[dict[str, Any]]:
    """Descarga todos los modelos de la API pública de OpenRouter."""
    if httpx is None:
        raise RuntimeError("httpx no instalado: pip install httpx>=0.27")
    log.info("Consultando OpenRouter API: %s", OPENROUTER_URL)
    resp = httpx.get(OPENROUTER_URL, headers={"User-Agent": USER_AGENT}, timeout=30)
    resp.raise_for_status()
    data = resp.json()
    models = data.get("data", [])
    log.info("OpenRouter devolvió %d modelos", len(models))
    return models


def normalize_slug(or_id: str) -> str:
    """Convierte un ID de OpenRouter (ej. 'anthropic/claude-opus-5') en algo
    comparable con nuestros slugs e iiSlugs del catálogo."""
    # Quitar el prefijo de proveedor
    parts = or_id.split("/", 1)
    slug = parts[-1] if len(parts) > 1 else or_id
    # Quitar sufijos de fecha (ej. -20260723)
    slug = re.sub(r"-\d{8}$", "", slug)
    # Quitar :free y similares
    slug = slug.split(":")[0]
    # Quitar prefijo ~ (alias)
    slug = slug.lstrip("~")
    return slug


def extract_enrichment(or_models: list[dict]) -> dict[str, Any]:
    """Transforma los modelos de OpenRouter en un mapa slug → datos de enriquecimiento."""
    enrichment: dict[str, Any] = {}

    for m in or_models:
        or_id = m.get("id", "")
        # Ignorar aliases (~), :free y routers
        if or_id.startswith("~") or ":free" in or_id or "openrouter/" in or_id:
            continue
        if or_id.startswith("aion-labs/"):
            continue  # Modelos de roleplay, no relevantes

        slug = normalize_slug(or_id)
        pricing = m.get("pricing", {})
        prompt_price = pricing.get("prompt")
        completion_price = pricing.get("completion")

        # Convertir de $/token a $/1M tokens
        input_per_1m = None
        output_per_1m = None
        if prompt_price and prompt_price != "-1":
            try:
                input_per_1m = round(float(prompt_price) * 1_000_000, 4)
            except (ValueError, TypeError):
                pass
        if completion_price and completion_price != "-1":
            try:
                output_per_1m = round(float(completion_price) * 1_000_000, 4)
            except (ValueError, TypeError):
                pass

        context = m.get("context_length")
        arch = m.get("architecture", {})
        input_modalities = arch.get("input_modalities", [])
        output_modalities = arch.get("output_modalities", [])

        benchmarks = m.get("benchmarks", {})
        aa = benchmarks.get("artificial_analysis", {})
        design_arena = benchmarks.get("design_arena", [])

        reasoning = m.get("reasoning", {})
        knowledge_cutoff = m.get("knowledge_cutoff")

        entry: dict[str, Any] = {
            "openrouter_id": or_id,
            "name": m.get("name", ""),
            "description": (m.get("description") or "")[:200],
        }

        if input_per_1m is not None or output_per_1m is not None:
            entry["pricing"] = {
                "inputPer1M": input_per_1m,
                "outputPer1M": output_per_1m,
            }
        if context:
            entry["context"] = context
        if input_modalities:
            entry["modalities"] = sorted(set(
                mod for mod in input_modalities
                if mod in ("text", "image", "audio", "video")
            ))
        if aa:
            entry["aa_benchmarks"] = {
                k: round(v, 1) if isinstance(v, (int, float)) else v
                for k, v in aa.items()
                if v is not None
            }
        if design_arena:
            # Calcular Elo medio en categoría "models"
            model_arena = [d for d in design_arena if d.get("arena") == "models"]
            if model_arena:
                avg_elo = round(sum(d.get("elo", 0) for d in model_arena) / len(model_arena), 1)
                entry["design_arena_avg_elo"] = avg_elo
        if reasoning:
            entry["is_reasoning"] = reasoning.get("mandatory", False) or reasoning.get("default_enabled", False)
        if knowledge_cutoff:
            entry["knowledge_cutoff"] = knowledge_cutoff

        # Evitar duplicados — quedarnos con el que tenga más info
        if slug in enrichment:
            existing = enrichment[slug]
            if len(json.dumps(entry)) > len(json.dumps(existing)):
                enrichment[slug] = entry
        else:
            enrichment[slug] = entry

    return enrichment


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--repo-root", default=None)
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--verbose", action="store_true")
    args = ap.parse_args()

    logging.basicConfig(
        level=logging.DEBUG if args.verbose else logging.INFO,
        format="%(levelname)s %(message)s",
    )

    repo = find_repo_root(args.repo_root)
    out_path = repo / "data" / "multi-source-enrichment.json"

    try:
        or_models = fetch_openrouter()
    except Exception as exc:
        log.error("Error al consultar OpenRouter: %s", exc)
        log.info("Continuando sin datos de OpenRouter")
        or_models = []

    enrichment = extract_enrichment(or_models)
    log.info("Modelos enriquecidos: %d", len(enrichment))

    # Estadísticas
    with_pricing = sum(1 for e in enrichment.values() if "pricing" in e)
    with_aa = sum(1 for e in enrichment.values() if "aa_benchmarks" in e)
    with_arena = sum(1 for e in enrichment.values() if "design_arena_avg_elo" in e)
    log.info("  Con precios: %d", with_pricing)
    log.info("  Con AA benchmarks: %d", with_aa)
    log.info("  Con Design Arena Elo: %d", with_arena)

    output = {
        "fetched_at": datetime.now(timezone.utc).isoformat(),
        "source": "openrouter",
        "total_models": len(enrichment),
        "models": enrichment,
    }

    if args.dry_run:
        log.info("[dry-run] No se escribe. Tamaño JSON: %d bytes", len(json.dumps(output)))
        # Mostrar primeros 5 modelos como muestra
        for slug in list(enrichment)[:5]:
            log.info("  %s: %s", slug, json.dumps(enrichment[slug], ensure_ascii=False)[:120])
        return 0

    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(json.dumps(output, indent=2, ensure_ascii=False), encoding="utf-8")
    log.info("Escrito: %s (%d modelos)", out_path, len(enrichment))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
