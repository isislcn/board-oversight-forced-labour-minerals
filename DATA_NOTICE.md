# Data notice

This notice explains which data this project may publish and which it must not. It applies to every file in this repository, every published dashboard page and every download.

## 1. Standard caveat

> Supply chain links and risk flags are derived from Sayari Graph data (queried [date]). They are risk indicators based on trade, corporate and third-party records, not findings that any company uses forced labour. Data may be incomplete, contain entity-matching errors, or omit flows not captured in trade records.

## 2. Risk indicators, not findings

Flags, colours and badges in this project are **risk indicators**. They are **not** findings, allegations or evidence that any company, supplier, person or government has committed wrongdoing or uses forced labour. They show where public records and trade data suggest a risk that merits attention under the UN Guiding Principles on Business and Human Rights.

## 3. What is never committed or published

| Category | Rule |
|---|---|
| Raw Sayari API or MCP responses | **Never committed.** Stored only in `data/raw/` and `data/cache/`, which are git-ignored. |
| Bulk Sayari data or exports | **Never committed or published.** |
| Screenshots of the Sayari platform | **Never committed or published.** |
| Other proprietary or licensed data (e.g. paid benchmark data) | **Never committed** unless the licence clearly allows it. |
| Copyrighted report text | Not copied. Short quotations only (about 40 words or fewer), always attributed with title, publisher, date and link. |
| API keys, tokens, client secrets | **Never committed.** Use environment variables (see `.env.example`). |
| Personal data | Only public information about company directors and officers as disclosed in public filings. No data about workers or affected individuals. |

## 4. What may be published

- **Derived Sayari data**, including entity-level detail: names of upstream entities, Sayari entity IDs, risk-factor names per entity, supply chain links, and summaries such as counts by tier, risk context, evidence level and the disclosed-versus-observed gap. Every item is labelled **"Source: Sayari"** with its query date, and the standard caveat is shown.
- Data from public sources (SEC filings, company reports, official government lists, UN, NGO and academic reports), cited to the **original publisher** with document title, publication date, URL and access date.
- The project's own coding (board coding, proposal and vote tables), with sources.

**Licence position:** the project author confirmed on 2026-11-09 that the Sayari licence permits publication of derived Sayari data in this project. Raw API responses are still not committed to this repository. They are kept in a private cache for reproducibility and can be shared on request.

## 5. Tavily is a discovery tool, not a source

Tavily is used only to **find** documents. Everything found through Tavily is opened and cited to its **original publisher** (for example UN OHCHR, Human Rights Watch or Reuters), with title, date and URL. Tavily is credited only in the methodology.

## 6. Source attribution

Every record in the dataset links to a `sources` row with source name, type, publisher, date, URL or entity ID, and query or access date. Exports keep these columns.

## 7. Corrections

If you think a data point, link or description is wrong or unfair, please open an issue (see [CONTRIBUTING.md](CONTRIBUTING.md)). If the problem involves a secret or licensed data committed by mistake, follow [SECURITY.md](SECURITY.md) instead. Corrections are released in a new version. The frozen thesis snapshot is never altered; errata are listed on the methodology page.
