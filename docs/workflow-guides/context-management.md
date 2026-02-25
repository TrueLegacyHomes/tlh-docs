# Context Management

This guide explains how to manage Claude's context efficiently — keeping conversations focused, avoiding bloat, and knowing when to start fresh.

## What is Context?

"Context" is everything Claude remembers during a conversation:
- Previous messages
- Files it has read
- Code it has written
- Commands it has run

Claude has a limited context window (like short-term memory). When it fills up, Claude forgets older information or becomes slower.

## Why Context Matters

| Context State | Result |
|---------------|--------|
| **Too small** | Claude forgets what you discussed |
| **Just right** | Claude is fast and remembers what's needed |
| **Too large** | Claude becomes slow, confused, or errors out |

**Goal:** Keep context focused and relevant, clear it when switching tasks.

## Signs Your Context is Bloated

Watch for these warning signs:

- 🐌 Claude's responses are getting slower
- 🔄 Claude repeats information you already discussed
- ❓ Claude forgets things from earlier in the conversation
- ❌ Claude gives errors about context length
- 🤷 Claude's answers become less relevant

## Three Tools for Managing Context

### 1. /clear — Start Fresh

**What it does:** Completely wipes Claude's memory. Like starting a brand new conversation.

**When to use:**
- Starting a new task unrelated to the previous one
- Context is badly bloated
- Claude is confused or stuck in a loop
- Beginning of a new work session

**How to use:**
```
/clear
```

[SCREENSHOT: Using /clear command]

**Example scenarios:**
- ✅ Morning, starting work: `/clear`
- ✅ Finished feature A, starting feature B: `/clear`
- ✅ Claude is confused: `/clear` and re-explain

### 2. /compact — Summarize and Shrink

**What it does:** Claude summarizes the conversation, keeping key points but discarding details. Reduces context size while preserving important information.

**When to use:**
- Mid-task when context is growing
- You want to continue but Claude is slowing
- After a lengthy discussion, before implementation

**How to use:**
```
/compact
```

[SCREENSHOT: Using /compact command]

**Example scenarios:**
- ✅ Long planning discussion, ready to code: `/compact`
- ✅ Claude slowing mid-task: `/compact`
- ✅ Before asking a complex question: `/compact`

### 3. Subagents — Delegate Tasks

**What it does:** Spawns a separate Claude instance to handle a specific task. The subagent has its own context, so it doesn't bloat your main session.

**When to use:**
- Complex, self-contained tasks
- Research that requires reading many files
- Tasks that would bloat your main context
- Parallel work streams

**How to use:**
Ask Claude to spawn a subagent:
```
"Spawn a subagent to research all the API endpoints in our codebase 
and document them."
```

[SCREENSHOT: Subagent being spawned]

**Example scenarios:**
- ✅ "Spawn a subagent to refactor the auth module"
- ✅ "Have a subagent analyze our test coverage"
- ✅ "Let a subagent update all the documentation"

## Decision Tree: What Should I Use?

```
Is this a new, unrelated task?
├─ Yes → /clear
└─ No → Is context getting bloated?
         ├─ No → Keep going
         └─ Yes → Is the task self-contained and complex?
                  ├─ Yes → Subagent
                  └─ No → /compact
```

### Quick Guide

| Situation | Action |
|-----------|--------|
| New day, new task | `/clear` |
| Same task, getting slow | `/compact` |
| Claude is confused | `/clear` |
| Big independent subtask | Subagent |
| Quick context refresh | `/compact` |
| Starting over | `/clear` |

## Best Practices

### 1. Clear at Natural Breakpoints

Don't let context accumulate indefinitely. Clear when:
- Starting a new feature
- Switching between projects
- Beginning a new work session
- After completing a major milestone

### 2. Use Compact to Preserve Progress

If you're mid-task and Claude is slowing:
1. Run `/compact`
2. Briefly remind Claude what you're working on
3. Continue where you left off

