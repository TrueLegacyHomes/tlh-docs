# True Legacy Homes Documentation

AI Infrastructure & Developer Guides for the True Legacy Homes team.

## 🌐 Live Site

**[View Documentation](https://truelegacyhomes.github.io/tlh-docs/)**

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run docs:dev

# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

### Local Development

The site runs at `http://localhost:5173/tlh-docs/` in development mode.

## 📁 Structure

```
docs/
├── index.md                    # Home page
├── getting-started/            # Setup guides
├── workflow-guides/            # Process documentation
├── cowork-plugins/             # Plugin documentation
├── starter-template/           # Template usage
└── team-onboarding/            # Role-based guides
```

## 🚀 Deployment

The site automatically deploys to GitHub Pages when changes are pushed to `main`.

## 🎨 Brand Colors

- Navy: `#1e3a5f` (Primary)
- Gold: `#c9a227` (Accent)

## 📝 Contributing

1. Make changes to markdown files in `docs/`
2. Test locally with `npm run docs:dev`
3. Commit and push to `main`
4. GitHub Actions will deploy automatically

## 📚 Built With

- [VitePress](https://vitepress.dev/) - Static site generator
- [Vue 3](https://vuejs.org/) - JavaScript framework
- [GitHub Pages](https://pages.github.com/) - Hosting
