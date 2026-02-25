# Cowork Plugins

Extend Claude Code's capabilities with plugins. This section explains what plugins are, how to install them, and which ones we use at True Legacy Homes.

## What Are Plugins?

Plugins add new abilities to Claude Code. They're like apps for your AI assistant — each one teaches Claude how to do something new.

**Examples of what plugins enable:**
- Search the web
- Read and analyze images
- Connect to APIs
- Generate files in specific formats
- Interact with external services

## Why Use Plugins?

| Without Plugins | With Plugins |
|-----------------|--------------|
| Claude only knows about your files | Claude can search the web for answers |
| Limited to text | Can analyze images and screenshots |
| Manual API calls | Direct integration with services |
| Basic functionality | Extended capabilities |

## Plugin Sources

### Official Marketplace

The safest way to get plugins. Officially reviewed and maintained.

### Community Plugins

Created by other users. Review carefully before installing.

### Custom Plugins

Built specifically for your organization.

## What We Use at TLH

We've curated 14 plugins that make our workflow smoother. See the complete list in [Plugin Directory](/cowork-plugins/plugin-directory).

**Most essential:**
- 🔍 Web Search — Find documentation and answers
- 🖼️ Image Analysis — Understand screenshots and designs
- 📧 Email — Draft and manage communications
- 🗄️ Database — Query Supabase directly

## Getting Started

1. Make sure you have Claude Code installed and running
2. Follow the [Installation Guide](/cowork-plugins/installation)
3. Review the [Plugin Directory](/cowork-plugins/plugin-directory)
4. Start using plugins in your daily work

## How Plugins Work

When you ask Claude something that requires a plugin:

1. Claude recognizes it needs the plugin
2. Plugin activates automatically
3. Claude uses the plugin to complete the task
4. You see the result

**Example conversation:**
```
You: "Search the web for Next.js 14 routing best practices"

Claude: [Uses Web Search plugin]
        "Based on the latest documentation and articles, 
         here are the best practices for Next.js 14 routing..."
```

## Safety & Permissions

Plugins have their own permissions:

| Permission Level | What Plugin Can Do |
|-----------------|-------------------|
| Read-only | View data, search information |
| Write | Create or modify files |
| Network | Access external services |
| Execute | Run commands |

Review plugin permissions before installing. Only install plugins you trust.

::: warning Be Selective
Not every plugin is necessary. Install only what you need to avoid complexity and potential security issues.
:::

## Next Steps

- [Installation Guide](/cowork-plugins/installation) — Step-by-step setup
- [Plugin Directory](/cowork-plugins/plugin-directory) — Browse available plugins
