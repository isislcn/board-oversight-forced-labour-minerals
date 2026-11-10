# Contributing

Thank you for helping improve this research project. It is part of a master's thesis, so the author reviews all contributions, and changes after the thesis snapshot go into new versions only.

## Ways to contribute

### Suggest a source
Open an issue titled **"Source: [short title]"** with:
- title, **original publisher**, publication date, URL;
- type: UN body, NGO, academic, official list or government, journalism, company;
- which risk context, mineral or company it concerns;
- one line on why it is relevant.

Inclusion rules (see [docs/02-specification.md](docs/02-specification.md), FR-13): published 2020 or later (older items only as background); from UN bodies, major NGOs, academic research centres, official lists, or reputable news labelled as journalism.

### Report an error
Open an issue titled **"Error: [where]"**. Say what is wrong, where it appears (view, table, row), and what the correct information is, with a source. Errors about how a company or region is described are treated with priority.

### Propose a new mineral
Open an issue titled **"Mineral: [name]"** with:
- proposed HS codes (these will be confirmed through Sayari's HS-code lookup);
- high-risk regions;
- relevant risk contexts;
- at least two independent sources from 2020 or later.

New minerals are added by **configuration, not code** (see [docs/02-specification.md](docs/02-specification.md), FR-34).

## Rules for all contributions

1. **Cite original publishers.** Do not cite search engines, aggregators or discovery tools (including Tavily) as sources.
2. **Neutral wording.** Describe flags as **risk indicators**, never as findings that a company uses forced labour. Avoid loaded terms such as "tainted" or "complicit". Use "Uyghur" as the spelling. Describe governments, companies and groups factually, and include official responses where they exist.
3. **No licensed or raw data.** Do not paste raw Sayari output, platform screenshots, paid data or long copyrighted text. Keep quotations short (about 40 words or fewer) and attributed.
4. **No secrets or personal data.** Never include API keys or tokens. Do not include personal data beyond public information on company directors and officers.
5. **Be respectful.** Discussions concern serious human rights issues and real people.

## Pull requests

Pull requests to documentation and configuration are welcome. Please:
- keep one topic per pull request;
- update the `sources` information for any new data;
- run the publication checks (no secrets, no raw data, links complete with `https://`).

By contributing, you agree that your documentation contributions are licensed under CC BY 4.0 and code contributions under MIT.
