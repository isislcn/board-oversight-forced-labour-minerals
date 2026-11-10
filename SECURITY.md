# Security policy

## What to report

Please report privately (not in a public issue):
- a security vulnerability in this project's code or published site;
- an **API key, token, password or other secret** committed to this repository or its history;
- **licensed or raw third-party data** committed by mistake (for example raw Sayari responses, platform screenshots or paid benchmark data);
- personal data that should not be public.

## How to report

1. Use GitHub's **private vulnerability reporting** for this repository: *Security* tab → *Report a vulnerability*. *(The maintainer must enable this in repository settings.)*
2. If that is not available, open an issue titled "Security contact request" **without** any sensitive details, and the maintainers will arrange a private channel.

Please include the file path, commit or URL, and a short description. **Do not copy the secret or licensed data into your report.** A pointer to where it is is enough.

## What happens next

| Step | Target time |
|---|---|
| Acknowledge the report | Within 5 working days |
| Revoke and rotate any exposed credential | Immediately on confirmation |
| Remove licensed data or secrets from the repository **and its git history** (e.g. `git filter-repo`), then force-push and ask GitHub to clear cached views if needed | As soon as possible |
| Notify the data provider if its licensed data was exposed, where required by the licence | As required |
| Record the incident (without the sensitive content) in the version log | After resolution |

## Prevention

- Secrets are loaded only from environment variables (`.env`, git-ignored). See `.env.example`.
- `data/raw/` and `data/cache/` are git-ignored.
- A secret scan and a publication check run before each release (planned in [docs/03-plan.md](docs/03-plan.md)).
