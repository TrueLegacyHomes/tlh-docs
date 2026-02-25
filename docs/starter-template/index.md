# Starter Template

Our pre-configured Next.js template with everything you need to start a new TLH project in minutes.

## What Is It?

The TLH Starter Template is a ready-to-use project foundation that includes:

- ✅ Next.js 14 with App Router
- ✅ TypeScript configured
- ✅ Tailwind CSS with TLH brand colors
- ✅ Supabase integration
- ✅ Authentication setup
- ✅ Common components
- ✅ CLAUDE.md pre-configured
- ✅ Vercel deployment ready

## Why Use It?

| Without Template | With Template |
|------------------|---------------|
| Hours of setup | Minutes to start |
| Configure everything manually | Pre-configured settings |
| Reinvent patterns | Proven patterns included |
| Easy to miss best practices | Best practices built-in |

## When to Use It

### ✅ Use the template for:
- New marketing websites
- New client portals
- Internal tools
- MVP/prototype projects

### ❌ Don't use it for:
- Adding features to existing projects
- Non-web projects (mobile apps, scripts)
- Projects with very different requirements

## What's Included

```
tlh-starter/
├── app/                    # Next.js pages
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI
│   ├── Header.tsx         # Navigation
│   ├── Footer.tsx         # Site footer
│   ├── Button.tsx         # Styled buttons
│   └── ...
├── lib/                   # Utilities
│   ├── supabase.ts        # Database client
│   ├── utils.ts           # Helper functions
│   └── ...
├── public/                # Static files
│   ├── images/
│   └── fonts/
├── styles/                # Global styles
├── CLAUDE.md              # AI assistant config
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind setup
└── .env.example           # Environment template
```

## Brand Configuration

The template comes with TLH brand settings:

**Colors (in `tailwind.config.js`):**
```javascript
colors: {
  navy: '#1e3a5f',    // Primary
  gold: '#c9a227',    // Accent
  // ... additional shades
}
```

**Typography:**
- Headings: System font stack
- Body: Clean, readable sans-serif

**Components:**
- Buttons in brand colors
- Forms with consistent styling
- Cards and containers

## Quick Start

Ready to use it? Head to [Quick Start Guide](/starter-template/quick-start).

## Keeping It Updated

The template evolves over time. When starting a new project:

1. Always clone the latest version
2. Check for recent changes in the changelog
3. Update dependencies after cloning

## Contributing to the Template

Have an improvement? Here's how:

1. Discuss the change in #dev-updates
2. Make changes on a separate branch
3. Submit for review
4. If approved, merge to template main

## Related Guides

- [Quick Start](/starter-template/quick-start) — Clone and run in 5 minutes
- [Deployment](/starter-template/deployment) — Push to Vercel
- [Environment Management](/workflow-guides/environment-management) — Understanding dev/staging/prod
