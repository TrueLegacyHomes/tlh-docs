# Git Workflow

This guide explains how we manage code changes at True Legacy Homes. Our approach is simple: **one branch, AI-assisted commits, no complicated merging**.

## The Philosophy

Traditional development teams use multiple "branches" (parallel versions of code) that eventually get merged together. This creates complexity and merge conflicts.

**We do it differently:**
- One branch only: `main`
- Claude handles all Git operations
- Changes go directly to main after testing
- No rebasing, no merge conflicts, no headaches

## How It Works

### Step 1: Make Your Changes

1. Open the project in VS Code
2. Ask Claude to make the changes you need
3. Claude writes the code and shows you what changed
4. You review and approve the changes

[SCREENSHOT: Claude showing code changes in diff view]

### Step 2: Claude Commits and Pushes

Once you approve:

1. Tell Claude: "Commit and push these changes"
2. Claude runs the necessary Git commands
3. Claude writes a descriptive commit message
4. Changes are uploaded to GitHub automatically

::: tip You Don't Run Git Commands
Claude handles `git add`, `git commit`, and `git push`. You just approve and describe what changed.
:::

### Step 3: Automatic Deployment

After Claude pushes to GitHub:

1. Vercel detects the new code
2. It automatically builds and deploys
3. Within minutes, changes are live (on staging, then production)

[SCREENSHOT: Vercel deployment in progress]

## What You Need to Know

### Commit Messages

Claude writes commit messages, but you can guide them. Good commit messages:
- Describe **what** changed (not how)
- Are short but clear
- Use present tense ("Add feature" not "Added feature")

**Good examples:**
- "Add email signup form to homepage"
- "Fix broken image on About page"
- "Update pricing information"

**Bad examples:**
- "Changes"
- "Fixed stuff"
- "asdfasdf"

### When Things Go Wrong

**Accidentally committed something bad?**
Tell Claude: "Revert the last commit." Claude can undo changes safely.

**Need to see what changed?**
Ask Claude: "Show me recent commits" or check GitHub's commit history.

**Something broke on the live site?**
Vercel keeps previous versions. You can instantly roll back from the Vercel dashboard.

## The Rules

### ✅ Do This

- Ask Claude to commit after completing a logical piece of work
- Write clear descriptions of what you want to change
- Test locally before committing
- Commit often (small changes are easier to undo)

### ❌ Don't Do This

- Don't create new branches (we only use `main`)
- Don't run Git commands manually (let Claude handle it)
- Don't try to rebase or merge (not needed with one branch)
- Don't commit directly on GitHub's website

## Common Questions

### "Why only one branch?"

Multiple branches create complexity. With AI doing the coding:
- Changes are smaller and more frequent
- Testing happens before committing
- Rollbacks are easy through Vercel
- There's no need for parallel development

### "What if two people edit the same file?"

This rarely happens because:
- We coordinate work in Slack
- Claude checks for conflicts before pushing
- Changes are pushed frequently

If it does happen, Claude will alert you and help resolve it.

### "How do I see the history of changes?"

Ask Claude: "Show me the Git log" or:
1. Go to GitHub
2. Click on "Commits"
3. Browse the history

[SCREENSHOT: GitHub commit history page]

### "What if I need to work on something experimental?"

For experiments that might not ship:
1. Create a separate folder/file for experiments
2. Work on it locally without committing
3. When ready, ask Claude to commit it
4. Or delete it if the experiment failed

## Quick Reference

| Task | What to Say to Claude |
|------|----------------------|
| Save changes | "Commit and push these changes" |
| Undo last change | "Revert the last commit" |
| See recent changes | "Show me the Git log" |
| Check current status | "What files have changed?" |
| Discard changes | "Discard changes to [filename]" |

## Summary

1. **One branch** — Everything happens on `main`
2. **Claude commits** — You describe, AI executes
3. **Auto-deploy** — Push to GitHub, Vercel deploys
4. **Easy rollback** — Mistakes are fixable

Next: Learn about [Database Management](/workflow-guides/database-management) →
