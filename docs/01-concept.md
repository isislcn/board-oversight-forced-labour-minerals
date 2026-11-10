# 01 — Concept

**Project:** Board Oversight of Forced Labour Risk in Mineral Supply Chains — a research dashboard
**Document status:** Draft v0.1 (planning stage — no application code yet)
**Last updated:** 2026-11-09
**Related documents:** [Specification](02-specification.md) · [Plan](03-plan.md) · [Backlog](04-backlog.md)

---

## 1. Problem statement

Large technology companies depend on minerals such as cobalt, graphite, lithium and mica. Some of these minerals are linked to serious labour-rights risks, including:

- **State-imposed forced labour.** An example is labour-transfer programmes affecting Uyghurs and other Turkic, predominantly Muslim groups in the Xinjiang Uyghur Autonomous Region (XUAR).
- **Child labour in artisanal mining**, for example in parts of the cobalt sector in the Democratic Republic of the Congo (DRC).
- **Privately imposed forced labour**, such as debt bondage linked to recruitment fees.

Companies disclose that their boards "oversee" human rights. It is hard to see:
1. how close each company actually is to high-risk sources;
2. which board body is responsible for what, and how that changed over time;
3. whether the largest investors used their votes when shareholders asked for more.

It is also hard to judge whether a company's response fits the risk. The UN Guiding Principles on Business and Human Rights (UNGPs) expect different responses depending on whether a company has **leverage** to change conditions. Where it does, the expected response is **remedy** and mitigation. Where it does not, and the harm is severe, the expected response is **responsible exit**. Today no single, citable tool brings these three layers together.

## 2. Purpose: part of the thesis method

This dashboard is a **research instrument**, not a side product. It is part of the method of a 10,000-word master's thesis. Its outputs are analysed in the case-study chapter. It therefore must:

- produce **reproducible, versioned and citable** data;
- freeze a **thesis snapshot** dataset that the thesis cites and that later updates never change;
- document its method fully enough that an examiner can audit any figure.

## 3. Research question and analytical idea

**Main research question**
> How do the boards of major technology companies oversee forced labour risks in their mineral supply chains, and to what extent does that oversight align with the UN Guiding Principles on Business and Human Rights (UNGPs) on leverage, remedy and responsible exit?

**The "severity-and-leverage" test**

| Type of forced labour | Example | Buyer leverage | Severity | UNGP response the test points toward |
|---|---|---|---|---|
| State-imposed | Labour-transfer programmes in the XUAR | Little or none (the state imposes it; audits are not credible) | Very high; possible crimes-against-humanity level (see OHCHR 2022 assessment) | **Responsible exit** |
| Privately imposed | Recruitment-fee debt bondage at a supplier | Available (commercial pressure, contract terms, remediation funds) | High | **Remedy** (use and build leverage; remediate) |

The dashboard must make this distinction **visible** through colour, labels and the remedy-or-exit assessment. It must never present a risk indicator as proof that abuse occurred.

> **Assumption A-01:** The test is a heuristic for analysis, not a legal determination. Real cases can mix both types, for example private actors inside a state programme. The dashboard records the context the evidence supports and lets the researcher explain mixed cases in text.

## 4. Three analytical layers

