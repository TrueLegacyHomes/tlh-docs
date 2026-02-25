# Permission Allowlisting

This guide explains how to configure which commands Claude can run automatically and which require your approval.

## Why Permissions Matter

Claude can execute commands on your computer — that's powerful but needs guardrails. The permission system ensures:

- ✅ Safe commands run automatically (saving you time)
- ✅ Risky commands require your approval
- ✅ Truly dangerous commands are blocked entirely

## How It Works

Claude categorizes commands into three levels:

| Level | What Happens | Example |
|-------|--------------|---------|
| **Allowed** | Runs automatically | `npm run dev` |
| **Ask** | Claude asks for permission | `rm -rf node_modules` |
| **Blocked** | Cannot run at all | System-damaging commands |

## Setting Up Permissions

### Accessing Permission Settings

1. Open VS Code with Claude Code
2. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows)
3. Type "Claude: Permissions" and select it
4. Or type `/permissions` in the Claude chat

[SCREENSHOT: Claude Code permissions dialog]

### The Allowlist

The allowlist contains commands Claude can run without asking.

**Recommended allowlist for TLH projects:**

```
npm run dev
npm run build
npm run test
npm run lint
npm install
npx prisma generate
npx prisma migrate
git status
git diff
git log
```

### Adding to the Allowlist

1. Open permissions settings
2. Find the "Allowlisted commands" section
3. Add commands one per line
4. Save settings

[SCREENSHOT: Adding commands to allowlist]

## What to Allowlist

### ✅ Safe to Allow

These commands are generally safe:

```
# Development servers
npm run dev
npm run start
npm run preview

# Building
npm run build
npm run generate

# Testing
npm run test
npm run lint
npm run typecheck

# Dependencies
npm install
npm update
npm ci

# Git (read operations)
git status
git diff
git log
git branch

# Database (read/generate)
npx prisma generate
npx supabase status
```

### ⚠️ Require Approval (Don't Allowlist)

These should require your explicit approval:

```
# Git (write operations)
git push          # Affects remote repository
git commit        # Creates permanent history
git reset         # Can lose work

# Deleting things
rm                # Deletes files
rmdir             # Deletes directories
npm uninstall     # Removes packages

# Database modifications
npx prisma migrate deploy
npx supabase db push

# System commands
sudo              # Admin access
chmod             # Permission changes
```

### ❌ Never Allow

These should remain blocked:

```
rm -rf /          # Destroys everything
sudo rm           # Admin delete
:(){ :|:& };:     # Fork bomb
> /dev/sda        # Disk destruction
```

::: danger Built-in Protection
Claude Code has built-in protections against truly dangerous commands. But don't rely on it — configure your permissions thoughtfully.
:::

## Sandboxing

Sandboxing restricts where Claude can make changes.

### Directory Restrictions

You can limit Claude to specific directories:

```
Allowed directories:
- /Users/you/projects/tlh-website
- /Users/you/projects/tlh-api

Blocked directories:
- /Users/you/Documents
- /Users/you/Desktop
- /
```

### Setting Up Sandboxing

1. Open Claude Code permissions
2. Find "Working directories" or "Sandbox" settings
3. Add only your project directories
4. Save settings

[SCREENSHOT: Sandbox directory configuration]

## Per-Project Permissions

Different projects might need different permissions.

### Example: Frontend Project

```
# Frontend-specific allowlist
npm run dev
npm run build
npm run test
npm run storybook
```

### Example: Backend Project

```
# Backend-specific allowlist
npm run dev
npm run build
npm run test
npm run db:generate
docker-compose up
```

## When Claude Asks for Permission

If Claude needs to run a command not on the allowlist:

1. **Claude shows the command** — Read it carefully
2. **You see context** — Why Claude wants to run it
3. **You choose:**
   - ✅ Allow once
   - ✅ Allow and add to allowlist
   - ❌ Deny

[SCREENSHOT: Claude asking for command permission]

### Questions to Ask Yourself

Before approving:
- Do I understand what this command does?
- Is this command necessary for the task?
- Could this damage files or data?
- Am I on the right project/directory?

## Troubleshooting

### "Claude keeps asking for permission for safe commands"

Add those commands to your allowlist.

### "Claude ran something I didn't expect"

1. Check what ran in the terminal history
2. Review and tighten your allowlist
3. Consider enabling more restrictive sandboxing

### "Claude can't run any commands"

1. Check that Claude Code has permission to use the terminal
2. Verify the allowlist isn't empty or malformed
3. Restart VS Code

## Best Practices

### Start Restrictive

Begin with a minimal allowlist and add commands as needed. It's easier to loosen than to recover from mistakes.

### Review Periodically

Every month or so:
- [ ] Review what's on your allowlist
- [ ] Remove commands you don't use
- [ ] Check if new projects need different settings

### Document Your Allowlist

Keep a record of why certain commands are allowed:

```
# TLH Allowlist

## Development
npm run dev      # Start local server
npm run build    # Build for production

## Testing  
npm run test     # Run unit tests
npm run lint     # Check code style

## Database
npx prisma generate   # Generate Prisma client
```

### Team Consistency

All team members should use similar permission settings. Share your allowlist configuration so everyone's protected equally.

## Quick Reference

| Category | Allow? | Examples |
|----------|--------|----------|
| Dev servers | ✅ Yes | `npm run dev` |
| Build commands | ✅ Yes | `npm run build` |
| Tests | ✅ Yes | `npm run test` |
| Git reads | ✅ Yes | `git status`, `git log` |
| Git writes | ⚠️ Ask | `git push`, `git commit` |
| Deletions | ⚠️ Ask | `rm`, `npm uninstall` |
| DB migrations | ⚠️ Ask | `db push`, `migrate` |
| Admin/sudo | ❌ No | `sudo`, `chmod` |

| Setting | Where |
|---------|-------|
| Open permissions | `/permissions` in Claude chat |
| Edit allowlist | Permissions → Allowlisted commands |
| Set sandbox | Permissions → Working directories |

## Summary

1. **Allowlist safe commands** — Development, testing, builds
2. **Require approval for writes** — Git pushes, deletions, migrations
3. **Sandbox by directory** — Limit Claude to project folders
4. **Start restrictive** — Add permissions as needed
5. **Review regularly** — Keep your allowlist current

Next: Learn about [Context Management](/workflow-guides/context-management) →