### 3. Delegate Heavy Research to Subagents

Subagents are perfect for:
- Reading through many files
- Analyzing codebases
- Documentation tasks
- Refactoring projects

The subagent does the heavy lifting without bloating your main session.

### 4. Be Specific After Clearing

After `/clear`, Claude knows nothing. Provide:
- What project you're working on
- What you want to accomplish
- Any relevant files to look at

**Bad after clear:**
```
"Continue with the button"
```

**Good after clear:**
```
"I'm working on the TLH website. I need to add a contact button to 
the header in /components/Header.tsx. It should use our gold brand 
color (#c9a227) and link to /contact."
```

### 5. Don't Over-Clear

Clearing too often means:
- Re-explaining context repeatedly
- Slower progress
- Lost continuity

Find the balance: clear at task boundaries, not mid-task.

## Context-Efficient Practices

### Give Claude Files, Not Descriptions

**Inefficient:**
```
"The Header component has a logo, nav links for Home, About, Services, 
and Contact, and it uses Tailwind CSS with responsive classes..."
```

**Efficient:**
```
"Look at /components/Header.tsx"
```

### Use Specific File Paths

**Inefficient:**
```
"Find the file that handles user authentication"
```

**Efficient:**
```
"Open /lib/auth.ts"
```

### Ask Focused Questions

**Inefficient:**
```
"Tell me everything about the database"
```

**Efficient:**
```
"What tables does our Supabase database have?"
```

## Monitoring Context

### Verbal Check

Ask Claude:
```
"How much of your context window is used?"
```

Claude can estimate how full its context is.

### Watch for Symptoms

| Symptom | Likely Cause | Solution |
|---------|--------------|----------|
| Slower responses | Context bloat | `/compact` |
| Forgetting earlier info | Context too full | `/clear` |
| Repetitive responses | Context confusion | `/clear` |
| Errors about length | Context exceeded | `/clear` |

## Common Mistakes

### ❌ Never Clearing

Working all day without clearing leads to:
- Accumulated irrelevant context
- Slower and slower responses
- Confused or contradictory answers

### ❌ Clearing Mid-Task

Clearing while working on something means:
- Re-explaining everything
- Lost progress
- Wasted time

### ❌ Avoiding Subagents

Some think subagents are "extra." But for big tasks:
- They prevent main session bloat
- They can work in parallel
- They keep your main context clean

## Workflow Example

Here's a typical day's context management:

```
9:00 AM - Start of day
         → /clear (fresh start)
         → "Working on TLH website today"

9:15 AM - Building new feature
         → Working normally

10:30 AM - Feature complete, tests pass
          → /clear (finished task)
          → "Now working on bug fixes"

11:00 AM - Mid-task, Claude slowing
          → /compact (preserve progress)
          → Continue working

12:00 PM - Need to document all components
          → "Spawn a subagent to document components"
          → Continue other work while subagent runs

1:00 PM - After lunch
         → /clear (fresh start)
         → Pick up where you left off
```

## Quick Reference

| Command | Effect | When to Use |
|---------|--------|-------------|
| `/clear` | Complete reset | New task, new day, confusion |
| `/compact` | Summarize & shrink | Mid-task slowdown |
| Subagent | Delegate task | Big independent work |

| Problem | Solution |
|---------|----------|
| Claude is slow | `/compact` |
| Claude forgot something | `/clear` + re-explain |
| Claude is confused | `/clear` |
| Big task ahead | Subagent |

## Summary

1. **Clear at task boundaries** — New task? New context.
2. **Compact when slowing** — Keep progress, shrink context
3. **Subagents for big jobs** — Don't bloat your main session
4. **Be specific after clearing** — Claude needs re-orientation
5. **Monitor symptoms** — Slow = bloated = time to act

You've completed all the workflow guides! 🎉

Return to [Workflow Guides Overview](/workflow-guides/) or explore [Cowork Plugins](/cowork-plugins/).
