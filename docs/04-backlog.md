# 04 — Backlog

**Document status:** Draft v0.1 (planning stage — no application code yet)
**Last updated:** 2026-11-09
**Related documents:** [Concept](01-concept.md) · [Specification](02-specification.md) · [Plan](03-plan.md)

**How to read this backlog**
- Ordered so the **pilot** (cobalt × Tesla, Apple, Microsoft) is delivered first. Epics E0–E9 = pilot; E10 = extension.
- **Priority:** MoSCoW — **M**ust, **S**hould, **C**ould, **W**on't (this time).
- **Size:** S ≈ ≤ 1 day; M ≈ 2–4 days; L ≈ 1–2 weeks (part-time effort).
- **Req** = requirement IDs in the [specification](02-specification.md).
- **Personas:** *Author* (thesis author), *Examiner* (advisor/examiners), *Researcher* (other researchers), *Practitioner* (board, compliance, stewardship).

---

## Standard attribution acceptance criteria (AC-ATTR)

Every story that produces a **view, executive summary, print/PDF version or export** includes **all** of the following. They are repeated as "AC-ATTR" in each story so that each story is testable on its own.

| Code | Criterion | Req |
|---|---|---|
| **ATTR-1** | Every Sayari-derived data point, flag, link and chart is labelled **"Source: Sayari"**. | FR-39 |
| **ATTR-2** | Sayari query date and entity ID(s) are available on hover/focus **and** in the detail panel (publication permitted, 2026-11-09). | FR-40 |
| **ATTR-3** | The standard Sayari caveat (spec §3.1) appears in full with the query date filled in. | FR-41 |
| **ATTR-4** | Content discovered via Tavily is cited to its **original publisher** (title, publisher, date, URL). "Tavily" never appears as a source. | FR-42 |
| **ATTR-5** | All other data cite the specific document, publisher, date and link. | FR-43 |
| **ATTR-6** | Source columns (name, type, publisher, date, URL or entity ID, query/access date) are present or linked through `source_id` + `sources.csv`. | FR-44 |
| **ATTR-7** | Wording lint passes: flags are "risk indicators", never findings. | FR-11, NFR-11 |

---

## Epic overview

| Epic | Name | Pilot? | Main Req |
|---|---|---|---|
| E0 | Setup, feasibility and publication readiness | Yes | NFR-03, NFR-04, NFR-13 |
| E1 | Data model and configuration | Yes | FR-34–FR-36, NFR-10, NFR-12 |
| E2 | Risk taxonomy | Yes | FR-06–FR-11 |
| E3 | Risk context library (content) | Yes | FR-12–FR-15 |
| E4 | Exposure data — anchor-supplier method | Yes | FR-01–FR-05 |
| E5 | Oversight data — board coding | Yes | FR-28, FR-29 |
| E6 | Stewardship data — proposals and votes; company actions | Yes | FR-30–FR-32 |
| E7 | Attribution, caveat and export framework | Yes | FR-39–FR-44, FR-27 |
| E8 | Views | Yes | FR-16–FR-26, FR-33 |
| E9 | Validation and thesis snapshot | Yes | FR-29, FR-37, FR-38 |
| E10 | Extension (companies and minerals) | No | FR-34, FR-35 |

---

## E0 — Setup, feasibility and publication readiness

