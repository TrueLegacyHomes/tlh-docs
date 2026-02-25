# Frequently Asked Questions

Common questions from new team members, answered in plain language.

## General Questions

### What does True Legacy Homes do?

True Legacy Homes helps people with estate sales in California. Our websites and tools help customers find sales and help the company manage them.

### Who do I contact for help?

| Question About | Contact |
|----------------|---------|
| Technical problems | #dev-help on Slack |
| Access/permissions | Your manager |
| HR/payroll | HR department |
| General questions | Your onboarding buddy |

### Where is all the code?

Everything is on GitHub: [github.com/TrueLegacyHomes](https://github.com/TrueLegacyHomes)

You'll need to be invited to the organization to see it.

---

## About Claude (The AI)

### What is Claude?

Claude is an AI assistant made by Anthropic. It can read, write, and explain code. We use Claude Code (a VS Code extension) to help with development.

### Do I need to know how to code to use Claude?

No! Claude can write code based on your plain English descriptions. You describe what you want, Claude writes the code, you review and approve.

### Is Claude always right?

No. Claude is very capable but can make mistakes. That's why we:
- Always review Claude's work
- Test changes before deploying
- Don't blindly trust AI output

### Can Claude access the internet?

Yes, with the Web Search plugin. It can look up documentation, find examples, and check current information.

### Does Claude remember previous conversations?

Only within a session. When you start a new conversation or use `/clear`, Claude forgets previous discussions. That's why we use CLAUDE.md files for persistent context.

---

## About Development

### What programming languages do we use?

- **TypeScript** — For all JavaScript code
- **React** — For user interfaces
- **SQL** — For database queries

You don't need to know these deeply — Claude helps with the syntax.

### What is Next.js?

Next.js is a framework for building websites. It's what powers our web applications. Think of it as a pre-built foundation we customize.

### What is Supabase?

Supabase is our database service. It stores all the data our websites need — users, properties, settings, etc. It has a nice visual interface, so you don't need to write SQL.

### What is Vercel?

Vercel hosts our websites. When we push code to GitHub, Vercel automatically builds and deploys it. No manual upload needed.

### What's the difference between local and production?

| Term | Meaning |
|------|---------|
| **Local** | The website running on your computer. Only you can see it. |
| **Staging** | A test version on the internet. Safe to experiment. |
| **Production** | The real website customers use. Handle with care. |

---

## About Git & GitHub

### What is Git?

Git tracks changes to code, like "track changes" in a Word document. It lets us see what changed, when, and who made the change.

### What is GitHub?

GitHub is a website that stores Git repositories (code projects). It's like Google Drive for code.

### What's a commit?

A commit is a saved checkpoint. It captures the state of all files at a specific moment. Like saving a game — you can always go back to it.

### What's the main branch?

A branch is a version of the code. We only use one branch called `main` — it's the single source of truth. No confusing parallel versions.

### Why does Claude handle Git commands?

It's more reliable and consistent. Claude writes good commit messages and handles the technical details, so you don't have to memorize commands.

---

## About Testing

### When should I test?

Always before committing changes. Test on your local machine first, then verify on staging before production.

### What should I test?

1. Does the new thing work?
2. Did anything else break?
3. Does it look right on desktop AND mobile?
4. Are there any error messages?

### What if I find a bug?

1. Note the exact steps to reproduce it
2. Take a screenshot or recording
3. Post in #dev-help or tell the developer
4. Don't panic — bugs are normal and fixable

---

## Common Problems

### "It worked on my computer but not on staging"

Common causes:
- Missing environment variables
- Different data in staging
- Caching issues

Tell a developer and include what you expected vs. what happened.

### "I can't access [something]"

You might not have been granted access yet. Ask your manager to add you to the relevant accounts/projects.

### "Claude won't do what I ask"

Try:
1. Be more specific in your request
2. Break down the task into smaller steps
3. Run `/clear` and try again
4. Check if you have the necessary permissions

### "I committed something wrong"

Don't panic! Tell Claude: "Revert the last commit" — it can undo changes safely. For bigger problems, ask a developer.

### "The website is down!"

1. Check if it's just you (try a different network/device)
2. Check Vercel dashboard for deployment status
3. Check Supabase dashboard for database status
4. Post in #emergencies on Slack

---

## Tools & Setup

### What software do I need?

| Software | Purpose | Link |
|----------|---------|------|
| VS Code | Where you work | [code.visualstudio.com](https://code.visualstudio.com) |
| Claude Code | AI assistant | VS Code extension marketplace |
| Node.js | Runs JavaScript | [nodejs.org](https://nodejs.org) |
| Git | Version control | Pre-installed on Mac |

### Can I use a different code editor?

We standardize on VS Code because Claude Code works best with it. If you have a strong preference, ask your manager.

### Do I need a powerful computer?

A modern computer with 8GB+ RAM works fine. If you're experiencing slowness, reach out for help.

---

## Culture & Process

### How do we communicate?

| Type | Tool |
|------|------|
| Quick questions | Slack |
| Discussions | Slack or meetings |
| Documentation | This site! |
| Code discussions | GitHub |

### What are the work hours?

Ask your manager — it depends on your role and location.

### How do we handle emergencies?

1. Post in #emergencies on Slack
2. Tag relevant people
3. Someone will respond quickly
4. Follow the incident process

### Is there a dress code?

We're a casual environment. Ask your manager about any client-facing requirements.

---

## Still Have Questions?

### Can't find your answer here?

1. Search this documentation (use the search bar at the top)
2. Ask Claude: "Explain [concept] in simple terms"
3. Post in #general or #dev-help on Slack
4. Ask your onboarding buddy or manager

### Want to improve this FAQ?

We're always adding questions. If you think something should be here:
1. Post in #documentation on Slack
2. Or ask your manager to pass it along

---

## Quick Links

| Need | Go Here |
|------|---------|
| Set up my computer | [First Day Setup](/getting-started/first-day-setup) |
| Understand Git | [Git Workflow](/workflow-guides/git-workflow) |
| Learn testing | [Testing & QA](/workflow-guides/testing-qa) |
| Install plugins | [Plugin Installation](/cowork-plugins/installation) |
| Start a project | [Starter Template](/starter-template/) |
| Find a guide for my role | [By Role Guide](/team-onboarding/by-role) |
