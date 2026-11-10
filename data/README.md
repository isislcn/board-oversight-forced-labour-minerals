# Data folder

## Layout

| Folder | In git? | Contents |
|---|---|---|
| `config/` | Yes | Configuration that drives the pipeline: `minerals.yaml`, `companies.yaml`, `risk_contexts.yaml`, `risk_factor_map.csv`, `board_indicators.yaml`, `readings.yaml`, `publish_rules.yaml`, `palette.yaml` (planned). |
| `derived/` | Yes | **Publishable** outputs only: licence-permitted, derived tables and summaries, versioned. |
| `raw/` | **No (git-ignored)** | Raw API responses and downloaded documents, including licensed Sayari data. Never committed. |
| `cache/` | **No (git-ignored)** | Request cache: `cache/<source>/<YYYY-MM-DD>/<request_hash>.json` plus an index of parameters, timestamps and hashes. Never committed. |

See [DATA_NOTICE.md](../DATA_NOTICE.md) for publication rules.

## Adding a mineral

Add a row to `config/minerals.yaml` (HS codes confirmed through Sayari's HS-code lookup, high-risk regions, risk contexts, default trade window). Add mappings to `config/risk_factor_map.csv` if new flags apply, and readings to `config/readings.yaml`. No code changes are needed. The full steps are in the methodology page (planned) and [docs/02-specification.md](../docs/02-specification.md) (FR-34).

## Versioning and the thesis snapshot

- Data releases use semantic versioning: **MAJOR** = schema change; **MINOR** = new companies, minerals or refreshed data; **PATCH** = corrections.
- Each release is stored as `derived/v<version>/` with a `MANIFEST.sha256` checksum file and an entry in `version_log`.
- The **thesis snapshot** (for example `derived/v1.0.0-thesis/`, git tag `v1.0.0-thesis`) is **frozen**. It is never edited. Later updates create new versions, and errata are listed on the methodology page.
- Raw data underlying a snapshot is archived privately (licence permitting); only its checksums are recorded publicly.