| ID | User story | Acceptance criteria | Pri | Size | Deps | Req |
|---|---|---|---|---|---|---|
| US-001 | As the *Author*, I want a public repository with licence, data notice, citation and security files, so that the project is safe to publish from day one. | README, LICENSE, DATA_NOTICE, CITATION.cff, CONTRIBUTING, SECURITY, .gitignore, .env.example, data/README exist; publication checks pass. **(Done 2026-11-09.)** | M | S | — | NFR-03, NFR-04 |
| US-002 | As the *Author*, I want feasibility spikes for Sayari, Tavily, EDGAR and N-PX, so that I know each source can deliver before I build. | Spike log in plan §2.2 has a result for S1–S10; workarounds documented. (S1–S9 done; S10 open.) | M | M | — | NFR-13 |
| US-003 | As the *Author*, I want the Sayari licence position in writing, so that I know what the public build may show. | Summary recorded in DATA_NOTICE; `publish_rules.yaml` reflects it. **(Done 2026-11-09: publication permitted.)** | M | S | — | NFR-03, FR-36 |
| US-004 | As the *Author*, I want secrets loaded only from environment variables with a secret scan in CI, so that no credential is ever committed. | `.env` git-ignored; secret scan job passes; `.env.example` has names only. | M | S | US-001 | NFR-04 |
| US-005 | As the *Author*, I want an explorer prototype spike in the recommended stack, so that I can confirm the front-end choice. | 3-tier flow renders with keyboard focus and table fallback; decision recorded (Q-17). | M | M | — | NFR-06, NFR-07 |
| US-006 | As the *Author*, I want a polite API client setup (SEC User-Agent, Tavily throttling, back-off), so that runs do not get blocked. | No 403/429 in a full pilot run; settings documented. | M | S | US-002 | NFR-13 |

## E1 — Data model and configuration

| ID | User story | Acceptance criteria | Pri | Size | Deps | Req |
|---|---|---|---|---|---|---|
| US-010 | As the *Author*, I want schemas for all tables (spec §6.3) with validation, so that bad data cannot reach the views. | Validation blocks the build on missing required fields, bad enums or broken foreign keys. | M | M | US-005 | NFR-12 |
| US-011 | As a *Researcher*, I want minerals defined in configuration (HS codes, regions, contexts, flags), so that I can add a mineral without code. | Cobalt row complete with HS codes confirmed via Sayari lookup; dummy mineral test passes. | M | S | US-010 | FR-34, NFR-10 |
| US-012 | As the *Author*, I want companies defined in configuration, so that extension needs no code. | 3 pilot rows complete; 4 stubs present; dummy company test passes. | M | S | US-010 | FR-35 |
| US-013 | As the *Author*, I want a raw-response cache with timestamps and hashes, so that every result is reproducible offline. | Running transforms twice from cache gives identical checksums. | M | M | US-010 | NFR-01, NFR-02 |
| US-014 | As the *Author*, I want public and research build profiles, so that internal lineage fields and raw cache content never leak publicly. | Test fails if any `raw_ref` field or raw response appears in public outputs. | S | S | US-003, US-010 | FR-36 |
| US-015 | As the *Author*, I want a lineage reference on each derived row, so that I can trace any figure back to its raw source. | `raw_ref` present in the research build for Sayari and EDGAR rows. | S | S | US-013 | NFR-16 |

## E2 — Risk taxonomy

| ID | User story | Acceptance criteria | Pri | Size | Deps | Req |
|---|---|---|---|---|---|---|
| US-020 | As an *Examiner*, I want each Sayari risk-factor ID mapped to a risk context and evidence level in a config table, so that I can audit the classification. | `risk_factor_map.csv` covers all forced-labour-related factors from spike S2; unmapped factors are hidden and listed in a QA report. | M | M | US-010 | FR-06, FR-07, FR-09 |
| US-021 | As a *Practitioner*, I want colour, icon and text for each risk context, so that I can read the map even with colour-vision deficiency. | Palette passes CVD simulation; every coloured element has icon + text; amber has a pattern. | M | S | — | FR-10, NFR-06 |
| US-022 | As an *Examiner*, I want evidence badges E1–E4 with PSA and "Former" modifiers, so that I can see how strong each indicator is. | Badges show text; PSA and Former labels appear where relevant. | M | S | US-020 | FR-07 |
| US-023 | As a *Practitioner*, I want tier shown by line style and disclosed/observed by marker, so that I can see how far and how certain each link is. | Legend present; solid/dashed/dotted lines; D/O/D+O markers with text. | M | S | — | FR-03, FR-08 |
| US-024 | As the *Author*, I want a banned-phrase wording lint, so that no text implies a finding of abuse. | Lint runs on templates and researcher text; build fails on a hit. | M | S | — | FR-11, NFR-11 |

