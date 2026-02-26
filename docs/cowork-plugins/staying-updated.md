# Staying Updated

How to know when skills are added or updated.

## Option 1: Watch the Repository (Recommended)

Get email notifications whenever plugins change.

### Setup (One-Time)

1. Go to: [github.com/TrueLegacyHomes/tlh-cowork-plugins](https://github.com/TrueLegacyHomes/tlh-cowork-plugins)

2. Click the **Watch** button (top right)

3. Select **"All Activity"** or **"Releases only"**

[SCREENSHOT: GitHub Watch button]

4. Done! GitHub will email you when changes happen.

### When You Get a Notification

Run this in Claude Code to get the latest:

```
/plugin marketplace refresh TrueLegacyHomes/tlh-cowork-plugins
```

---

## Option 2: Check the Changelog

We maintain a changelog of all updates:

👉 [View Changelog](/cowork-plugins/changelog)

Check it periodically to see what's new.

---

## Option 3: Manual Refresh

If you want to make sure you have the latest, run:

```
/plugin marketplace refresh TrueLegacyHomes/tlh-cowork-plugins
```

You can do this anytime — it only takes a few seconds.

---

## When Do Skills Auto-Update?

Skills automatically refresh when you:
- **Start a new Claude Code session**
- **Run the refresh command** (above)

::: tip
If you're in the middle of a session and want the latest updates, use the refresh command. Otherwise, just close and reopen Claude Code.
:::

---

## How to Know Your Current Version

Ask Claude:
> "What version of TLH plugins am I running?"

Or check the marketplace.json in the repo for the latest versions.

---

## For Admins: Announcing Updates

When you update a skill:

1. Make your changes and push to `main`
2. Go to the repo → **Releases** → **Create new release**
3. Tag it with a version (e.g., `v1.1.0`)
4. Write a brief description of what changed
5. Publish

Everyone watching the repo gets notified automatically.

[SCREENSHOT: GitHub Release creation]

---

## Questions?

- Check the [FAQ](/team-onboarding/faq)
- Ask in the team Slack/Teams channel
