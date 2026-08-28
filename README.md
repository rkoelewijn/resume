# Ruben Koelewijn — Interactive Portfolio & Resume

An interactive, responsive portfolio and ATS-compliant resume application built with **Vue 3**, **TypeScript**, and **Vite**.

Designed to serve as both an engaging online portfolio showcase and a single-source-of-truth printable CV that exports directly to high-contrast, cleanly formatted PDF resumes.

---

## ✨ Features

- **ATS-Friendly PDF Export**: Built-in "Save PDF" feature with a custom `@media print` stylesheet that automatically formats contact credentials, justifies typography, renders skill bars with exact print colors, and strips interactive web-only widgets.
- **Bilingual Support (i18n)**: Instant language toggle between English (`en`) and Dutch (`nl`) using `vue-i18n` with synchronized data models.
- **Interactive Case Studies & Projects**: Dynamic routing for in-depth project breakdowns with structured categories and tech stacks.
- **Live GitHub Activity**: Real-time GitHub API integration fetching recent repositories and showcase statistics.
- **Modern Design System**: Responsive CSS architecture with smooth micro-animations, customizable theme variables, and FontAwesome icons.

---

## 🛠️ Tech Stack

- **Framework**: [Vue 3](https://vuejs.org/) (Composition API / `<script setup>`)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite](https://vitejs.dev/)
- **Routing**: [Vue Router](https://router.vuejs.org/)
- **Localization**: [Vue I18n](https://vue-i18n.intlify.dev/)
- **Icons**: [FontAwesome](https://fontawesome.com/) & [Flag Icons](https://flagicons.lipis.dev/)

---

## 📁 Project Structure

```text
resume/
├── public/              # Static public assets (logos, profile images)
├── src/
│   ├── assets/
│   │   └── main.css     # Global styles, CSS design tokens & @media print rules
│   ├── data/            # Centralized resume data
│   │   ├── en.ts        # English resume content
│   │   ├── nl.ts        # Dutch resume content
│   │   ├── shared.ts    # Shared basics, skills, and asset references
│   │   └── types.ts     # TypeScript interfaces for resume schemas
│   ├── i18n/            # Internationalization setup & UI dictionary
│   ├── router/          # Vue Router configuration
│   ├── views/
│   │   ├── HomeView.vue          # Main resume & portfolio page
│   │   └── ProjectDetailView.vue # Dynamic project detail view
│   ├── App.vue          # Root component
│   └── main.ts          # App entrypoint & global icon registration
├── index.html
├── package.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18+ or 20+)
- npm

### Installation

```bash
npm install
```

### Development Server

Start the local development server with hot-module replacement (HMR):

```bash
npm run dev
```

Visit `http://localhost:5173/` in your browser.

### Production Build

Type-check and compile the production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🖨️ PDF Export & Print Tips

To export the resume to a clean PDF:
1. Click the **Save PDF** button in the utility bar (or press `Ctrl + P` / `Cmd + P`).
2. In the browser print dialog, select **Save as PDF** as the destination.
3. Recommended settings:
   - **Layout**: Portrait
   - **Paper Size**: A4
   - **Background graphics**: Enabled (for badge colors and skill progress tracks)
   - **Margins**: Default / None (custom margins are handled automatically by the print stylesheet)

