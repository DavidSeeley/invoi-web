# invoi-web

Static Netsirv / invoi SOP & Document Management Ecosystem website.

## Local Preview

From this folder:

```bash
python3 -m http.server 8088
```

Then open:

```text
http://localhost:8088/web/index.html
```

## Structure

- `web/` - website pages and 20 visual section assets
- `rebuild/` - source HTML used to render the rebuilt deck/PDFs
- `exports/` - generated PDFs and slide exports
- `site-reference.*` and `site-manifest.json` - reference material from the source package
