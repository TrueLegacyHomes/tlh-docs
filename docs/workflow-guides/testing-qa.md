# Testing & QA

This guide explains how we test changes before they go live. Good testing prevents bugs from reaching real users.

## Why Testing Matters

Every change — no matter how small — can have unintended effects. Testing catches problems early when they're easy to fix, instead of after users see them.

**The goal:** Nothing goes live until we're confident it works.

## Types of Testing

### 1. Local Testing (You + Claude)

Before committing any code:

1. Run the development server (`npm run dev`)
2. Check that the change works as expected
3. Click around nearby features to make sure nothing broke
4. Ask Claude: "Did this change affect anything else?"

[SCREENSHOT: Local development environment]

### 2. Automated Testing (Claude)

Claude can run automated tests:

```bash
npm run test
```

**What automated tests check:**
- Code syntax is correct
- Functions return expected results
- Components render without errors

Tell Claude: "Run the tests" and review the results.

### 3. Visual Testing (You)

Look at the actual website:
- Does it look right?
- Is text spelled correctly?
- Do images load?
- Do links work?

**Check multiple screen sizes:**
1. Desktop (full browser window)
2. Tablet (resize browser to ~768px wide)
3. Mobile (resize to ~375px wide or use browser dev tools)

[SCREENSHOT: Browser responsive design testing]

### 4. Staging Testing (Team)

Before production, changes go to a staging environment:
- Looks like the real site
- Uses test data
- Safe to experiment

Always test on staging before approving for production.

## The Testing Checklist

Run through this checklist before any deployment:

### Functionality
- [ ] The new feature/fix works as intended
- [ ] Existing features still work
- [ ] Forms submit correctly
- [ ] Links go to the right places
- [ ] Buttons do what they're labeled to do

### Visual
- [ ] Layout looks correct on desktop
- [ ] Layout looks correct on mobile
- [ ] Images load properly
- [ ] Text is readable (size, contrast)
- [ ] Brand colors are correct (Navy #1e3a5f, Gold #c9a227)

### Content
- [ ] No spelling or grammar errors
- [ ] Placeholder text is replaced with real content
- [ ] Contact information is correct
- [ ] Dates and times are accurate

### Technical
- [ ] No console errors (check browser dev tools)
- [ ] Page loads in under 3 seconds
- [ ] Automated tests pass
- [ ] No broken links (404 errors)

## Go/No-Go Decision

Before pushing to production, ask yourself:

### ✅ GO — Deploy if:
- All checklist items pass
- Automated tests pass
- Staging looks good
- No critical bugs found

### ❌ NO-GO — Don't deploy if:
- Any functionality is broken
- The site crashes or shows errors
- Important content is missing
- You're unsure about something

::: warning When in Doubt, Don't Deploy
It's always better to delay a launch than to push broken code. Ask a teammate for a second opinion.
:::

## Testing Workflow

### For Small Changes

1. **Make the change** — Ask Claude to implement it
2. **Test locally** — Check it works on your machine
3. **Run automated tests** — `npm run test`
4. **Commit** — If tests pass, commit to main
5. **Check staging** — Verify on staging environment
6. **Approve** — Promote to production if everything looks good

### For Big Changes

1. **Plan the change** — Document what will be different
2. **Make the change** — Work with Claude
3. **Test locally thoroughly** — Run through full checklist
4. **Run automated tests** — Fix any failures
5. **Get a review** — Have a teammate look at it
6. **Test on staging** — Full team testing
7. **Document** — Note any special deployment steps
8. **Deploy** — Push to production
9. **Verify** — Check production immediately after

## What Claude Tests Automatically

When you run `npm run test`, Claude checks:

| What | How |
|------|-----|
| TypeScript errors | Verifies code syntax |
| Unit tests | Runs functions with test data |
| Build success | Ensures the site can compile |
| Linting | Checks code style rules |

## Manual Testing Scenarios

Test these common user flows:

### Contact Form
1. Go to contact page
2. Leave a required field empty → Should show error
3. Enter invalid email → Should show error
4. Fill form correctly → Should submit successfully
5. Check that submission appears in database

### Navigation
1. Click every menu item → Each should load correctly
2. Click logo → Should go to homepage
3. Test footer links → Each should work
4. Use back button → Should navigate correctly

### Mobile Experience
1. Open site on phone (or use responsive mode)
2. Can you read all text?
3. Can you tap all buttons easily?
4. Does the menu work on mobile?
5. Do images resize appropriately?

## Reporting Bugs

When you find a bug:

1. **Describe what happened** — "When I click X, Y happens instead of Z"
2. **Note the steps to reproduce** — How can someone else see the same bug?
3. **Include screenshots** — Visual evidence helps
4. **Mention the environment** — Local, staging, or production?

Tell Claude: "I found a bug. [Description]. Can you investigate and fix it?"

## Quick Reference

| Test Type | When | Who |
|-----------|------|-----|
| Local | Every change | You + Claude |
| Automated | Before committing | Claude |
| Visual | Before deploying | You |
| Staging | Before production | Team |

| Command | What It Does |
|---------|--------------|
| `npm run dev` | Start local server for testing |
| `npm run test` | Run automated tests |
| `npm run build` | Test production build |

## Summary

1. **Test locally first** — Catch obvious problems early
2. **Run automated tests** — Let Claude check the code
3. **Use the checklist** — Don't skip steps
4. **Test on staging** — Mirror production conditions
5. **When unsure, don't deploy** — It's okay to ask for help

Next: Learn about [Cloud Cost Management](/workflow-guides/cloud-cost-management) →
