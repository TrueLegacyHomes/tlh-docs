# Database Management

This guide covers how we work with our database using Supabase. You'll learn how to browse data, make changes safely, create backups, and recover from mistakes.

## What is Supabase?

Supabase is where all our data lives — users, content, settings, everything. Think of it as a giant, organized spreadsheet that our websites read from and write to.

**Key features:**
- Visual interface (no code needed to browse data)
- Automatic backups
- Built-in security
- Works with Claude for code changes

## Browsing Data

### Using the Dashboard

1. Go to [supabase.com/dashboard](https://supabase.com/dashboard)
2. Select the True Legacy Homes project
3. Click "Table Editor" in the left sidebar
4. Choose a table to view its data

[SCREENSHOT: Supabase Table Editor showing a data table]

### Understanding Tables

Data is organized into **tables** (like sheets in a spreadsheet):

| Table | What It Contains |
|-------|-----------------|
| `users` | User accounts and profiles |
| `properties` | Real estate listings |
| `inquiries` | Contact form submissions |
| `settings` | Site configuration |

::: tip Explore Safely
Browsing data is safe — you can't break anything by looking. Just be careful with edits.
:::

## Making Database Changes

### Small Changes (Manual)

For quick fixes like correcting a typo:

1. Go to Table Editor
2. Find the row you need to change
3. Click on the cell
4. Edit the value
5. Press Enter to save

[SCREENSHOT: Editing a cell in Supabase Table Editor]

### Bigger Changes (Migrations)

For structural changes (new tables, new columns), we use **migrations**. Migrations are code files that describe database changes.

**Why migrations?**
- They're trackable (we can see what changed and when)
- They're reversible (we can undo them)
- They work across environments (dev → staging → production)

**How to create a migration:**

1. Ask Claude: "Create a migration to add a phone_number column to the users table"
2. Claude creates a migration file in `/supabase/migrations/`
3. Review the migration
4. Ask Claude: "Run the migration"

[SCREENSHOT: Migration file in VS Code]

### Running Migrations

**On your local database:**
```bash
supabase db push
```

**Claude can do this for you:**
Just say "Run the pending migrations" or "Apply database changes"

## Backups

### Automatic Backups

Supabase automatically backs up your data:
- **Daily backups** — Kept for 7 days (free tier) or 30 days (paid)
- **Point-in-time recovery** — Restore to any moment (paid plans)

### Manual Backups

Before making risky changes, create a manual backup:

1. Go to Supabase Dashboard
2. Click "Settings" → "Database"
3. Scroll to "Backups"
4. Click "Create backup"

[SCREENSHOT: Supabase backup settings page]

### Exporting Data

To download data as a file:

1. Go to Table Editor
2. Select the table
3. Click "Export" (top right)
4. Choose CSV or JSON format

## Rollbacks

### Undoing a Migration

If a migration caused problems:

1. Tell Claude: "Rollback the last migration"
2. Claude runs the down migration
3. The database returns to its previous state

### Restoring from Backup

For bigger problems:

1. Go to Supabase Dashboard → Settings → Database → Backups
2. Find the backup from before the problem
3. Click "Restore"
4. Confirm the restoration

::: warning Restoring Replaces Current Data
A restore will overwrite current data with the backup. Make sure this is what you want.
:::

## Best Practices

### Before Making Changes

1. **Back up first** — Always create a backup before structural changes
2. **Test locally** — Run migrations on your local database first
3. **Review carefully** — Read migration files before running them
4. **Communicate** — Let the team know about database changes

### Writing Migrations

✅ **Do:**
- Use descriptive names: `add_phone_to_users.sql`
- Include both "up" (apply) and "down" (undo) migrations
- Test on local database first

❌ **Don't:**
- Modify existing migrations (create new ones instead)
- Delete data without backing up first
- Run migrations directly on production without testing

## Common Tasks

### Add a New Column

Tell Claude: "Add a column called `status` to the `properties` table. It should be a text field with default value 'active'."

### Create a New Table

Tell Claude: "Create a new table called `reviews` with columns for id, user_id, property_id, rating, and comment."

### Delete Old Data

::: danger Be Careful
Deleting data is permanent. Always backup first.
:::

Tell Claude: "Delete all rows in the `inquiries` table older than 1 year. Create a backup first."

## Troubleshooting

### "Migration failed"

**Possible causes:**
- Syntax error in the SQL
- Conflicting column names
- Missing dependencies

**What to do:**
1. Read the error message carefully
2. Ask Claude: "This migration failed. Here's the error: [paste error]. How do I fix it?"

### "Can't connect to database"

**Possible causes:**
- Wrong environment variables
- Network issues
- Database is paused (free tier)

**What to do:**
1. Check your `.env.local` file has correct Supabase credentials
2. Go to Supabase Dashboard and check the project status
3. If paused, click "Resume project"

### "Data looks wrong"

**What to do:**
1. Check the last few migrations — was something changed recently?
2. Look at the Git history for database-related commits
3. If needed, restore from a recent backup

## Quick Reference

| Task | Command/Action |
|------|----------------|
| View data | Supabase Dashboard → Table Editor |
| Create migration | Ask Claude to create one |
| Run migrations | `supabase db push` or ask Claude |
| Create backup | Dashboard → Settings → Database → Backups |
| Restore backup | Dashboard → Settings → Database → Backups → Restore |
| Export data | Table Editor → Export |

Next: Learn about [Testing & QA](/workflow-guides/testing-qa) →