## E3 — Risk context library (content)

| ID | User story | Acceptance criteria | Pri | Size | Deps | Req |
|---|---|---|---|---|---|---|
| US-030 | As a *Researcher*, I want one page per risk context (summary, minerals, legal significance, flags, readings, responses), so that I understand what each colour means. | Five pages complete per FR-12; empty sections say "none found as of [date]". | M | L | US-020 | FR-12 |
| US-031 | As an *Examiner*, I want readings to follow inclusion rules (types, 2020 floor, ≥ 2 independent sources), so that the library is credible. | Schema enforces fields; ≥ 2 post-2020 readings from different publishers per context; pre-2020 items listed separately. | M | M | US-030 | FR-13 |
| US-032 | As an *Examiner*, I want the XUAR page to include the Government of China's response, so that the library is balanced. | Annex A of the OHCHR 2022 assessment listed with neutral description. | M | S | US-030 | FR-15 |
| US-033 | As the *Author*, I want review dates per page and an overdue warning, so that the library stays current. | Last/next review dates visible; build warns when overdue. | S | S | US-030 | FR-14 |
| US-034 | As the *Author*, I want Tavily-discovered items stored with `discovered_via = tavily` but displayed with the original publisher, so that attribution is correct. | **AC-ATTR: ATTR-4, ATTR-5, ATTR-6.** No display citation names Tavily. | M | S | US-031 | FR-42 |

## E4 — Exposure data (anchor-supplier method)

| ID | User story | Acceptance criteria | Pri | Size | Deps | Req |
|---|---|---|---|---|---|---|
| US-040 | As the *Author*, I want an anchor-supplier register built from each pilot company's own cobalt disclosures, so that tracing starts from what the company says, not from the brand. | Each anchor has company, mineral, disclosed name, role, disclosure year, `source_id`. ≥ 1 anchor per pilot company, or a documented gap (A-22). | M | L | US-012 | FR-01 |
| US-041 | As an *Examiner*, I want each anchor matched to a Sayari entity with a recorded match status, so that I can trust the link. | `match_status` and note for every anchor; identifier-based matching; PSA dependencies marked. | M | M | US-040 | FR-05 |
| US-042 | As the *Author*, I want upstream traces from each anchor (cobalt HS codes, 24-month window, depth 3), so that I see observed sub-tier links. | Parameters, query date and raw cache stored; "no link observed" outcomes recorded. | M | L | US-041, US-013 | FR-02, FR-04 |
| US-043 | As a *Researcher*, I want each link labelled disclosed, observed or both, with gap counts, so that I can see where company disclosure and trade data differ. | `link_basis` set for all links; gap metrics per company and mineral. | M | M | US-042 | FR-03 |
| US-044 | As the *Author*, I want risk flags stored with Sayari ID, context, evidence level and query date, so that the views can show them correctly. | All displayed flags have context, level and `source_id`; manual classifications noted. | M | M | US-020, US-042 | FR-06, FR-07 |

## E5 — Oversight data (board coding)

| ID | User story | Acceptance criteria | Pri | Size | Deps | Req |
|---|---|---|---|---|---|---|
| US-050 | As the *Author*, I want a written board-coding codebook (CHRB A.2 + P1–P7, 0/1/2 scale), so that coding is consistent. | Codebook approved **(done 2026-11-09)**; indicator names verified against official CHRB methodology (Q-18). | M | M | — | FR-28 |
| US-051 | As the *Author*, I want to code each pilot company for proxy years 2022–2026 with evidence locators, so that oversight change over time is visible. | ~165 cells coded; each non-N/A cell has locator, short quote ≤ 40 words and `source_id`. | M | L | US-050 | FR-28 |
| US-052 | As an *Examiner*, I want a second reviewer to code a stratified sample, so that coding reliability is known. | **Deferred 2026-11-09.** If activated: ≥ 20% sample with fixed seed; raw agreement and κ reported; disagreements resolved and logged. | C | M | US-051 | FR-29 |

