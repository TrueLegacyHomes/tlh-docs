# Cloud Cost Management

This guide explains how to monitor our cloud spending and stay within budget. We use free tiers where possible and carefully track any paid services.

## Our Cloud Services

| Service | What It Does | Pricing Model |
|---------|--------------|---------------|
| Vercel | Hosts our websites | Free tier + usage |
| Supabase | Database & backend | Free tier + usage |
| GitHub | Code storage | Free for public repos |
| Claude Code | AI assistant | Subscription |

## Free Tier Limits

### Vercel Free Tier

**What's included:**
- 100 GB bandwidth per month
- Unlimited deployments
- Serverless functions (100 GB-hours)
- Basic analytics

**What costs extra:**
- Bandwidth over 100 GB
- Advanced analytics
- Team features
- Enterprise support

[SCREENSHOT: Vercel usage dashboard]

### Supabase Free Tier

**What's included:**
- 500 MB database storage
- 2 GB file storage
- 50,000 monthly active users
- 500,000 edge function calls

**What costs extra:**
- Storage beyond limits
- Additional compute
- Point-in-time recovery
- Priority support

[SCREENSHOT: Supabase usage statistics]

## Setting Up Spending Alerts

### Vercel Alerts

1. Go to Vercel Dashboard → Settings → Billing
2. Click "Spending Limit"
3. Set a monthly limit (recommend: $50 to start)
4. Enable email notifications
5. Save settings

[SCREENSHOT: Vercel spending limit configuration]

::: tip Start Low
Set conservative limits at first. You can always increase them later.
:::

### Supabase Alerts

1. Go to Supabase Dashboard → Organization Settings
2. Click "Billing"
3. Set up usage alerts
4. Enable notifications for 80% and 100% thresholds

[SCREENSHOT: Supabase billing alerts]

## Monthly Review Process

Every month (set a calendar reminder), review cloud costs:

### Week 1 Checklist

- [ ] Check Vercel billing dashboard for current month usage
- [ ] Check Supabase billing dashboard for current month usage
- [ ] Review any unexpected charges
- [ ] Compare to last month's costs

### What to Look For

**Vercel:**
- Bandwidth spikes (viral content? bot traffic?)
- Function execution time increases
- Any new charges

**Supabase:**
- Database size growth
- File storage increases
- Edge function usage

## Staying Within Free Tiers

### Tips for Vercel

1. **Optimize images** — Large images eat bandwidth
2. **Enable caching** — Don't re-download unchanged content
3. **Monitor traffic** — Unexpected spikes might be bots
4. **Clean up old deployments** — They don't cost money, but clutter the dashboard

### Tips for Supabase

1. **Archive old data** — Export and delete data you don't need daily access to
2. **Compress images** — Before uploading to file storage
3. **Use indexes** — Makes queries faster and more efficient
4. **Clean up test data** — Development databases accumulate junk

## When You Hit Limits

### Approaching Free Tier Limit (80%)

1. Review what's consuming resources
2. Look for optimization opportunities
3. Decide if the usage is legitimate and necessary
4. If yes, plan for paid tier or optimization

### Exceeded Free Tier

1. Don't panic — services usually have grace periods
2. Review the overage charges
3. Decide: pay the overage or downgrade usage
4. Update spending limits to prevent future surprises

## Budget Planning

### Monthly Cost Expectations

For our typical usage:

| Service | Expected Monthly Cost |
|---------|----------------------|
| Vercel | $0-20 (usually free) |
| Supabase | $0-25 (usually free) |
| GitHub | $0 (free for our needs) |
| Domain renewal | ~$15/year prorated |
| **Total** | $0-50/month |

### When to Upgrade

Consider paid tiers when:
- Consistently hitting free tier limits
- Need features only available on paid plans
- Business growth justifies the cost
- Reliability/support requirements increase

## Cost Optimization Checklist

Run through this periodically:

### Images
- [ ] Are all images optimized (compressed, correct format)?
- [ ] Are we using responsive images (different sizes for different screens)?
- [ ] Are unused images deleted?

### Data
- [ ] Is the database cleaned of test/old data?
- [ ] Are we only storing what we need?
- [ ] Are unused file uploads deleted?

### Code
- [ ] Are serverless functions efficient?
- [ ] Is caching configured correctly?
- [ ] Are there any infinite loops or memory leaks?

### Traffic
- [ ] Is traffic legitimate (not bots)?
- [ ] Are we blocking unnecessary crawlers?
- [ ] Is rate limiting in place for APIs?

## Emergency: Unexpected Bill

If you see a surprisingly high charge:

1. **Screenshot the bill** — Document what you're seeing
2. **Check usage graphs** — Identify what caused the spike
3. **Check for anomalies** — Was there unusual traffic or activity?
4. **Contact support** — Both Vercel and Supabase have good support teams
5. **Notify the team** — Others should know about spending issues

::: warning Act Quickly
Cloud bills can grow fast. If something seems wrong, investigate immediately.
:::

## Quick Reference

| Task | Where |
|------|-------|
| Check Vercel usage | Vercel Dashboard → Settings → Billing |
| Check Supabase usage | Supabase Dashboard → Organization → Billing |
| Set spending limits | Same billing pages |
| View invoices | Billing → Invoices |

| Limit | Free Tier Amount |
|-------|------------------|
| Vercel bandwidth | 100 GB/month |
| Vercel functions | 100 GB-hours/month |
| Supabase storage | 500 MB |
| Supabase file storage | 2 GB |

## Summary

1. **Know the free tier limits** — Understand what's included
2. **Set up alerts** — Don't be surprised by charges
3. **Review monthly** — Regular check-ins prevent problems
4. **Optimize proactively** — Clean up unused resources
5. **Act on anomalies** — Investigate unexpected usage quickly

Next: Learn about [Environment Management](/workflow-guides/environment-management) →
