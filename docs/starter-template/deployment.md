# Deployment

This guide walks you through deploying your project to Vercel, making it accessible on the internet.

## What is Vercel?

Vercel is the platform that hosts our websites. It:
- Automatically builds your code
- Deploys to a global network
- Provides staging and production URLs
- Handles SSL certificates
- Scales automatically

## Prerequisites

Before deploying:
- [ ] Project runs locally without errors (`npm run dev`)
- [ ] Build completes successfully (`npm run build`)
- [ ] Code is pushed to GitHub
- [ ] You have Vercel account access

## Step 1: Push to GitHub

First, your code needs to be on GitHub:

```bash
# Check what needs to be committed
git status

# Add all changes
git add .

# Commit with a message
git commit -m "Initial project setup"

# Push to GitHub
git push origin main
```

[SCREENSHOT: GitHub repository with code]

## Step 2: Connect to Vercel

### First Time Setup

1. Go to [vercel.com](https://vercel.com)
2. Click "Log In" → "Continue with GitHub"
3. Authorize Vercel to access your GitHub

[SCREENSHOT: Vercel GitHub authorization]

### Import Your Project

1. From Vercel dashboard, click "Add New..." → "Project"
2. Find your repository in the list
3. Click "Import"

[SCREENSHOT: Vercel import project screen]

## Step 3: Configure Project Settings

Vercel auto-detects most settings. Verify:

| Setting | Value |
|---------|-------|
| Framework Preset | Next.js |
| Root Directory | `./ ` (default) |
| Build Command | `npm run build` |
| Output Directory | (leave default) |

[SCREENSHOT: Vercel project configuration]

## Step 4: Add Environment Variables

**Important:** Your `.env.local` values don't automatically transfer.

1. Expand "Environment Variables" section
2. Add each variable:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase key |

[SCREENSHOT: Vercel environment variables form]

3. For each variable, check which environments need it:
   - ✅ Production
   - ✅ Preview (staging)
   - ✅ Development

## Step 5: Deploy

1. Click "Deploy"
2. Watch the build progress
3. Wait for "Ready" status

[SCREENSHOT: Vercel deployment in progress]

Build typically takes 1-3 minutes. You'll see:
- Installing dependencies
- Building application
- Deploying to edge network

## Step 6: View Your Site

After deployment completes:

1. Click "Visit" or the preview URL
2. Your site is now live!

[SCREENSHOT: Live site after deployment]

You'll get URLs like:
- **Production:** `your-project.vercel.app`
- **Preview:** `your-project-git-main-tlh.vercel.app`

## Setting Up Custom Domain

To use a real domain (like `newproject.truelegacyhomes.com`):

### Add the Domain

1. Go to Project Settings → Domains
2. Enter your domain name
3. Click "Add"

[SCREENSHOT: Vercel domain settings]

### Configure DNS

Vercel will show you DNS records to add:

| Type | Name | Value |
|------|------|-------|
| CNAME | www | cname.vercel-dns.com |
| A | @ | 76.76.21.21 |

Add these records in your DNS provider (usually your domain registrar).

[SCREENSHOT: DNS configuration]

### Wait for Propagation

DNS changes can take up to 48 hours, but usually complete in 10-30 minutes.

## Automatic Deployments

Once connected, Vercel automatically deploys:

| Trigger | Environment | URL |
|---------|-------------|-----|
| Push to `main` | Production | `your-domain.com` |
| Pull request | Preview | Unique preview URL |

You don't need to manually deploy again unless:
- Changing environment variables
- Modifying project settings

## Checking Deployment Status

### From Vercel Dashboard

1. Go to your project
2. Click "Deployments" tab
3. See status of all deployments

[SCREENSHOT: Vercel deployments list]

### Status Indicators

| Status | Meaning |
|--------|---------|
| 🟢 Ready | Successfully deployed |
| 🟡 Building | Deployment in progress |
| 🔴 Error | Build failed |

## Deployment Failed?

If deployment fails:

### 1. Check the Build Logs

1. Click on the failed deployment
2. Read the error message
3. Common errors:
   - Missing environment variables
   - Build command failed
   - TypeScript errors

[SCREENSHOT: Vercel build error log]

### 2. Fix Locally First

Before pushing a fix:
```bash
# Make sure it builds locally
npm run build
```

Only push when build succeeds locally.

### 3. Redeploy

After fixing:
```bash
git add .
git commit -m "Fix build error"
git push
```

Vercel will automatically redeploy.

## Rolling Back

If a deployment breaks something:

1. Go to Deployments tab
2. Find the last working deployment
3. Click "..." menu → "Promote to Production"

[SCREENSHOT: Vercel rollback option]

This instantly switches production to the previous version.

## Environment-Specific Deployments

### Production
- Triggered by pushes to `main` branch
- Uses production environment variables
- Your real domain

### Preview (Staging)
- Triggered by pull requests
- Uses preview environment variables
- Unique URL for each PR

## Deployment Checklist

Before deploying to production:

- [ ] Feature works locally
- [ ] Build passes (`npm run build`)
- [ ] Tests pass (`npm run test`)
- [ ] Tested on staging preview
- [ ] Environment variables set in Vercel
- [ ] Team has approved (for major changes)

## Quick Reference

| Task | How |
|------|-----|
| Deploy | Push to `main` branch |
| Check status | Vercel dashboard → Deployments |
| View logs | Click on deployment → Build logs |
| Rollback | Deployments → ... → Promote to Production |
| Add domain | Settings → Domains |
| Add env var | Settings → Environment Variables |

## Troubleshooting

### "Build failed: Module not found"

Package might not be in dependencies:
1. Check `package.json` has the package
2. Run `npm install` locally
3. Commit and push `package-lock.json`

### "Environment variable is undefined"

1. Go to Vercel → Settings → Environment Variables
2. Verify the variable exists
3. Redeploy after adding

### "Domain not working"

1. Check DNS records are correct
2. Wait for propagation (can take hours)
3. Verify SSL certificate is issued

## Next Steps

Your project is deployed! Consider:

- [Setting up monitoring](/workflow-guides/cloud-cost-management)
- [Configuring staging environment](/workflow-guides/environment-management)
- Sharing the URL with your team