## E6 — Stewardship data and company actions

| ID | User story | Acceptance criteria | Pri | Size | Deps | Req |
|---|---|---|---|---|---|---|
| US-060 | As a *Practitioner*, I want all related shareholder proposals 2022–2026, including excluded and withdrawn ones, so that I see the full stewardship picture. | `proposals` covers voted, excluded (no-action/other), withdrawn and not presented; each cited. | M | M | US-012 | FR-31 |
| US-061 | As an *Examiner*, I want a written fund-selection rule, so that Big Three votes are comparable. | Rule documented (spec §7.6) and approved **(done 2026-11-09)**. | M | S | — | FR-32 |
| US-062 | As a *Practitioner*, I want each Big Three vote with stewardship team, fund and split flag, so that I know who actually voted and how. | One row per manager per voted proposal; N-PX accession or manager disclosure cited; `funds_split` set. | M | L | US-060, US-061, US-002 | FR-32 |
| US-063 | As a *Researcher*, I want a dated register of company actions (remedy, mitigation, recycling, substitution, exit, engagement), so that I can compare response with risk. | Each action dated, typed, sourced and neutrally described. | M | M | US-012 | FR-30 |
| US-064 | As a *Practitioner*, I want benchmark scores, litigation and regulatory events, so that I see external assessments. | KnowTheChain, CHRB and Lead the Charge rows where available; events dated and cited. | S | M | US-012 | FR-19 |

## E7 — Attribution, caveat and export framework (cross-cutting)

| ID | User story | Acceptance criteria | Pri | Size | Deps | Req |
|---|---|---|---|---|---|---|
| US-070 | As an *Examiner*, I want a shared caveat block and "Source: Sayari" labelling component, so that every view shows attribution the same way. | **AC-ATTR: ATTR-1, ATTR-2, ATTR-3.** Component used by all views; automated test checks each page. | M | M | US-014 | FR-39–FR-41 |
| US-071 | As an *Examiner*, I want a complete `sources` table, so that every record is traceable. | **AC-ATTR: ATTR-5, ATTR-6.** Schema test passes; no record without `source_id`; no publisher "Tavily". | M | M | US-010 | FR-42–FR-44 |
| US-072 | As a *Researcher*, I want to download all tables as versioned CSV with a data dictionary, so that I can reuse the data. | **AC-ATTR: ATTR-1 (in header comment), ATTR-3 (header comment + README), ATTR-5, ATTR-6.** Filenames include version; bundle has `sources.csv`, `data_dictionary.csv`, `README.txt`; no (R) fields in public bundle. | M | M | US-070, US-071 | FR-27, FR-44 |
| US-073 | As an *Examiner*, I want automated attribution tests in CI, so that no release can drop the caveat or sources. | Tests cover every page template, print stylesheet and export; CI fails on any miss. | M | M | US-070, US-072 | FR-39–FR-44 |

## E8 — Views