| Layer | Question | Main data | Output in the dashboard |
|---|---|---|---|
| **Exposure** | How close is each company to high-risk mineral sources? | Sayari supply chain and ownership data and risk flags, starting from anchor suppliers disclosed by each company | Supply chain explorer; exposure by mineral; risk context colours and evidence badges |
| **Oversight** | Who on the board is responsible, and for what? | Proxy statements (DEF 14A), committee charters, conflict-minerals (Form SD) and responsible-sourcing reports | Board oversight grid coded by year (CHRB board-accountability indicators plus project indicators) |
| **Stewardship** | Did the largest investors use their votes? | Shareholder proposals 2022–2026; BlackRock, Vanguard and State Street votes (SEC Form N-PX and managers' vote disclosures) | Proposals and votes timeline, including excluded and withdrawn proposals |

The three layers meet in the **executive summary**. For each company and mineral, the researcher writes a remedy-or-exit assessment against the UNGP test.

## 5. Personas and their key questions

| Persona | Key questions | What they need most |
|---|---|---|
| **Thesis author** (primary) | Which companies are exposed to which risk context, and how strong is the evidence? Did board oversight change after key events? Did the Big Three support related proposals? Does each company's response fit the severity-and-leverage test? | Reliable data pipeline; coding tools; frozen snapshot; exportable tables and charts for the thesis |
| **Thesis advisor and examiners** | Can I trust and trace every figure? Is the method sound and the wording careful? | Methodology page; source links on every data point; version and snapshot ID; limitations |
| **Other researchers** | Can I reuse the data or method for other companies or minerals? | CSV downloads with source columns; clear licence; "how to add a mineral" guide |
| **Board, compliance and stewardship practitioners** | How do peers structure oversight? Where are the evidence gaps? What should we watch? | One-screen executive summaries; compare mode; "what to watch"; plain language |

## 6. Scope

### 6.1 Pilot

| Dimension | Pilot scope |
|---|---|
| Mineral | **Cobalt** |
| Companies | **Tesla** (direct EV battery exposure), **Apple** (recycling and regional exit actions), **Microsoft** (comparatively developed board structure) |
| Period | Proposals and votes **2022–2026**; board coding by proxy year 2022–2026; trade data window of the last 24 months before the query date (configurable) |
| Investors | BlackRock, Vanguard, State Street (the "Big Three") |

> **Assumption A-02:** These descriptions of the pilot companies come from the research brief. They are working hypotheses to test. They are not conclusions.

### 6.2 Extension path (configuration, not code)

1. **More companies:** Nvidia, Alphabet, Amazon, Meta (completing the "Magnificent 7"). Add each by adding rows to the `companies` configuration and the anchor-supplier register.
2. **More minerals:** graphite, lithium, mica and others. Add each by adding a row to the `minerals` configuration (HS codes confirmed through Sayari's HS-code lookup, high-risk regions, mapped risk flags) and by adding readings to the risk context library.
3. **More investors:** possible later, using the same `votes` table.

## 7. Success criteria

| # | Criterion | Measure |
|---|---|---|
| SC-1 | The thesis can cite a frozen dataset | Thesis snapshot tagged with version and date; checksum manifest published |
| SC-2 | Every figure is traceable | 100% of displayed data points link to a `sources` record |
| SC-3 | Sayari attribution and caveat are always shown | Automated check passes on every view, print/PDF version and CSV export |
| SC-4 | The severity-and-leverage distinction is visible | Each pilot company–mineral pair has a risk context, an evidence level and a researcher-written remedy-or-exit assessment |
| SC-5 | Board coding is transparent and checkable | Every coded cell has an evidence locator and source link, so readers can re-check it. A second-reviewer check is **deferred** (decision 2026-11-09; see Q-05) |
| SC-6 | Adding a mineral needs no code | A test mineral is added through configuration only, and the pipeline and views work |
| SC-7 | Accessible and usable | Keyboard navigable; colour never the only signal; executive summary fits one laptop screen |
| SC-8 | Safe to publish | No secrets, raw Sayari data or proprietary text in the public repository; publication checks pass |

## 8. Out of scope

- Making findings or allegations that any company uses forced labour. The tool shows **risk indicators**.
- Auto-generated analytic text. All summaries and assessments are written and reviewed by the researcher.
- Real-time monitoring, alerts or a commercial screening service.
- Investors other than the Big Three in the pilot.
- Private or personal data beyond public information about corporate officers and directors.
- Legal advice, or compliance certification for any law (UFLPA, EU Forced Labour Regulation, CSDDD).
- Publishing raw or bulk Sayari data.
- Field research or interviews (any such work is outside the dashboard and would need separate ethics approval).

## 9. Key risks (summary — full register in [03-plan.md](03-plan.md#9-risk-register))

| Risk | Why it matters | Main mitigation |
|---|---|---|
| Sayari licence limits publication | **Resolved 2026-11-09:** the author confirmed the licence permits publication | Raw responses are still not committed (reproducibility cache only); published items carry attribution and caveat |
| Trade-data blind spots | Artisanal and unrecorded flows (e.g. DRC to China via intermediaries) are often missing | Disclose as a limitation; combine with country- and product-level evidence and research reports |
| Entity-resolution errors | Same-name records across jurisdictions can create false links | Manual match review; record match confidence; treat "possibly same as" links as weaker |
| Disclosure bias | Companies that disclose more look more exposed | Show disclosed and observed links separately; describe the bias in limitations |
| Confidential board deliberations | Real oversight may not be visible in filings | Code only what is disclosed; say so clearly |
| Scope creep | Thesis deadline | Pilot first (cobalt × 3 companies); extension only after snapshot freeze |
| Defamation or unfair wording | Named companies and regions | "Risk indicator, not finding" rule; neutral wording review before publication |

---

## Assumptions and open questions — 01-concept.md

**Assumptions**
- **A-01** The severity-and-leverage test is an analytical heuristic, not a legal determination; mixed cases are explained in text.
- **A-02** The pilot company descriptions (Tesla: direct EV battery exposure; Apple: recycling and regional exit; Microsoft: strongest board structure) are working hypotheses from the brief and will be tested, not assumed.
- **A-03** "Big Three" means BlackRock, Vanguard and State Street Global Advisors, including their separate stewardship teams where those exist.
- **A-04** The thesis is in English and the dashboard is English-only.
- **A-05** If a second-reviewer check is added later, the default target is ≥ 80% raw agreement on a ≥ 20% sample.

**Open questions**
- **Q-01** ~~What do Sayari's licence terms allow to be published?~~ **Resolved 2026-11-09:** the author confirmed that the Sayari licence permits publication.
- **Q-02** Will the advisor accept the dashboard snapshot as a cited dataset (for example through a Zenodo DOI), or should it be an appendix?
- **Q-03** Should "Big Three support" in the key figures be the average across the three managers, or show each one? (Proposal in the specification: show each.)
- **Q-04** ~~What is the thesis submission date?~~ **Closed 2026-11-09:** not needed; milestones stay relative.
- **Q-05** ~~Who will act as second reviewer?~~ **Deferred 2026-11-09:** no second reviewer for now.
