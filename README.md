# Board Oversight of Forced Labour Risk in Mineral Supply Chains

A research dashboard that shows how the boards of major technology companies oversee forced labour risks in their mineral supply chains. It also tests how far that oversight aligns with the UN Guiding Principles on Business and Human Rights (UNGPs) on **leverage, remedy and responsible exit**. It combines three layers: **exposure** (supply chain risk indicators, starting from suppliers the companies disclose themselves), **oversight** (board responsibilities coded from proxy statements and charters) and **stewardship** (how BlackRock, Vanguard and State Street voted on related shareholder proposals, 2022–2026). The pilot covers **cobalt** at **Tesla, Apple and Microsoft**.

## Thesis context

This tool is part of the research method of a master's thesis: *[Thesis title — placeholder]*, *[Programme, Institution — placeholder]*, *[Year]*. Its findings are analysed in the thesis case-study chapter. The thesis cites a frozen, versioned **thesis snapshot** of the data (see [docs/02-specification.md § 12](docs/02-specification.md#12-thesis-integration-and-versioning)).

## Status

**Planning stage — no application code yet.** This repository contains planning documents and publication files only.

## Important caveat

> Supply chain links and risk flags are derived from Sayari Graph data (queried [date]). They are risk indicators based on trade, corporate and third-party records, not findings that any company uses forced labour. Data may be incomplete, contain entity-matching errors, or omit flows not captured in trade records.

See [DATA_NOTICE.md](DATA_NOTICE.md) for what data is and is not published.

## Repository structure

```text
.
├── README.md             # This file
├── LICENSE               # MIT (code)
├── DATA_NOTICE.md        # What data may and may not be published
├── CITATION.cff          # How to cite this repository
├── CONTRIBUTING.md       # How to suggest sources, report errors, propose minerals
├── SECURITY.md           # How to report a security issue or leaked secret/data
├── .gitignore
├── .env.example          # Environment variable names only (no values)
├── docs/
│   ├── README.md         # Index of planning documents
│   ├── 01-concept.md
│   ├── 02-specification.md
│   ├── 03-plan.md
│   └── 04-backlog.md
└── data/
    ├── README.md         # Data folder layout and versioning
    ├── config/           # Minerals, risk mappings, readings (planned)
    ├── derived/          # Publishable, licence-permitted outputs (planned)
    ├── raw/              # Git-ignored — never committed
    └── cache/            # Git-ignored — never committed
```

## Planning documents

| Document | Purpose |
|---|---|
| [01 — Concept](docs/01-concept.md) | Problem, purpose, research question, layers, personas, scope, success criteria |
| [02 — Specification](docs/02-specification.md) | Functional and non-functional requirements, data model, risk taxonomy, views, interfaces, stack options |
| [03 — Plan](docs/03-plan.md) | Phases, feasibility spike results, milestones, dependencies, risk register |
| [04 — Backlog](docs/04-backlog.md) | Epics and user stories with acceptance criteria and priorities |

## How to cite

Please cite the specific version you used. Citation metadata is in [CITATION.cff](CITATION.cff). GitHub shows a "Cite this repository" button once the file is on the default branch.

> Isis (isislcn) (2026). *Board Oversight of Forced Labour Risk in Mineral Supply Chains* (Version 0.1.0) [Computer software and dataset]. https://github.com/isislcn/board-oversight-forced-labour-minerals

The thesis cites the thesis snapshot version (for example `v1.0.0-thesis`) only.

## Licence

- **Code:** MIT — see [LICENSE](LICENSE).
- **Documentation** (including everything in `docs/` and Markdown files in this repository): [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).
- **Data:** third-party data keep their own terms. Sayari data are **not** published in raw form. See [DATA_NOTICE.md](DATA_NOTICE.md).

## Contact

Open an issue in this repository, or contact the maintainer through GitHub: [@isislcn](https://github.com/isislcn).

For security issues or accidentally committed secrets or licensed data, follow [SECURITY.md](SECURITY.md).