| ID | User story | Acceptance criteria | Pri | Size | Deps | Req |
|---|---|---|---|---|---|---|
| US-080 | As a *Practitioner*, I want a supply chain explorer (mine region → refiner → cell/component → company), so that I can see where risk sits in the chain. | Colour + icon + badge per node; tier line styles; D/O markers; filters; keyboard access; table fallback. **AC-ATTR: ATTR-1 to ATTR-7.** | M | L | US-043, US-044, US-070 | FR-21, FR-08, FR-10 |
| US-081 | As the *Author*, I want a company view (header, exposure by mineral, actions, board oversight, proposals and votes, benchmarks/events, sources), so that I can analyse one company in full. | All sections render for each pilot company; empty sections say "none found as of [date]". **AC-ATTR: ATTR-1 to ATTR-7.** | M | L | E4, E5, E6, US-070 | FR-19 |
| US-082 | As a *Practitioner*, I want to compare two companies side by side, so that I can benchmark oversight and exposure. | Sections aligned; each side keeps its own sources and caveat date. **AC-ATTR: ATTR-1 to ATTR-7.** | S | M | US-081 | FR-20 |
| US-083 | As a *Researcher*, I want a mineral view of all companies' exposure, so that I can compare across companies for cobalt. | All in-scope companies shown; HS codes match config. **AC-ATTR: ATTR-1 to ATTR-7.** | M | M | E4, US-070 | FR-21 |
| US-084 | As an *Examiner*, I want a board oversight grid by company and year with source links, so that I can check each coded cell. | Every non-N/A cell links to source; review status shown; totals match rules. **AC-ATTR: ATTR-5, ATTR-6, ATTR-7** (plus ATTR-1 to ATTR-3 if any Sayari data is shown). | M | M | US-051, US-070 | FR-23 |
| US-085 | As a *Practitioner*, I want a proposals and votes timeline with each Big Three vote and stewardship team, so that I see whether investors used their votes. | Excluded/withdrawn shown; fund rule stated on page; N-PX citations. **AC-ATTR: ATTR-5, ATTR-6, ATTR-7** (plus ATTR-1 to ATTR-3 if any Sayari data is shown). | M | M | US-062, US-070 | FR-24 |
| US-086 | As a *Researcher*, I want the risk context library as pages in the site, so that I can read context next to the data. | Pages per FR-12–FR-15. **AC-ATTR: ATTR-1 to ATTR-7** (mapped Sayari flags labelled). | M | M | E3, US-070 | FR-25 |
| US-087 | As an *Examiner*, I want a methodology and limitations page complete enough to cite, so that I can assess the method. | All 14 sections of spec §8 present; version and citation line; Tavily credited as discovery tool only. **AC-ATTR: ATTR-3 to ATTR-7.** | M | L | E1–E7 | FR-26 |
| US-088 | As the *Author*, I want to write and store a remedy-or-exit assessment per company–mineral pair from structured inputs, so that the UNGP test is applied transparently. | Assessment has label, text, inputs, author, reviewer and date; no generated text. | M | M | E4–E6 | FR-33 |
| US-089 | As a *Practitioner*, I want a one-screen executive summary per company, so that I can grasp the key points quickly. | Layout per spec §7.1; 350–450 words (build check); no scroll at 1366×768; four key figures; three findings; remedy-or-exit; what to watch; confidence; link to detail. **AC-ATTR: ATTR-1 to ATTR-7.** | M | M | US-088, US-081 | FR-16 |
| US-090 | As a *Practitioner*, I want a one-screen executive summary per mineral, so that I can compare companies on one mineral. | Same AC as US-089 at mineral level. **AC-ATTR: ATTR-1 to ATTR-7.** | M | M | US-088, US-083 | FR-17 |
| US-091 | As an *Examiner*, I want a one-page print/PDF version of each executive summary, so that I can file or annotate it. | Prints on one A4 and one US Letter page; includes version and snapshot ID. **AC-ATTR: ATTR-1, ATTR-3 (in full, printed), ATTR-5, ATTR-6 (short source list + link), ATTR-7;** ATTR-2 replaced by printed query date and "Entity IDs: see online detail panel / research records". | M | M | US-089, US-090 | FR-18, NFR-14 |
| US-092 | As a *Practitioner*, I want full keyboard navigation and table fallbacks in every view, so that the dashboard is accessible. | Manual keyboard script passes; automated accessibility check passes. | M | M | US-080–US-087 | NFR-06, NFR-07 |
| US-093 | As an *Examiner*, I want a visible banner showing "Thesis snapshot vX" or "Latest vY", so that I know which data I am viewing. | Banner on every page and in print. | M | S | US-100 | FR-38 |

## E9 — Validation and thesis snapshot

