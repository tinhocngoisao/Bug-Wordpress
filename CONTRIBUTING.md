# Contributing

Thanks for your interest in improving this project! A few guidelines:

- Use the provided issue templates for bugs and feature requests.
- Keep changes small and focused; one PR per change is best.
- For documentation-only changes, mark your PR as docs.
- For code changes, ensure the site still runs locally.

## Local development

No build step is required. Start a local server from `site/`:

```bash
python3 -m http.server -d site 8000
```

Open `http://localhost:8000` and iterate.

## Commit messages

Follow concise, present-tense messages that explain why the change is needed. If you prefer a style, Conventional Commits are welcome.

## Security

Please do not open public issues for vulnerabilities. See `SECURITY.md` for private reporting.
