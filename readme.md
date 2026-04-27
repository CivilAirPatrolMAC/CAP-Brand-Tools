# CAP Brand Tools

A lightweight static landing page that serves as the central entry point for Civil Air Patrol (CAP) brand tooling.

## Overview

This project provides a simple homepage that directs users to approved CAP brand resources and generators, including:

- Brand Portal
- Subordinate Entity Graphic Generator
- Email Signature Block Generator
- Business Card Generator

The page also includes:

- Introductory guidance for compliant branding usage
- A quick-access button/navigation area
- A visual preview/information column
- Footer version and ownership metadata

## Tech Stack

This tool is built as a static web app using:

- HTML (`index.html`)
- CSS (`styles.css`)
- JavaScript (`script.js`)
- Static assets (`favicon.png`, `headergraphic.png`)

No framework or build step is required.

## Project Structure

- `index.html` — Main landing page markup and tool links
- `styles.css` — Page styling, layout, and responsive behavior
- `script.js` — Shared header loading logic
- `favicon.png` — Browser tab icon
- `headergraphic.png` — Header branding image

## Run Locally

Because this is a static site, you can run it with any local static server.

### Option 1: Python

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

### Option 2: VS Code Live Server

If using VS Code, install **Live Server** and click **Go Live**.

## Deployment

This project can be deployed to any static hosting provider, such as:

- Netlify
- GitHub Pages
- Vercel (static output)
- Cloudflare Pages

## Maintenance

To update available tools:

1. Edit tool button links in `index.html`
2. Edit corresponding tool cards in the “Available Tools” section
3. Update footer version/date metadata in `index.html`

## Contact

Brand support contact shown in the UI:

- `brand@capnhq.gov`

