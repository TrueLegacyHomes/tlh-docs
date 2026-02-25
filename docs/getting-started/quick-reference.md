# Quick Reference

Bookmark this page! It has everything you need in one place.

## Brand Colors

| Color | Hex Code | Use |
|-------|----------|-----|
| Navy | `#1e3a5f` | Primary brand color, headers, buttons |
| Gold | `#c9a227` | Accents, highlights, hover states |
| White | `#ffffff` | Backgrounds, text on dark |
| Light Gray | `#f5f5f5` | Section backgrounds |

[SCREENSHOT: Color swatches showing Navy and Gold]

## Key Links

### Development Tools

| Tool | URL | Purpose |
|------|-----|---------|
| GitHub | [github.com/TrueLegacyHomes](https://github.com/TrueLegacyHomes) | Code repositories |
| Vercel | [vercel.com/truelegacyhomes](https://vercel.com/truelegacyhomes) | Hosting & deployments |
| Supabase | [supabase.com/dashboard](https://supabase.com/dashboard) | Database & backend |

### Company Resources

| Resource | URL |
|----------|-----|
| Company Website | [truelegacyhomes.com](https://www.truelegacyhomes.com) |
| Team Slack | [Ask your manager for invite link] |

## Important Commands

### Daily Use

```bash
# Start the development server
npm run dev

# Install project dependencies
npm install

# Build for production (before deploying)
npm run build

# Run tests
npm run test
```

### Git Commands (Usually Claude Does These)

```bash
# See what files changed
git status

# Save your changes
git add .
git commit -m "Description of what changed"

# Upload to GitHub
git push
```

## Claude Code Shortcuts

| Action | Mac | Windows |
|--------|-----|---------|
| Open command palette | `Cmd+Shift+P` | `Ctrl+Shift+P` |
| Open Claude Code chat | `Cmd+Shift+C` | `Ctrl+Shift+C` |
| Accept suggestion | `Tab` | `Tab` |
| Reject suggestion | `Esc` | `Esc` |

## Environment Files

| File | Purpose | Commit to Git? |
|------|---------|---------------|
| `.env.local` | Your local secrets | ❌ Never |
| `.env.example` | Template for others | ✅ Yes |
| `.env.production` | Production secrets | ❌ Never |

## Common Port Numbers

| Port | What's Running |
|------|----------------|
| 3000 | Next.js development server |
| 5432 | PostgreSQL database |
| 54321 | Supabase local |

## Who to Contact

| Question About | Contact |
|----------------|---------|
| Access & permissions | Your manager |
| Technical problems | #dev-help on Slack |
| Design & branding | Design team lead |
| Content & copy | Marketing team |

## Emergency Contacts

If something breaks on the live website:

1. **Don't panic** — The site has automatic backups
2. **Check Vercel** — Look for failed deployments
3. **Check Supabase** — Database might be down
4. **Alert the team** — Post in #emergencies on Slack

## Useful Documentation

- [Next.js Docs](https://nextjs.org/docs) — Framework documentation
- [Supabase Docs](https://supabase.com/docs) — Database documentation
- [Vercel Docs](https://vercel.com/docs) — Hosting documentation
- [Claude Code Docs](https://docs.anthropic.com) — AI assistant docs

::: tip Print This Page
Consider printing this page or saving it as a PDF for quick offline access.
:::
