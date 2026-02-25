# Environment Management

This guide explains our three environments — Development, Staging, and Production — and when to use each one.

## What Are Environments?

Think of environments as three separate copies of our website:

| Environment | Purpose | URL |
|-------------|---------|-----|
| **Development (Dev)** | Your local computer | `localhost:3000` |
| **Staging** | Testing before going live | `staging.truelegacyhomes.com` |
| **Production (Prod)** | The real, live website | `truelegacyhomes.com` |

Each environment has its own database and settings. Changes flow from Dev → Staging → Production.

## Development (Local)

### What It Is

The version running on your computer. Only you can see it.

### When to Use It

- Making changes
- Testing new features
- Debugging problems
- Experimenting with ideas

### How to Access

```bash
npm run dev
```
Then open `http://localhost:3000` in your browser.

### Key Points

- ✅ Safe to break things (only affects you)
- ✅ Instant feedback on changes
- ✅ Can test without internet
- ❌ Others can't see your work
- ❌ Uses test/sample data

[SCREENSHOT: Local development server running]

## Staging

### What It Is

A copy of the website on the internet, but not visible to customers. It uses real-ish data but in a safe sandbox.

### When to Use It

- Final testing before going live
- Showing changes to teammates
- Testing with production-like conditions
- Catching bugs that only appear "in the wild"

### How to Access

Go to your staging URL (ask your manager if you don't know it).

### How Changes Get There

1. Code is committed to the `main` branch
2. Vercel automatically builds and deploys to staging
3. Changes appear within minutes

### Key Points

- ✅ Tests in production-like environment
- ✅ Shareable with team
- ✅ Catches issues local testing misses
- ❌ Not for customer use
- ❌ May have test data

[SCREENSHOT: Staging environment showing preview]

## Production

### What It Is

The real, live website that customers see.

### When to Use It

- Never for testing
- Only for verified, approved changes
- When changes have passed staging review

### How to Access

Go to `truelegacyhomes.com` (the real website).

### How Changes Get There

1. Changes are tested on staging
2. Someone with permission promotes to production
3. Vercel deploys to the production environment

### Key Points

- ✅ Real users, real data
- ✅ Full performance
- ✅ Actual business impact
- ❌ Mistakes affect customers
- ❌ Rollbacks needed for problems

[SCREENSHOT: Production website]

## The Promotion Flow

```
Development → Staging → Production
   (You)       (Team)     (Live)
```

### Step by Step

1. **Develop locally** — Make and test changes on your computer
2. **Commit to main** — Push code to GitHub
3. **Auto-deploy to staging** — Vercel builds it automatically
4. **Test on staging** — Team verifies everything works
5. **Promote to production** — Approved changes go live

## Environment Variables

Each environment has its own settings stored in "environment variables."

### Local Development

Settings stored in `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:3000
DATABASE_URL=postgresql://localhost:5432/dev_db
```

### Staging

Settings configured in Vercel:
```
NEXT_PUBLIC_API_URL=https://staging.truelegacyhomes.com
DATABASE_URL=postgresql://staging-db-url
```

### Production

Settings configured in Vercel (separate from staging):
```
NEXT_PUBLIC_API_URL=https://truelegacyhomes.com
DATABASE_URL=postgresql://production-db-url
```

::: warning Never Share Production Credentials
Production environment variables contain sensitive data. Treat them like passwords.
:::

## Database Per Environment

Each environment has its own database:

| Environment | Database |
|-------------|----------|
| Development | Local Supabase or SQLite |
| Staging | Supabase staging project |
| Production | Supabase production project |

This separation means:
- Testing doesn't affect real data
- Experiments can use fake data
- Mistakes don't harm customers

## Common Scenarios

### "I want to test a new feature"

1. Work in development (local)
2. Test thoroughly
3. Commit and let it deploy to staging
4. Verify on staging
5. Get approval for production

### "Someone found a bug on the live site"

1. Reproduce the bug locally
2. Fix it in development
3. Test the fix locally
4. Commit and verify fix on staging
5. Promote fix to production

### "I want to test with real data"

You generally shouldn't use real production data in dev/staging. Instead:
1. Export anonymized data from production
2. Import to your local database
3. Test with realistic (but safe) data

### "Something broke in production"

1. **Immediate:** Roll back in Vercel to previous version
2. **Investigate:** Find the problem locally
3. **Fix:** Develop and test the fix
4. **Deploy:** Follow normal promotion flow

## Environment Checklist

Before deploying, confirm:

| Check | Dev | Staging | Prod |
|-------|-----|---------|------|
| Feature works? | ✓ | ✓ | — |
| No console errors? | ✓ | ✓ | — |
| Tests pass? | ✓ | — | — |
| Looks correct? | ✓ | ✓ | — |
| Team approved? | — | ✓ | — |
| Ready for customers? | — | — | ✓ |

## Quick Reference

| Task | Environment | Why |
|------|-------------|-----|
| Writing code | Development | Safe to experiment |
| Testing changes | Development | Quick feedback |
| Team review | Staging | Sharable link |
| Client demo | Staging | Professional appearance |
| Real users | Production | Live business |

| Command | What It Does |
|---------|--------------|
| `npm run dev` | Start local development server |
| `npm run build` | Build production version locally |
| `npm run start` | Run production build locally |

## Summary

1. **Development** — Your local sandbox, safe to break
2. **Staging** — Team testing ground, production-like
3. **Production** — Real customers, handle with care
4. **Always flow Dev → Staging → Prod** — Never skip steps

Next: Learn about [CLAUDE.md Authoring](/workflow-guides/claude-md-authoring) →
