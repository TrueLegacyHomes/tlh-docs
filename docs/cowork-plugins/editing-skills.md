# Editing Skills

This guide shows you how to update existing skills when you need to change how Claude behaves.

## When to Edit a Skill

- Claude keeps making the same mistake
- Business processes have changed
- You want to add new capabilities
- Instructions need clarification

## Step-by-Step: Edit a Skill

### 1. Go to the Plugins Repo

Open: [github.com/TrueLegacyHomes/tlh-cowork-plugins](https://github.com/TrueLegacyHomes/tlh-cowork-plugins)

### 2. Find the Skill File

Navigate to the skill you want to edit:

```
plugins/
└── [skill-name]/
    └── skills/
        └── [skill-name]/
            └── SKILL.md   ← This is what you edit
```

**Example:** To edit the "solution-finder" skill:
```
plugins/solution-finder/skills/solution-finder/SKILL.md
```

### 3. Click the Edit Button

[SCREENSHOT: Click the pencil icon in the top-right of the file view]

### 4. Make Your Changes

The SKILL.md file contains instructions for Claude. Write in plain English:

```markdown
# Solution Finder

## What This Skill Does
Help users find answers across TLH knowledge base.

## How to Behave
- Always check the knowledge base first
- If you can't find an answer, say so
- Never make up information

## Examples
User: "What's our refund policy?"
→ Search knowledge base for "refund policy"
→ Return the relevant section
```

### 5. Commit Your Changes

1. Scroll down to "Commit changes"
2. Write a brief description (e.g., "Updated refund policy instructions")
3. Click **Commit changes**

[SCREENSHOT: The commit dialog]

### 6. Refresh in Claude Code

Team members need to refresh to get the update:

```
/plugin marketplace refresh TrueLegacyHomes/tlh-cowork-plugins
```

::: tip Auto-Refresh
Skills refresh automatically when you start a new Claude Code session. The manual refresh is only needed if you want changes immediately.
:::

## What Can You Change?

| Part of SKILL.md | What It Controls |
|------------------|------------------|
| Title/description | How the skill appears in the picker |
| Instructions | How Claude behaves when skill is active |
| Examples | Teaches Claude the right patterns |
| Constraints | What Claude should NOT do |
| Context | Background info Claude needs |

## Best Practices

### Keep It Simple
Write like you're explaining to a smart new employee. Avoid jargon.

### Be Specific
❌ "Be helpful"  
✅ "When a user asks about pricing, always include the consultation phone number"

### Use Examples
Show Claude what good looks like:
```markdown
## Example Conversation
User: "How much does an estate sale cost?"
Assistant: "Estate sale pricing depends on the size and contents of the home. 
For a personalized quote, call us at (619) 450-1702 or schedule a free consultation."
```

### Test Your Changes
After editing, try the skill in Claude Code to make sure it works as expected.

## Need Help?

If you're unsure what to change, ask in the team Slack channel or check with IT.
