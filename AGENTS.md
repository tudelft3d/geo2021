# AGENTS.md — geo2021

## What this is

Jekyll static site for TU Delft MSc Geomatics graduation thesis info (GEO2021–2022).  
Hosted at `https://geomatics.bk.tudelft.nl/geo2021/`.

## Commands

```sh
# Local dev (requires Ruby + jekyll, jekyll-redirect-from gems)
jekyll serve --trace

# Production build
jekyll build --trace
```

## Structure

| Path | Purpose |
|---|---|
| `_data/theses_*.yml` / `.yaml` | Thesis data files by cohort |
| `_posts/*.md` | News items (rendered on homepage) |
| `_layouts/` | Jinja-like HTML templates (default, page, post) |
| `_includes/` | Reusable partials (head, thesis_entries) |
| `assets/css/` | Bulma + FontAwesome + custom `geo2021.css` |
| `rules/`, `templates/`, `faq/`, etc. | Content pages (markdown) |

## Conventions

- Permalinks: `pretty` (no `.html` suffix)
- `future: true` in `_config.yml` — future-dated posts are visible
- Base URL: `/geo2021` (not root)
- CI (GitHub Actions) runs `jekyll build --trace` on push to `main`
- The `jekyll-redirect-from` plugin is available
- No package manager (Gemfile), no asset bundler — raw CSS in `assets/css/`
