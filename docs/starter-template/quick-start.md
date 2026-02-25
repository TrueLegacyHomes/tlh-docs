# Quick Start

Get a new project running in 5 minutes. Follow these steps exactly.

## Prerequisites

Before starting, you need:
- [ ] GitHub account with TLH organization access
- [ ] Node.js installed (v18 or higher)
- [ ] VS Code with Claude Code extension

Not set up yet? See [Prerequisites](/getting-started/prerequisites).

## Step 1: Clone the Template

### Option A: GitHub (Recommended)

1. Go to [github.com/TrueLegacyHomes/tlh-starter](https://github.com/TrueLegacyHomes/tlh-starter)
2. Click the green "Use this template" button
3. Select "Create a new repository"
4. Name your new project (e.g., `tlh-newproject`)
5. Keep it private
6. Click "Create repository from template"

[SCREENSHOT: GitHub "Use this template" button]

### Option B: Command Line

```bash
# Clone the template
git clone https://github.com/TrueLegacyHomes/tlh-starter.git my-new-project

# Enter the directory
cd my-new-project

# Remove the old Git history
rm -rf .git

# Start fresh Git history
git init
git add .
git commit -m "Initial commit from TLH starter template"
```

## Step 2: Open in VS Code

1. Open VS Code
2. File → Open Folder
3. Select your new project folder
4. VS Code will load the project

[SCREENSHOT: VS Code with project open]

## Step 3: Install Dependencies

Open the terminal in VS Code (`View → Terminal`) and run:

```bash
npm install
```

Wait for installation to complete. You'll see output like:

```
added 245 packages in 15s
```

[SCREENSHOT: Successful npm install]

## Step 4: Set Up Environment Variables

1. Find `.env.example` in the file list
2. Copy it and rename to `.env.local`
3. Open `.env.local` and fill in your values:

```bash
# Get these from Supabase Dashboard
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

[SCREENSHOT: .env.local file with values]

::: tip Getting Supabase Values
1. Go to [supabase.com/dashboard](https://supabase.com/dashboard)
2. Select your project
3. Go to Settings → API
4. Copy the URL and anon key
:::

## Step 5: Run the Development Server

```bash
npm run dev
```

You should see:

```
▲ Next.js 14.x
- Local: http://localhost:3000
- Ready in 2s
```

[SCREENSHOT: Dev server running in terminal]

## Step 6: View Your Site

1. Open your browser
2. Go to `http://localhost:3000`
3. You should see the starter template homepage!

[SCREENSHOT: Starter template homepage in browser]

## Step 7: Make It Yours

Now customize the template for your project:

### Update Site Information

Edit `app/layout.tsx`:
```tsx
export const metadata = {
  title: 'Your Project Name',
  description: 'Your project description',
}
```

### Update Navigation

Edit `components/Header.tsx` to change menu items.

### Update Content

Edit the pages in `app/` folder to add your content.

## Quick Customization Checklist

After cloning, update these files:

- [ ] `app/layout.tsx` — Site title and metadata
- [ ] `components/Header.tsx` — Navigation links
- [ ] `components/Footer.tsx` — Footer content
- [ ] `app/page.tsx` — Homepage content
- [ ] `public/` — Add your images
- [ ] `CLAUDE.md` — Project-specific instructions

## Verifying Everything Works

Run these checks:

### 1. Build Test
```bash
npm run build
```
Should complete without errors.

### 2. Type Check
```bash
npm run typecheck
```
Should show no type errors.

### 3. Lint Check
```bash
npm run lint
```
Should pass with no warnings.

## Common Issues

### "Module not found" errors

Dependencies didn't install correctly:
```bash
rm -rf node_modules
npm install
```

### "Port 3000 is in use"

Another app is using that port:
```bash
npm run dev -- --port 3001
```

### Environment variable errors

Make sure:
- File is named exactly `.env.local`
- No spaces around `=` signs
- Values don't have extra quotes

### Page shows "Loading..." forever

Supabase connection failed:
- Verify your environment variables
- Check Supabase dashboard is accessible
- Ensure project isn't paused

## Project Structure Overview

| Folder | Purpose |
|--------|---------|
| `app/` | Pages and routes |
| `components/` | Reusable UI pieces |
| `lib/` | Utility functions and database |
| `public/` | Images and static files |
| `styles/` | Global CSS |

## Next Steps

Your project is running! Now:

1. [Deploy to Vercel](/starter-template/deployment) — Get it online
2. Start building features — Ask Claude to help
3. Connect team members — Share the GitHub repo

## Getting Help

Stuck? Try:

1. **Ask Claude:** Describe the error and ask for help
2. **Check the FAQ:** [Team FAQ](/team-onboarding/faq)
3. **Ask in Slack:** #dev-help channel