| ID | User story | Acceptance criteria | Pri | Size | Deps | Req |
|---|---|---|---|---|---|---|
| US-100 | As an *Examiner*, I want a frozen, tagged thesis snapshot with checksum manifest, so that the thesis cites data that never changes. | `v1.0.0-thesis` tag; manifest; `version_log` row; archived release if approved (Q-02). **AC-ATTR: ATTR-3, ATTR-6** on the release bundle. | M | M | E8 complete | FR-37, FR-38 |
| US-101 | As the *Author*, I want all source links re-verified before freeze, so that the snapshot has no broken or hijacked links. | Link check: zero failures; redirects to unrelated domains rejected; access dates updated. | M | S | E7 | FR-43, FR-44 |
| US-102 | As the *Author*, I want an entity-resolution audit, so that matching errors are caught before freeze. | All "probable" matches re-checked; 20% of "confirmed" sampled; changes logged. | M | M | US-041 | FR-05 |
| US-103 | As an *Examiner*, I want a limitations and wording review with the advisor, so that the published text is careful and fair. | Advisor sign-off recorded; lint passes. | M | S | US-087 | NFR-11 |
| US-104 | As the *Author*, I want a licence compliance check of the public build, so that only permitted data is published. | Publish-rules test passes; DATA_NOTICE updated. | M | S | US-014 | NFR-03, FR-36 |
| US-105 | As the *Author*, I want an errata process for post-freeze corrections, so that the snapshot stays immutable but errors are acknowledged. | Errata list on methodology page; corrections go into a new version only. | S | S | US-100 | FR-38 |

## E10 — Extension (after pilot)

| ID | User story | Acceptance criteria | Pri | Size | Deps | Req |
|---|---|---|---|---|---|---|
| US-110 | As a *Researcher*, I want Nvidia, Alphabet, Amazon and Meta added for cobalt, so that the full "Magnificent 7" can be compared. | Added through configuration and anchor registers only; all views work. **AC-ATTR: ATTR-1 to ATTR-7.** | S | L | US-100 | FR-35 |
| US-111 | As a *Researcher*, I want graphite added through configuration, so that a second mineral is covered without code changes. | HS codes confirmed via Sayari; readings meet FR-13; no code change. **AC-ATTR: ATTR-1 to ATTR-7.** | S | L | US-100 | FR-34 |
| US-112 | As a *Researcher*, I want lithium added through configuration. | As US-111. | C | L | US-111 | FR-34 |
| US-113 | As a *Researcher*, I want mica and other minerals added through configuration. | As US-111. | C | L | US-111 | FR-34 |
| US-114 | As a *Practitioner*, I want investors beyond the Big Three. | — | W | L | US-062 | — |
| US-115 | As a *Practitioner*, I want automatic alerts when new risk flags appear. | — | W | L | — | Out of scope |

---

## Suggested delivery order (pilot)

1. **E0** (US-001 ✓, US-002, US-003, US-004, US-005, US-006)
2. **E1** → **E2** → **E7** (US-070, US-071 early, because every later story depends on attribution)
3. **E3** in parallel with **E4**, **E5**, **E6**
4. **E8**: US-072 (download) → US-080 → US-081 → US-084 → US-085 → US-083 → US-086 → US-087 → US-088 → US-089/090/091 → US-082, US-092, US-093
5. **E9** → snapshot freeze (M4)
6. **E10** after M4

---

## Assumptions and open questions — 04-backlog.md

**Assumptions**
- **A-30** Story sizes assume part-time effort (A-20) and an experienced Python user. JavaScript work for the explorer may take longer.
- **A-31** No second reviewer for now (decision 2026-11-09); US-052 is deferred.
- **A-32** "Should" stories (compare mode, benchmarks, review-date warning, lineage, errata) can be dropped if the thesis deadline is at risk, without harming the research question.

**Open questions**
- **Q-30** Is compare mode (US-082) needed for the thesis chapter, or only for practitioners? If needed for the thesis, raise to Must.
- **Q-31** Should benchmarks (US-064) be a Must, given they help triangulate board coding?
- **Q-32** Should graphite (US-111) be attempted before thesis submission if time allows (links to Q-22)?
