# Creating New Skills

This guide shows you how to create a brand new skill for the team.

## When to Create a New Skill

- You have a repeatable task Claude should handle
- A department needs specialized AI assistance
- You want to package knowledge for the team

## Option 1: Use the Skill Creator (Recommended)

The easiest way — let Claude build it for you:

### 1. Open Claude Code

### 2. Activate the Skill Creator
Select **skill-creator** from the skill picker.

### 3. Describe What You Want
```
Create a new skill called "contract-reviewer" that helps 
review vendor contracts for red flags. It should check for:
- Unfavorable payment terms
- Auto-renewal clauses
- Liability issues
```

### 4. Claude Builds It
Claude will create all the necessary files and walk you through testing.

### 5. Add to the Repo
Claude will give you instructions to add it to the TLH plugins repo.

---

## Option 2: Manual Creation

If you prefer to build it yourself:

### 1. Copy an Existing Skill

Go to the [plugins repo](https://github.com/TrueLegacyHomes/tlh-cowork-plugins) and download an existing skill folder as a template.

A simple one to copy: `solution-finder`

### 2. Create the Folder Structure

```
plugins/
└── your-new-skill/
    ├── .claude-plugin/
    │   └── plugin.json
    └── skills/
        └── your-new-skill/
            └── SKILL.md
```

### 3. Edit plugin.json

```json
{
  "name": "your-new-skill",
  "version": "1.0.0",
  "description": "What this skill does in one sentence",
  "skills": [
    {
      "name": "your-new-skill",
      "path": "skills/your-new-skill"
    }
  ]
}
```

### 4. Write SKILL.md

This is the important part — it tells Claude how to behave:

```markdown
# Your New Skill

## Purpose
[What problem does this skill solve?]

## When to Use
[What triggers this skill? What questions/tasks?]

## Instructions
[Step-by-step how Claude should handle requests]

## Constraints
[What Claude should NOT do]

## Examples

### Example 1: [Scenario]
**User:** [Example question]
**Assistant:** [How Claude should respond]

### Example 2: [Scenario]
**User:** [Example question]  
**Assistant:** [How Claude should respond]

## Context
[Any background information Claude needs]
```

### 5. Register in marketplace.json

Add your skill to `plugins/.claude-plugin/marketplace.json`:

```json
{
  "plugins": [
    // ... existing plugins ...
    {
      "name": "your-new-skill",
      "version": "1.0.0",
      "description": "What this skill does",
      "source": "./your-new-skill"
    }
  ]
}
```

### 6. Commit and Push

Upload your new folder to the repo and commit.

### 7. Test It

```
/plugin marketplace refresh TrueLegacyHomes/tlh-cowork-plugins
```

Then select your new skill and try it out.

---

## Skill Template

Copy this starter template for SKILL.md:

```markdown
# [Skill Name]

## Purpose
Help users [accomplish X task] by [doing Y].

## When to Use
Activate this skill when users need help with:
- [Task 1]
- [Task 2]
- [Task 3]

## Instructions

### Step 1: Understand the Request
[How to interpret what the user wants]

### Step 2: Gather Information
[What to ask or look up]

### Step 3: Take Action
[What to do with the information]

### Step 4: Respond
[How to format and deliver the response]

## Constraints
- Never [thing to avoid]
- Always [thing to always do]
- If unsure, [fallback behavior]

## Examples

### Example: [Common scenario]
**User:** "[Example request]"

**Assistant:** "[Example response]"

## Context
[Background info, links to resources, etc.]
```

---

## Best Practices

### Start Small
Begin with a focused skill that does one thing well. You can expand later.

### Use Real Examples
Base your examples on actual questions the team has asked.

### Test Before Sharing
Try the skill yourself before telling the team it's ready.

### Get Feedback
Ask a teammate to try it and tell you what's confusing.

### Iterate
Skills get better over time. Edit based on what works and what doesn't.

---

## Skill Ideas

| Skill | What It Would Do |
|-------|------------------|
| meeting-summarizer | Summarize meeting notes into action items |
| email-drafter | Draft professional emails in TLH voice |
| policy-lookup | Answer questions about company policies |
| competitor-research | Gather info on competitor estate sale companies |
| listing-writer | Write estate sale listings for EstateSales.net |

---

## Need Help?

- Use the **skill-creator** skill for guidance
- Check existing skills for patterns to follow
- Ask in the team Slack channel
