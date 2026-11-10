/* Dashboard data — cobalt pilot, data as of 9 Nov 2026 (dataset v0.1, draft).
   Sayari-derived records: queried 2026-11-09. Tavily was used for discovery only;
   every item cites its original publisher. Analytic text is a draft for researcher review. */

var DATA = (function () {
  var D = 'M8 1 L15 8 L8 15 L1 8 Z';
  var CTX = {
    SIFL: { l: 'State-imposed forced labour', c: '#7A0019', i: D, s: 0 },
    CHILD: { l: 'Child labour (artisanal mining)', c: '#D55E00', i: 'M8 1 L15 15 L1 15 Z', s: 0 },
    PIFL: { l: 'Privately imposed forced labour', c: '#E6A700', i: 'M8 1.5 A6.5 6.5 0 1 0 8.01 1.5 Z', s: 1 },
    CONFLICT: { l: 'Conflict-linked sourcing', c: '#5D3A9B', i: 'M2 2 H14 V14 H2 Z', s: 0 },
    WRO: { l: 'Forced labour (context per WRO)', c: '#7A0019', i: D, s: 0 },
    NONE: { l: 'Not determinable', c: '#6B6B6B', i: 'M8 2 A6 6 0 1 0 8.01 2 Z', s: 0 }
  };

  var DOE = { status: 'Concluded', title: 'John Doe I et al. v. Apple, Alphabet, Dell, Microsoft and Tesla',
    detail: 'US District Court for D.C., No. 1:19-cv-03737. Forced child labour claims (TVPRA) over DRC cobalt mining. Filed 15 Dec 2019; dismissed 2 Nov 2021; D.C. Circuit affirmed dismissal 5 Mar 2024 (no shared venture between buyers and suppliers).',
    links: [{ t: 'IRAdvocates case page', u: 'https://www.internationalrightsadvocates.org/cases/cobalt' }, { t: 'Business & Human Rights Resource Centre', u: 'https://www.business-humanrights.org/en/latest-news/lawsuit-against-apple-google-tesla-and-others-re-child-labour-drc' }] };

  var companies = {
    apple: {
      name: 'Apple',
      headline: 'Apple reports 100% recycled cobalt in Apple-designed batteries from the end of 2025, while its published refiner list still includes a refiner whose supplier network carries state-imposed forced labour risk indicators.',
      ctx: 'SIFL', ctxNote: 'Zhejiang Huayou Cobalt · Source: Sayari · queried 2026-11-09',
      ev: 'E3', evLabel: 'Network link', evNote: 'Sub-tier Xinjiang-origin link in the refiner’s supplier network',
      board: 'Provisional · 4 of 11 coded', boardNote: 'DEF 14A, 2026 · full coding pending',
      props: '2 related · 2022: 33.71% support',
      hold: [['BlackRock', '≈7.9%', '$337.0B'], ['Vanguard', '≈9.4%', '$398.9B'], ['State Street', '≈4.2%', '$178.0B']], holdTotal: '≈21.5% · $913.9B',
      findings: [
        'Apple’s Smelter and Refiner List (as of 31 Dec 2024) names 12 cobalt refiners. Of the two checked so far in Sayari, Zhejiang Huayou Cobalt carries a sub-tier Xinjiang-origin risk indicator (E3); GEM (Jiangsu) Cobalt shows no mapped forced labour indicator.',
        'The Board adopted Apple’s UNGP-based human rights policy, and the Nominating Committee assists the Board with oversight of environmental and social matters (2026 proxy). No committee duty naming forced labour or minerals was found in the text reviewed.',
        'A 2022 proposal asking for a report on forced labour in the supply chain (lead filer SumOfUs) received 33.71% support after the SEC declined Apple’s request to exclude it. A 2026 proposal on China manufacturing reliance did not pass.'
      ],
      verdict: 'Mixed',
      assessment: 'Switching Apple-designed batteries to recycled cobalt reduces reliance on newly mined cobalt for that use, the closest of the three companies to a responsible disengagement from high-risk primary sources. Apple also told suppliers in 2024 to stop buying tin, tantalum, tungsten and gold from the DRC and Rwanda. However, the refiner list still includes refiners with network-level state-imposed forced labour indicators, and the origin of recycled feedstock and of cobalt in batteries not designed by Apple is not yet traced.',
      watch: 'Whether the next refiner list still names primary refiners; disclosure on recycled feedstock origin; EU Forced Labour Regulation applies from 14 Dec 2027.',
      conf: 'Medium', confNote: 'Company-disclosed anchors; 2 of 12 refiners traced so far; board coding provisional.',
      lit: [
        { status: 'Concluded', title: 'DRC criminal complaint v. Apple France and Apple Retail France (Paris)', detail: 'Filed Dec 2024 by the DRC government over conflict minerals (tin, tantalum, tungsten, gold). Closed by the Paris prosecutor in Feb 2025: laundering and deceptive-practice allegations found not sufficiently well-founded; the DRC was invited to take war-crimes allegations to the competent office.',
          links: [{ t: 'Reuters, Dec 2024', u: 'https://ca.finance.yahoo.com/news/exclusive-congo-files-criminal-complaints-050552031.html' }, { t: 'Peters & Peters case note', u: 'https://www.petersandpeters.com/case/democratic-republic-of-congo-files-criminal-complaints-against-european-apple-subsidiaries-over-conflict-materials' }] },
        { status: 'Status unknown', title: 'DRC criminal complaint v. Apple Retail Belgium (Brussels)', detail: 'Parallel complaint filed Dec 2024 with a Belgian investigating magistrate. No public update found as of 9 Nov 2026.',
          links: [{ t: 'Peters & Peters case note', u: 'https://www.petersandpeters.com/case/democratic-republic-of-congo-files-criminal-complaints-against-european-apple-subsidiaries-over-conflict-materials' }] },
        DOE
      ],
      sources: [
        ['Apple Smelter and Refiner List (as of 31 Dec 2024)', 'Apple, Apr 2025', 'https://s203.q4cdn.com/367071867/files/doc_downloads/2025/04/Apple-Smelter-Refiner-List.pdf'],
        ['People and Environment in Our Supply Chain — 2026 Progress Report', 'Apple, 2026', 'https://s203.q4cdn.com/367071867/files/doc_downloads/gov_docs/2026/Apple-Supply-Chain-2026-Progress-Report.pdf'],
        ['Apple 2026 proxy statement (DEF 14A)', 'SEC EDGAR, Jan 2026', 'https://www.sec.gov/Archives/edgar/data/320193/000130817926000008/aapl014016-def14a.htm'],
        ['Report on Forced Labor at Apple Inc. (proposal 7, 2022)', 'PRI resolution database', 'https://collaborate.unpri.org/group/10716/home'],
        ['SEC rejects Apple bid to block shareholder proposal on forced labor', 'CNBC / Reuters, 23 Dec 2021', 'https://www.cnbc.com/2021/12/23/sec-rejects-apple-bid-to-block-shareholder-proposal-on-forced-labor-letter-shows.html'],
        ['Apple says it has told suppliers to stop buying minerals from Congo', 'Reuters, Dec 2024', 'https://ca.finance.yahoo.com/news/apple-says-told-suppliers-stop-213841799.html']
      ]
    },
    microsoft: {
      name: 'Microsoft',
      headline: 'Microsoft gives a board committee explicit oversight of human rights and responsible sourcing, but does not name its cobalt refiners, so its exposure cannot yet be traced with the anchor-supplier method.',
      ctx: 'NONE', ctxNote: 'No cobalt refiners named in documents reviewed',
      ev: '—', evLabel: 'No anchors to trace', evNote: 'Disclosure gap is itself a finding',
      board: 'Provisional · 3 of 11 coded', boardNote: 'DEF 14A, 2025 · full coding pending',
      props: '0 on minerals · 2 other human rights',
      hold: [['BlackRock', '≈8.2%', '$227.0B'], ['Vanguard', '≈9.4%', '$259.5B'], ['State Street', '≈4.3%', '$118.0B']], holdTotal: '≈21.8% · $604.5B',
      findings: [
        'Microsoft’s 2025 Conflict Minerals Report (reporting year 2024) says it has required suppliers to report cobalt through the RMI Extended Minerals Reporting Template since 2019, but no cobalt refiner names were found in the documents reviewed.',
        'The Environmental, Social, and Public Policy Committee oversees policies on key environmental and social matters, explicitly including “human rights, and responsible sourcing” (2025 proxy). This is the most specific committee language of the three companies.',
        'No shareholder proposal on mineral supply chains was found for 2022–2026. Two 2025 human rights proposals concerned AI and cloud use (27.48% and more than 26% support).'
      ],
      verdict: 'Insufficient evidence',
      assessment: 'Microsoft’s policy commits to responsible sourcing from conflict-affected and high-risk areas “rather than restricting or avoiding sourcing from such regions”, an engagement and remedy orientation. Without named refiners, exposure to state-imposed or privately imposed forced labour cannot be tested, so the remedy-or-exit question cannot yet be answered from supply chain evidence.',
      watch: 'Whether Microsoft publishes a cobalt refiner list; EMRT-based disclosures; EU Forced Labour Regulation from 14 Dec 2027.',
      conf: 'Low (exposure) · Medium (oversight)', confNote: 'No anchors disclosed; committee language confirmed in the proxy.',
      lit: [DOE],
      sources: [
        ['Microsoft 2025 Conflict Minerals Report (2024 reporting year)', 'Microsoft, 2025', 'https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/msc/documents/presentations/CSR/Microsoft-RY2024-Conflict-Minerals-Report.pdf'],
        ['Microsoft 2025 proxy statement (DEF 14A)', 'SEC EDGAR, Oct 2025', 'https://www.sec.gov/Archives/edgar/data/789019/000119312525245150/d908201ddef14a.htm'],
        ['2025 Proxy Voting Results', 'Microsoft Investor Relations', 'https://www.microsoft.com/en-us/investor/corporate-governance/votingresults'],
        ['Human rights proposals win more than 25% of votes at Microsoft shareholder meeting', 'GeekWire, Dec 2025', 'https://www.geekwire.com/2025/filing-human-rights-proposals-win-more-than-25-of-votes-at-microsoft-shareholder-meeting'],
        ['Microsoft Devices Responsible Sourcing Report FY21', 'Microsoft, 2021', 'https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/msc/documents/presentations/CSR/Microsoft-Devices-Responsible-Sourcing-Report-FY21.pdf']
      ]
    },
    tesla: {
      name: 'Tesla',
      headline: 'Tesla’s reported direct cobalt suppliers include a refiner whose supplier network carries state-imposed forced labour risk indicators, and shareholders have filed child labour proposals in 2022, 2023 and 2025.',
      ctx: 'SIFL', ctxNote: 'Zhejiang Huayou Cobalt; Glencore upstream · Source: Sayari · queried 2026-11-09',
      ev: 'E3', evLabel: 'Network link', evNote: 'Sub-tier links in anchor supplier networks',
      board: 'Provisional · 3 of 11 coded', boardNote: 'DEF 14A, 2026 · full coding pending',
      props: '3 related · 2025: 7.78% support',
      hold: [['BlackRock', '≈6.6%', '$90.1B'], ['Vanguard', '≈7.7%', '$105.0B'], ['State Street', '≈3.6%', '$49.4B']], holdTotal: '≈17.9% · $244.5B',
      findings: [
        'Huayou Cobalt, named among Tesla’s direct suppliers in its 2021 Impact Report and contracted to supply Tesla from Jul 2022 to end-2025 (as reported), carries a sub-tier Xinjiang-origin risk indicator (E3). Sayari shows Glencore International AG upstream of Huayou, with DOL child labour and forced labour product–country indicators (E4) and sub-tier UFLPA-linked indicators (E3).',
        'Tesla’s 2026 proxy assigns no board committee explicit responsibility for human rights or supply chains: the Audit Committee covers legal and regulatory compliance risk, and the Nominating and Corporate Governance Committee covers compliance with applicable laws. The Board retains overall risk oversight.',
        'Shareholders filed a 2022 proposal on child labour in the battery supply chain (board recommended against), a 2023 floor proposal by As You Sow on child and forced labour, and a 2025 “Child Labor Audit” proposal (7.78% support).'
      ],
      verdict: 'Mixed',
      assessment: 'The DRC child labour context (E4, product–country) is one where buyers have leverage, which points toward remedy and engagement. The state-imposed forced labour indicators are network-level links in the wider supplier networks of Huayou and Glencore, not cobalt-specific findings; they need product-specific tracing before the exit test can be applied.',
      watch: 'Whether the Huayou supply contract (to end-2025) was renewed; Tesla impact report disclosures; UFLPA Entity List additions; EU Forced Labour Regulation from 14 Dec 2027.',
      conf: 'Low–medium', confNote: 'Anchors from news reports of Tesla’s disclosure; board coding provisional.',
      lit: [DOE],
      sources: [
        ['Tesla inks battery materials deals with two China suppliers', 'Bloomberg via Yahoo Finance, 2022', 'https://finance.yahoo.com/news/tesla-inks-battery-materials-deals-044804153.html'],
        ['Tesla plans to use Glencore cobalt in new Gigafactories', 'CNBC, 16 Jun 2020', 'https://www.cnbc.com/2020/06/16/tesla-glencore-cobalt-gigafactory.html'],
        ['Tesla 2026 proxy statement (DEF 14A)', 'SEC EDGAR, 2026', 'https://www.sec.gov/Archives/edgar/data/1318605/000110465926116700/tm267596-1_def14a.htm'],
        ['Tesla 2022 preliminary proxy — Proposal Twelve (child labor)', 'SEC EDGAR, Aug 2022', 'https://www.sec.gov/Archives/edgar/data/1318605/000156459022022992/tsla-pre14a_20220804.htm'],
        ['Tesla Inc: Child and Forced Labor in Supply Chains (floor resolution)', 'As You Sow, 2023', 'https://www.asyousow.org/resolutions/2022/02/15-tesla-floor-resolution'],
        ['Child Labor Audit at Tesla', 'PRI resolution database', 'https://collaborate.unpri.org/group/35706/home']
      ]
    }
  };

  function ind(ctx, ev, label, code) { return { ctx: ctx, ev: ev, label: label, code: code }; }
  var entities = {
    huayou: { name: 'Zhejiang Huayou Cobalt Co., Ltd.', short: 'Zhejiang Huayou Cobalt', role: 'Cobalt refiner and precursor producer', country: 'China',
      id: 'GstlFKZ-29D5gm8p3Xg6mw', match: 'Confirmed — LEI 30030099QFLNMEGP7M05; unified social credit code', top: 'SIFL', ev: 'E3',
      ind: [ind('SIFL', 'E3', 'Supplier network with Xinjiang-based entity (tiers 2–3)', 'forced_labor_xinjiang_origin_subtier'),
            ind('SIFL', 'E3', 'Same indicator via a “possibly same as” path (weaker match)', 'psa_forced_labor_xinjiang_origin_subtier')],
      other: 'Also flagged (not mapped): regulatory_action. Trade records: 83 sent, 156 received.' },
    glencore: { name: 'Glencore International AG', short: 'Glencore International AG', role: 'Mining and trading group (DRC copper-cobalt operations)', country: 'Switzerland',
      id: 'IAcKXkSPKpD4E2d0oK8UWw', match: 'Probable — name and Baar address; sparse identifiers', top: 'SIFL', ev: 'E3',
      ind: [ind('SIFL', 'E3', 'Supplier network with UFLPA entity (tiers 2–3)', 'forced_labor_uflpa_origin_subtier'),
            ind('SIFL', 'E3', 'Supplier network with Xinjiang-based entity', 'forced_labor_xinjiang_origin_subtier'),
            ind('SIFL', 'E3', 'Supplier network with ASPI / Sheffield Hallam report entities', 'forced_labor_aspi_origin_subtier · forced_labor_sheffield_hallam_university_reports_origin_subtier'),
            ind('CHILD', 'E4', 'Exported goods whose product and origin are on the US DOL child labour list', 'exports_ilab_child_labor'),
            ind('PIFL', 'E4', 'Exported goods whose product and origin are on the US DOL forced labour list', 'exports_ilab_forced_labor'),
            ind('CONFLICT', 'E4', 'Exported 3TG from a conflict-affected area (not cobalt)', 'exports_conflict_minerals'),
            ind('WRO', 'E3', 'One hop from an entity under a CBP Withhold Release Order', 'wro_entity_adjacent')],
      other: 'Observed upstream of Huayou for cobalt HS codes since 2023; shipment countries in path: Mozambique, China.' },
    cngr: { name: 'CNGR Advanced Material Co., Ltd.', short: 'CNGR Advanced Material', role: 'Battery precursor producer', country: 'China',
      id: 'z8nhbDy7oBkzw8vPhF-oMQ', match: 'Probable — listed parent (LEI 213800FP1O8DBRF5AI17); supplying subsidiary not confirmed', top: null,
      ind: [], other: 'Other flags (not mapped): owned_by_soe, owned_by_regulatory_action_entity.' },
    gem: { name: 'GEM (Jiangsu) Cobalt Industry Co., Ltd.', short: 'GEM (Jiangsu) Cobalt', role: 'Cobalt refiner (GEM recycling group)', country: 'China',
      id: 'ZWs9jGH9wgxc141TNMSaZg', match: 'Confirmed — LEI 6556001L16J2DS77VJ66; name as on Apple’s list', top: null,
      ind: [], other: 'Other flags (not mapped): basel_aml, cpi_score (country-level).' }
  };

  var basis = {
    tesla: { huayou: 'Named among Tesla’s direct suppliers in its 2021 Impact Report; supply contract Jul 2022 to end-2025 (Bloomberg, 2022)', glencore: 'Observed in Sayari upstream of Huayou; separately, a 2020 Tesla–Glencore cobalt agreement was reported by CNBC (industry sources)', cngr: 'Named among Tesla’s direct suppliers in its 2021 Impact Report; contracted 2023–2025 (Bloomberg, 2022)' },
    apple: { huayou: 'Apple Smelter and Refiner List, as of 31 Dec 2024 (cobalt)', glencore: 'Observed in Sayari upstream of Huayou', gem: 'Apple Smelter and Refiner List, as of 31 Dec 2024 (cobalt)' }
  };

  var N = function (k, sub) { return { k: 'node', id: k, sub: sub }; };
  var L = function (style, m) { return { k: 'link', style: style, m: m }; };
  var P = function (name, sub) { return { k: 'plain', name: name, sub: sub }; };
  var C = function (name) { return { k: 'co', name: name }; };
  var chains = {
    tesla: { sel: 'huayou', gap: 'Anchors: 2 reported · 2 traced · indicators on 1 anchor and 1 upstream entity', rows: [
      { steps: [N('glencore', 'Tier 2 · observed'), L('dashed', 'O'), N('huayou', 'Anchor · tier 1'), L('solid', 'R'), C('Tesla')], note: 'Huayou supplies cobalt-containing precursor directly to Tesla (as reported). Glencore appears upstream of Huayou in Sayari trade data; the shipments in this path are routed via Mozambique and China, not directly from the DRC.' },
      { steps: [N('cngr', 'Anchor · tier 1'), L('solid', 'R'), C('Tesla')] }] },
    apple: { sel: 'huayou', gap: 'Anchors: 12 listed · 2 traced · indicators on 1 anchor and 1 upstream entity', rows: [
      { steps: [N('glencore', 'Observed upstream'), L('dotted', 'O'), N('huayou', 'Listed refiner'), L('dotted', 'D'), P('Battery and cell makers', 'Not named for cobalt'), L('dotted', 'D'), C('Apple')], note: 'Apple names refiners but not the tier at which they enter its chain, so tier is shown as “3+ or not disclosed”. Apple reports 100% recycled cobalt in Apple-designed batteries from the end of 2025.' },
      { steps: [N('gem', 'Listed refiner'), L('dotted', 'D'), P('Battery and cell makers', 'Not named for cobalt'), L('dotted', 'D'), C('Apple')], note: 'Not yet traced: 10 more cobalt refiners on Apple’s list — Guangdong Jiana Energy, Hunan CNGR New Energy, Jingmen GEM, Lanzhou Jinchuan Advanced Materials, Quzhou Huayou Cobalt New Material, Umicore Finland, Umicore Olen, XTC New Energy (Xiamen), Zhejiang New Era Zhongneng, Zhuhai Kelixin.' }] },
    microsoft: { sel: null, gap: 'Anchors: 0 disclosed · nothing to trace', rows: [
      { steps: [P('No cobalt refiners named', 'Microsoft collects cobalt data via RMI EMRT since 2019'), L('dotted', '—'), C('Microsoft')], note: 'Disclosure gap: no cobalt refiner names were found in Microsoft’s 2025 Conflict Minerals Report or its responsible sourcing reports reviewed, so there is no anchor supplier to trace in Sayari.' }] }
  };

  var AP = 'https://www.sec.gov/Archives/edgar/data/320193/000130817926000008/aapl014016-def14a.htm';
  var MS = 'https://www.sec.gov/Archives/edgar/data/789019/000119312525245150/d908201ddef14a.htm';
  var TS = 'https://www.sec.gov/Archives/edgar/data/1318605/000110465926116700/tm267596-1_def14a.htm';
  var board = {
    cols: [['aapl', 'Apple · 2026'], ['msft', 'Microsoft · 2025'], ['tsla', 'Tesla · 2026']],
    indicators: [
      ['A.2.1', 'Commitment from the top'], ['A.2.2', 'Board discussions of human rights'], ['A.2.3', 'Incentives and performance management'], ['A.2.4', 'Business model and risk'],
      ['P1', 'Committee duties cover human rights / supply chain'], ['P2', 'Forced labour named explicitly'], ['P3', 'Minerals / responsible sourcing named'],
      ['P4', 'Frequency of board review disclosed'], ['P5', 'Board oversight of remedy'], ['P6', 'Board oversight of exit decisions'], ['P7', 'Director expertise in skills matrix']],
    evidence: {
      'aapl-A.2.1': [2, 'The Board has adopted a human rights policy for Apple — Our Commitment to Human Rights … based on the United Nations Guiding Principles.', AP, 'Apple 2026 proxy statement (DEF 14A), corporate governance section'],
      'aapl-P1': [1, 'Nominating Committee: “Assist the Board in its oversight of Apple’s strategies, policies, and practices relating to environmental and social matters.” Human rights and supply chain are not named in the committee duties.', AP, 'Apple 2026 proxy statement (DEF 14A), committee table'],
      'aapl-P2': [0, 'No committee duty naming forced labour found in the committee descriptions reviewed.', AP, 'Apple 2026 proxy statement (DEF 14A)'],
      'aapl-P3': [0, 'No committee duty naming minerals or responsible sourcing found in the committee descriptions reviewed.', AP, 'Apple 2026 proxy statement (DEF 14A)'],
      'msft-P1': [2, 'Environmental, Social, and Public Policy Committee: “Oversee management policies and programs relating to key environmental and social matters including … human rights, and responsible sourcing.”', MS, 'Microsoft 2025 proxy statement (DEF 14A), committee responsibilities'],
      'msft-P2': [0, 'Forced labour is not named in the committee responsibilities reviewed.', MS, 'Microsoft 2025 proxy statement (DEF 14A)'],
      'msft-P3': [1, '“Responsible sourcing” is named; minerals are not named explicitly.', MS, 'Microsoft 2025 proxy statement (DEF 14A)'],
      'tsla-P1': [0, 'No committee is given explicit responsibility for human rights or supply chains. Audit Committee: periodic reviews of risk exposures including “legal and regulatory compliance”; Nominating and Corporate Governance Committee: risks of “compliance with applicable laws and regulations”.', TS, 'Tesla 2026 proxy statement (DEF 14A), Board role in risk oversight'],
      'tsla-P2': [0, 'Forced labour is not named in the committee responsibilities reviewed.', TS, 'Tesla 2026 proxy statement (DEF 14A)'],
      'tsla-P3': [0, 'Minerals and responsible sourcing are not named in the committee responsibilities reviewed.', TS, 'Tesla 2026 proxy statement (DEF 14A)']
    },
    committees: [
      { co: 'Apple', src: ['Apple 2026 proxy statement (DEF 14A)', AP], items: [
        ['Nominating Committee', 'primary', 'Primary', 'Primary responsibility for assisting the Board with oversight of environmental and social matters, including public policy expenditures.', 'Sue Wagner (Chair), Alex Gorsky, Andrea Jung · 4 meetings in 2025'],
        ['Audit Committee', 'support', 'Supporting', 'Oversees business conduct, legal and regulatory compliance; primary responsibility for assisting the Board with risk oversight.', 'Risk and compliance mandate'],
        ['Board of Directors', 'board', 'Full Board', 'Adopted and oversees Apple’s human rights policy, based on the UN Guiding Principles, covering people at every level of the supply chain.', 'Policy ownership at Board level']] },
      { co: 'Microsoft', src: ['Microsoft 2025 proxy statement (DEF 14A)', MS], items: [
        ['Environmental, Social, and Public Policy Committee', 'primary', 'Primary', 'Oversees management policies and programs on key environmental and social matters, explicitly including human rights and responsible sourcing; also responsible AI.', 'Most specific mandate of the three companies'],
        ['Audit Committee (with the ESPP Committee)', 'support', 'Supporting', 'Assists the Board in overseeing datacenter supply chain and capacity risk, including supplier diversification and political tensions.', 'Supply chain risk, not labour-specific']] },
      { co: 'Tesla', src: ['Tesla 2026 proxy statement (DEF 14A)', TS], items: [
        ['No dedicated committee', 'gap', 'Gap', 'No committee is given explicit responsibility for human rights or supply chains in the text reviewed.', 'Disclosure gap'],
        ['Audit Committee', 'support', 'Supporting', 'Reviews significant risk exposures including legal and regulatory compliance, data privacy, cybersecurity and super intelligence.', 'Risk and compliance mandate'],
        ['Nominating and Corporate Governance Committee', 'support', 'Supporting', 'Oversees risks associated with governance structure, succession planning, independence and compliance with applicable laws and regulations.', 'Ira Ehrenpreis (Chair), Robyn Denholm, James Murdoch, Kathleen Wilson-Thompson']] }
    ],
    holdings: [
      ['Apple', ['≈7.9% · $337.0B', '1,163.0M shares'], ['≈9.4% · $398.9B', '1,376.7M shares'], ['≈4.2% · $178.0B', '615.1M shares'], '≈21.5% · $913.9B'],
      ['Microsoft', ['≈8.2% · $227.0B', '607.4M shares'], ['≈9.4% · $259.5B', '695.8M shares'], ['≈4.3% · $118.0B', '315.7M shares'], '≈21.8% · $604.5B'],
      ['Tesla', ['≈6.6% · $90.1B', '214.1M shares'], ['≈7.7% · $105.0B', '249.8M shares'], ['≈3.6% · $49.4B', '117.5M shares'], '≈17.9% · $244.5B']
    ],
    proposals: [
      { co: 'Apple', items: [
        ['2022', 'Voted', 'voted', 'Report on forced labor in the supply chain (Proposal 7)', 'Lead filer: SumOfUs · Board recommended against · SEC declined Apple’s request to exclude it (Dec 2021)', '33.71% support', 'PRI resolution database', 'https://collaborate.unpri.org/group/10716/home'],
        ['2026', 'Voted', 'voted', 'Report on reliance on China for manufacturing', 'Supporting statement cites UFLPA and Xinjiang supply chain risk · Not approved', 'Support: to retrieve from 8-K', 'Apple 2026 proxy statement', AP]] },
      { co: 'Microsoft', items: [
        ['2022–26', 'None found', 'other', 'No proposal on mineral supply chains or forced labour found', 'Search of proxy statements and vote results, 2022–2026', '—', 'Microsoft vote results', 'https://www.microsoft.com/en-us/investor/corporate-governance/votingresults'],
        ['2025', 'Other topic', 'other', 'Report on Data Operations in Human Rights Hotspots', 'Human rights, but not mineral supply chains', '27.48% support', 'Microsoft 2025 vote results', 'https://www.microsoft.com/en-us/investor/corporate-governance/votingresults'],
        ['2025', 'Other topic', 'other', 'Report on human rights due diligence (AI and cloud misuse)', 'Lead filer: Religious of the Sacred Heart of Mary · refiled for 2026 AGM', 'More than 26% support', 'GeekWire, Dec 2025', 'https://www.geekwire.com/2025/filing-human-rights-proposals-win-more-than-25-of-votes-at-microsoft-shareholder-meeting']] },
      { co: 'Tesla', items: [
        ['2022', 'Voted', 'voted', 'Additional reporting on child labor — end child labour in EV battery production by 2025 (Proposal 12)', 'Board recommended against · proponent to confirm', 'Support: to retrieve from 8-K', 'Tesla 2022 proxy (SEC EDGAR)', 'https://www.sec.gov/Archives/edgar/data/1318605/000156459022022992/tsla-pre14a_20220804.htm'],
        ['2023', 'Floor proposal', 'floor', 'Child and forced labor in supply chains — report on plans to eradicate by 2025', 'Lead filer: As You Sow · presented from the floor, not in the proxy', 'Support: to retrieve', 'As You Sow', 'https://www.asyousow.org/resolutions/2022/02/15-tesla-floor-resolution'],
        ['2025', 'Voted', 'voted', 'Child Labor Audit (Proposal 9)', 'Lead filer: National Center for Public Policy Research', '7.78% support', 'PRI resolution database', 'https://collaborate.unpri.org/group/35706/home']] }
    ]
  };

  return { CTX: CTX, companies: companies, entities: entities, basis: basis, chains: chains, board: board };
})();

var UI = {
  esc: function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); },
  icon: function (key, size) {
    var k = DATA.CTX[key]; if (!k) return '';
    return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 16 16" aria-hidden="true"><path d="' + k.i + '" fill="' + k.c + '" stroke="#1C1C1C" stroke-width="' + k.s + '"></path></svg>';
  },
  badge: function (ev, label) { return '<span class="badge"><b>' + UI.esc(ev) + '</b><span>' + UI.esc(label) + '</span></span>'; },
  link: function (t, u) { return '<a href="' + UI.esc(u) + '" rel="noopener">' + UI.esc(t) + '</a>'; },
  tabs: function (el, current, onPick) {
    var list = [['apple', 'Apple'], ['microsoft', 'Microsoft'], ['tesla', 'Tesla']];
    el.innerHTML = list.map(function (p) { return '<button type="button" class="tab" data-co="' + p[0] + '" aria-pressed="' + (p[0] === current) + '">' + p[1] + '</button>'; }).join('');
    el.onclick = function (e) { var b = e.target.closest('button[data-co]'); if (b) onPick(b.getAttribute('data-co')); };
  },
  getCo: function () { var h = (location.hash || '').replace('#', ''); return DATA.companies[h] ? h : null; }
};
