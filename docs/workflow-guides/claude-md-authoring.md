# CLAUDE.md Authoring

This guide explains how to write and maintain CLAUDE.md files — configuration files that tell Claude how to behave in each project.

## What is CLAUDE.md?

CLAUDE.md is a special file that gives Claude instructions about your project. When Claude opens a project with a CLAUDE.md file, it reads and follows those instructions.

**Think of it as:** A briefing document for your AI assistant.

## Why Use CLAUDE.md?

Without CLAUDE.md, Claude starts fresh every time — it doesn't know:
- Your project's coding style
- Which files are important
- What commands are safe to run
- Your team's preferences

With CLAUDE.md, Claude:
- Understands your project's context
- Follows your coding standards
- Knows what to include and exclude
- Works more efficiently

## Basic Structure

A CLAUDE.md file looks like this:

```markdown
# Project Name

Brief description of what this project does.

## Key Information

- Framework: Next.js
- Database: Supabase
- Hosting: Vercel

## Important Files

- `/app` - Main application code
- `/components` - Reusable UI components
- `/lib` - Utility functions

## Coding Standards

- Use TypeScript
- Follow existing patterns
- Keep components small

## What NOT to Touch

- `/generated` - Auto-generated files
- `.env.local` - Contains secrets
```

## File Location

Place CLAUDE.md in your project's root folder:

```
my-project/
├── CLAUDE.md        ← Here
├── package.json
├── app/
├── components/
└── ...
```

## Writing Effective Instructions

### Be Specific

❌ **Vague:** "Use good code"
✅ **Specific:** "Use TypeScript. Add JSDoc comments to all functions."

### Be Concise

Claude works better with clear, brief instructions than long paragraphs.

❌ **Too long:**
```markdown
When you're writing code for this project, please make sure 
that you always remember to follow our established patterns 
and conventions that we've set up over time...
```

✅ **Concise:**
```markdown
## Coding Rules
- Follow existing patterns
- TypeScript only
- Max 100 lines per file
```

### Use Lists

Lists are easier for Claude to parse than paragraphs:

```markdown
## Do
- Use existing components when possible
- Add loading states to data fetches
- Handle errors gracefully

## Don't
- Create new utility files without asking
- Modify database schema directly
- Hardcode API keys
```

## Include/Exclude Rules

Tell Claude what to focus on and what to ignore:

### Including Files

```markdown
## Key Files to Understand
- `app/page.tsx` - Homepage
- `lib/database.ts` - Database utilities
- `components/Header.tsx` - Main navigation
```

### Excluding Files

```markdown
## Ignore These
- `node_modules/` - Dependencies (huge, not useful)
- `.next/` - Build output
- `*.log` - Log files
- `coverage/` - Test reports
```

## Using @path Imports

You can reference other files in your CLAUDE.md:

```markdown
## Architecture
See @architecture.md for system design.

## API Reference  
See @docs/api.md for endpoint documentation.
```

The `@` symbol tells Claude to read that file for context.

### When to Use @path

✅ **Good uses:**
- `@README.md` - Project overview
- `@docs/architecture.md` - System design
- `@CONVENTIONS.md` - Coding standards

❌ **Avoid:**
- `@node_modules/...` - Too large
- `@*.log` - Not useful
- Large data files

## Keep It Lean

CLAUDE.md should be brief. If it's getting long:

1. **Split into multiple files** — Use @path imports
2. **Remove obvious things** — Don't tell Claude how to write JavaScript
3. **Focus on exceptions** — What's unique about THIS project?

### Size Guidelines

| Size | Status |
|------|--------|
| < 100 lines | ✅ Good |
| 100-200 lines | ⚠️ Consider splitting |
| > 200 lines | ❌ Too long, refactor |

## Example CLAUDE.md

Here's a complete example for a True Legacy Homes project:

```markdown
# TLH Main Website

Marketing website for True Legacy Homes estate sales.

## Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Supabase (database)
- Vercel (hosting)

## Key Directories
- `/app` - Pages and routes
- `/components` - React components
- `/lib` - Database and utilities
- `/public` - Static assets

## Coding Standards
- TypeScript strict mode
- Functional components only
- Use existing Tailwind classes
- Mobile-first responsive design

## Brand Colors
- Navy: #1e3a5f (primary)
- Gold: #c9a227 (accent)

## Do
- Follow existing component patterns
- Use Supabase client from `/lib/supabase.ts`
- Add loading and error states
- Test on mobile viewport

## Don't
- Install new packages without asking
- Modify database schema directly
- Create new API routes (use Supabase)
- Hardcode text (use content files)

## Common Tasks
- New page: Create in `/app/[pagename]/page.tsx`
- New component: Create in `/components/`
- Database query: Use helpers in `/lib/database.ts`

## Testing
Run `npm run dev` and check:
1. Desktop view (1200px+)
2. Mobile view (375px)
3. No console errors

@docs/api.md
@docs/components.md
```

## Updating CLAUDE.md

Update your CLAUDE.md when:
- Project structure changes significantly
- New conventions are established
- Team adopts new tools or patterns
- You notice Claude making repeated mistakes

## Common Mistakes

### ❌ Too Much Detail

Don't include:
- Full API documentation
- Complete database schemas  
- Every file path in the project

### ❌ Conflicting Instructions

Make sure rules don't contradict:
```markdown
## Bad
- Always use classes
- Never use classes  ← Conflict!
```

### ❌ Outdated Information

Review CLAUDE.md periodically. Outdated instructions confuse Claude.

## Checklist for New Projects

When setting up a new project's CLAUDE.md:

- [ ] Brief project description
- [ ] Tech stack listed
- [ ] Key directories explained
- [ ] Coding standards defined
- [ ] Do/Don't rules clear
- [ ] Important files referenced
- [ ] Exclusions specified
- [ ] Total length under 100 lines

## Quick Reference

| Section | Purpose |
|---------|---------|
| Project description | What is this? |
| Stack | Technologies used |
| Key directories | Where's the code? |
| Standards | How to write code |
| Do/Don't | Rules to follow |
| @imports | Reference other docs |

## Summary

1. **Keep it brief** — Under 100 lines is ideal
2. **Be specific** — Clear rules, not vague guidance
3. **Use lists** — Easier to parse
4. **@import large docs** — Don't paste everything in
5. **Update regularly** — Stale docs cause confusion

Next: Learn about [Permission Allowlisting](/workflow-guides/permission-allowlisting) →
