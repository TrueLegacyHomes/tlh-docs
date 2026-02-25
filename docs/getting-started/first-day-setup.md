# First Day Setup

Welcome to your first day! Follow this checklist to get everything running.

::: tip Time Estimate
This should take about 30-45 minutes. Don't rush — it's better to get it right.
:::

## Step 1: Clone the Project

"Cloning" downloads a copy of our code to your computer.

1. Open VS Code
2. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows)
3. Type "Git: Clone" and select it
4. Paste the repository URL your manager gave you
5. Choose a folder on your computer to save it (like `Documents/Work`)
6. Click "Open" when VS Code asks if you want to open the project

[SCREENSHOT: VS Code Git Clone dialog]

## Step 2: Install Dependencies

"Dependencies" are tools the project needs to run.

1. In VS Code, open the Terminal: `View → Terminal`
2. Type this command and press Enter:
   ```bash
   npm install
   ```
3. Wait for it to finish (might take a few minutes)
4. You should see "added X packages" when done

[SCREENSHOT: Terminal showing successful npm install]

## Step 3: Set Up Environment Variables

Environment variables are secret settings the app needs (like passwords).

1. In VS Code, look at the files on the left sidebar
2. Find a file called `.env.example` or `.env.local.example`
3. Right-click it and choose "Copy"
4. Right-click in the same folder and choose "Paste"
5. Rename the copy to `.env.local` (remove the `.example` part)
6. Open the new file and fill in the values your manager gave you

[SCREENSHOT: .env.local file with placeholder values]

::: warning Keep It Secret
Never share your `.env.local` file or commit it to GitHub. It contains sensitive information.
:::

## Step 4: Run the Development Server

1. In the Terminal, type:
   ```bash
   npm run dev
   ```
2. Wait until you see a message like "ready" or "started on localhost:3000"
3. Open your web browser and go to `http://localhost:3000`
4. You should see the website running locally!

[SCREENSHOT: Browser showing local development site]

## Step 5: Test Claude Code

Make sure the AI assistant is working:

1. Open any file in the project
2. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows)
3. Type "Claude" and you should see Claude Code options
4. Try asking it a simple question like "What does this file do?"

[SCREENSHOT: Claude Code conversation panel]

## Step 6: Configure Permissions

Claude Code needs permission to run certain commands. See [Permission Allowlisting](/workflow-guides/permission-allowlisting) for details, but the quick version:

1. Open Claude Code settings
2. Add these commands to the allowlist:
   - `npm run dev`
   - `npm run build`
   - `npm run test`
3. Save your settings

## Verification Checklist

Before you wrap up, confirm:

- [ ] Project is cloned and opens in VS Code
- [ ] `npm install` completed without errors
- [ ] `.env.local` file exists with your values
- [ ] `npm run dev` runs the local server
- [ ] You can see the website at `localhost:3000`
- [ ] Claude Code responds when you ask it questions

## Common Problems

### "npm: command not found"

Node.js isn't installed correctly. Go back to [Prerequisites](/getting-started/prerequisites) and reinstall it.

### "Port 3000 is already in use"

Another app is using that port. Try:
```bash
npm run dev -- --port 3001
```

### "Module not found" errors

Dependencies didn't install correctly. Delete the `node_modules` folder and run `npm install` again.

### Claude Code isn't responding

1. Make sure the extension is installed and enabled
2. Check that you're signed in to your Anthropic account
3. Try restarting VS Code

## Next Steps

You're all set up! Here's what to explore next:

- [Quick Reference](/getting-started/quick-reference) — Bookmark this for key links
- [Git Workflow](/workflow-guides/git-workflow) — Learn how we save and share code
- [Your Role Guide](/team-onboarding/by-role) — What to focus on based on your job
