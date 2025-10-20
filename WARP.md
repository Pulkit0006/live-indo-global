# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.
``

## Commands

- Install dependencies (uses npm with package-lock):
  ```bash
  npm ci || npm install
  ```
- Start development server (Vite on port 3000 per vite.config.js):
  ```bash
  npm run dev
  ```
- Build production assets (outputs to dist/):
  ```bash
  npm run build
  ```
- Preview built app locally:
  ```bash
  npm run preview
  ```

Notes
- Linting: no linter configured.
- Tests: no test runner or tests configured; there is no single-test command.

## Architecture overview

- Tooling
  - Vite + React (JS, not TypeScript). React plugin configured with automatic JSX runtime.
  - Dev server bound to port 3000 (see vite.config.js).
- Entry and bootstrapping
  - index.html includes <div id="root"></div> and loads src/main.jsx.
  - src/main.jsx mounts <App /> inside React.StrictMode.
- App composition
  - src/App.jsx composes top-level sections: Header, Hero, About, Services, Location, Contact, Footer.
  - Navigation is anchor-based (Header links scroll to section ids), no client-side routing in use though react-router-dom is listed as a dependency.
- Styling
  - Global design tokens and utilities in src/index.css (CSS variables for colors, shadows; shared button and layout styles; section spacing; animations).
  - Each component has a co-located CSS file imported directly by the component (e.g., components/Hero.jsx ↔ components/Hero.css).
  - Additional global layout/animation helpers in src/App.css.
- Assets
  - Static images in src/assets/ (e.g., logo files). Imported via ESM and referenced in components.
- Build/serve
  - vite.config.js: uses @vitejs/plugin-react; esbuild loader for .jsx; server.port = 3000; default Vite output directory is dist/.

## Operational cues for Warp

- Prefer npm for package scripts in this repo (package-lock.json present).
- When asked to run the app, use npm run dev and open http://localhost:3000/.
- When asked to deploy, build with npm run build and publish the dist/ directory to static hosting (e.g., Netlify, Vercel, GitHub Pages).
