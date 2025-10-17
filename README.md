# Headhunt Company – Website & Ops Repository

A complete, ready-to-deploy repository for a headhunting/recruiting company. It includes a static marketing site with dynamic job listings, CI/CD via GitHub Pages, issue templates, and contributor docs.

## Features
- Static site in `site/` with SEO-friendly markup
- Jobs data in `site/assets/jobs.json` rendered by lightweight JS
- Simple filtering/search (role, location, department)
- One-click deploy to GitHub Pages via GitHub Actions
- Issue templates, CONTRIBUTING, and Code of Conduct

## Quick start
1) Preview locally (no build needed):
```bash
python3 -m http.server -d site 8000
```
Then open `http://localhost:8000`.

2) Edit jobs:
- Update `site/assets/jobs.json` to add/edit/remove roles
- The homepage auto-renders from this file

3) Deploy to GitHub Pages:
- Ensure your default branch is `main`
- Push to `main`; the action in `.github/workflows/deploy-pages.yml` publishes `site/`
- In GitHub, enable Pages: Settings → Pages → Build and deployment → Source: GitHub Actions

## Repository structure
```
site/
  index.html
  assets/
    styles.css
    app.js
    jobs.json
.github/
  ISSUE_TEMPLATE/
  workflows/
README.md
LICENSE
CONTRIBUTING.md
CODE_OF_CONDUCT.md
SECURITY.md
.gitignore
```

## Contributing
See `CONTRIBUTING.md` for guidelines. Please use the provided issue templates.

## License
MIT — see `LICENSE`.

## Contact
For partnership or candidate inquiries, open an issue or reach out via the contact section on the site.
