# Plugin Installation

This guide walks you through installing plugins for Claude Code step by step.

## Prerequisites

Before installing plugins, make sure you have:

- [ ] Claude Code extension installed in VS Code
- [ ] An active Claude Code subscription
- [ ] VS Code open with a project

## Installing from the Marketplace

### Step 1: Open Plugin Manager

1. Open VS Code
2. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows)
3. Type "Claude: Plugins" or "Claude: Marketplace"
4. Select "Claude: Open Plugin Marketplace"

[SCREENSHOT: Command palette showing plugin option]

### Step 2: Browse Available Plugins

The marketplace shows:
- Featured plugins
- Categories (productivity, development, utilities)
- Search bar

[SCREENSHOT: Plugin marketplace main view]

### Step 3: Select a Plugin

1. Click on a plugin to see details
2. Read the description and permissions
3. Check reviews and ratings
4. Look at the "Permissions Required" section

[SCREENSHOT: Plugin detail page]

### Step 4: Install the Plugin

1. Click the "Install" button
2. Review the permission request
3. Click "Approve" to continue
4. Wait for installation to complete

[SCREENSHOT: Plugin installation confirmation]

### Step 5: Verify Installation

After installing:
1. Open Claude Code chat
2. Ask Claude about the plugin: "What plugins do you have?"
3. Claude should list the new plugin

[SCREENSHOT: Claude listing installed plugins]

## Installing Multiple Plugins

To install several plugins at once:

1. Open the Plugin Marketplace
2. Click the checkbox on each plugin you want
3. Click "Install Selected"
4. Review all permissions together
5. Approve to install all at once

[SCREENSHOT: Bulk plugin selection]

## Managing Installed Plugins

### Viewing Installed Plugins

1. Open Plugin Manager
2. Click "Installed" tab
3. See all your active plugins

[SCREENSHOT: Installed plugins list]

### Disabling a Plugin

Sometimes you want to turn off a plugin without removing it:

1. Go to Installed plugins
2. Find the plugin
3. Toggle the "Enabled" switch off
4. Plugin stops working but stays installed

[SCREENSHOT: Plugin toggle switch]

### Removing a Plugin

To completely remove a plugin:

1. Go to Installed plugins
2. Find the plugin
3. Click the "Remove" or trash icon
4. Confirm removal

[SCREENSHOT: Plugin removal confirmation]

### Updating Plugins

Plugins may release updates:

1. Open Plugin Manager
2. Look for "Update Available" badges
3. Click "Update" on individual plugins
4. Or "Update All" for everything

[SCREENSHOT: Plugin update notification]

## Configuring Plugin Settings

Some plugins have configurable options:

1. Go to Installed plugins
2. Click the gear icon ⚙️ on the plugin
3. Adjust settings as needed
4. Save changes

[SCREENSHOT: Plugin settings panel]

### Common Settings

| Setting | Purpose |
|---------|---------|
| API Key | Connect to external services |
| Default behavior | How plugin acts by default |
| Permissions | What the plugin can access |
| Rate limits | How often plugin can run |

## Recommended Installation Order

For TLH team members, install in this order:

### Essential (Install First)
1. Web Search
2. Image Analysis
3. File Operations

### Productivity
4. Git Integration
5. Database Query
6. Documentation Generator

### Communication
7. Email Drafting
8. Slack Integration

### Specialized
9-14. Other plugins based on your role

See [Plugin Directory](/cowork-plugins/plugin-directory) for the complete list.

## Troubleshooting

### "Plugin failed to install"

**Possible causes:**
- Network connection issue
- Plugin incompatibility
- Insufficient permissions

**What to try:**
1. Check your internet connection
2. Restart VS Code
3. Try installing again
4. Check if the plugin is compatible with your VS Code version

### "Plugin not working"

**Possible causes:**
- Plugin is disabled
- Missing configuration
- Permission not granted

**What to try:**
1. Check if plugin is enabled in Plugin Manager
2. Open plugin settings and verify configuration
3. Re-approve permissions

### "Can't find Plugin Manager"

**Possible causes:**
- Claude Code extension not installed
- Extension is disabled
- Outdated extension version

**What to try:**
1. Verify Claude Code is in your extensions list
2. Enable the extension if disabled
3. Update to latest version

### "Permission denied"

**Possible causes:**
- You declined a permission request
- Organization policy restrictions

**What to try:**
1. Uninstall and reinstall the plugin
2. Accept all required permissions
3. Check with your admin about restrictions

## Security Best Practices

### Before Installing

- [ ] Read the plugin description fully
- [ ] Check who created the plugin
- [ ] Review required permissions
- [ ] Look at ratings and reviews
- [ ] Only install plugins you'll actually use

### After Installing

- [ ] Test the plugin before relying on it
- [ ] Monitor for unexpected behavior
- [ ] Keep plugins updated
- [ ] Remove plugins you no longer use

## Keeping Plugins Organized

### Periodic Review

Every month:
1. Open Plugin Manager
2. Review all installed plugins
3. Disable or remove unused ones
4. Update any with available updates

### Document Your Setup

Keep a note of which plugins you use:

```markdown
## My Installed Plugins

### Always On
- Web Search
- Image Analysis
- Git Integration

### As Needed
- Email Drafting (for client communications)
- Database Query (for data tasks)

### Disabled
- [Plugin name] - Why it's disabled
```

## Quick Reference

| Task | How |
|------|-----|
| Open Plugin Manager | `Cmd+Shift+P` → "Claude: Plugins" |
| Install plugin | Marketplace → Select → Install |
| Disable plugin | Installed → Toggle off |
| Remove plugin | Installed → Trash icon |
| Configure plugin | Installed → Gear icon |
| Update plugins | Installed → Update badges |

## Next Steps

Now that you know how to install plugins, check out the [Plugin Directory](/cowork-plugins/plugin-directory) to see which ones we recommend.
