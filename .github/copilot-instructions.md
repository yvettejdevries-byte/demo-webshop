# Copilot Instructions for demo-webshop

## Project Overview
This is a static web shop demo with the following structure:
- HTML files for main pages (`index.html`, `basket.html`, `checkout.html`, and product pages)
- A single JavaScript file (`shop.js`) for all interactive logic
- A single CSS file (`style.css`) for styling
- Images stored in the `img/` directory

## Architecture & Patterns
- **No frameworks**: Pure HTML, CSS, and JavaScript. No build tools or package managers.
- **Single JS file**: All dynamic behavior (basket management, product interactions) is handled in `shop.js`.
- **Page navigation**: Each product has its own HTML page. Basket and checkout are separate pages.
- **State management**: Basket state is likely managed in-memory or via browser storage (localStorage/sessionStorage) in `shop.js`.
- **Styling**: All styles are in `style.css`. No CSS frameworks.

## Developer Workflows
- **No build step**: Directly open HTML files in browser for development and testing.
- **No automated tests**: Manual testing by interacting with the UI.
- **No backend**: All logic is client-side. No API calls except for external workflow triggers (see below).
- **PR Review Workflow**: There is a GitHub Actions workflow (`.github/workflows/pr-review.yml`) that triggers an external AI workflow for PR review. It uses curl to POST to `https://ai-mastra-agent-workshop.vercel.app/api/workflows/prWorkflow` endpoints. This is currently commented out.

## Conventions & Patterns
- **File naming**: Product pages use the pattern `product-<name>.html`.
- **Images**: All images are stored in `img/` and referenced directly from HTML/CSS.
- **No module system**: All JS is in one file, no imports/exports.
- **Minimal comments**: Code and markup may have few comments; prefer clear, self-explanatory code.

## Integration Points
- **GitHub Actions**: The PR review workflow is set up but commented out. If enabled, it interacts with an external AI agent for PR review.
- **No external JS/CSS dependencies**: All code is local; no CDN or npm packages.

## Key Files
- `index.html`: Main shop page
- `shop.js`: All interactive logic
- `style.css`: All styling
- `.github/workflows/pr-review.yml`: PR review workflow (currently disabled)

## Example Patterns
- To add a new product, create a new `product-<name>.html` and add relevant logic to `shop.js`.
- To update basket logic, edit `shop.js` and ensure changes are reflected across all pages.

---
For questions or unclear conventions, ask for clarification or review recent PRs for examples.
