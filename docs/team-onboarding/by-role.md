# Onboarding by Role

Different roles need different knowledge. Find your role below and follow the recommended learning path.

## Developer

Full-stack or specialized developers working with code.

### Your Focus

- All workflow guides
- All plugins
- Deep understanding of environments
- Code review and quality

### Learning Path

**Week 1:**
1. ✅ [Prerequisites](/getting-started/prerequisites)
2. ✅ [First Day Setup](/getting-started/first-day-setup)
3. ✅ [Git Workflow](/workflow-guides/git-workflow)
4. ✅ [Environment Management](/workflow-guides/environment-management)
5. ✅ [Permission Allowlisting](/workflow-guides/permission-allowlisting)

**Week 2:**
1. ✅ [Database Management](/workflow-guides/database-management)
2. ✅ [Testing & QA](/workflow-guides/testing-qa)
3. ✅ [CLAUDE.md Authoring](/workflow-guides/claude-md-authoring)
4. ✅ [Context Management](/workflow-guides/context-management)
5. ✅ [Plugin Directory](/cowork-plugins/plugin-directory)

**Week 3:**
1. ✅ [Starter Template](/starter-template/)
2. ✅ [Cloud Cost Management](/workflow-guides/cloud-cost-management)
3. ✅ Practice: Complete a feature end-to-end

### Essential Plugins

Install these first:
- Web Search
- Image Analysis
- Git Integration
- Database Query
- Test Generator

### Day-to-Day Tasks

| Task | Guide |
|------|-------|
| Build new features | [Git Workflow](/workflow-guides/git-workflow) |
| Fix bugs | [Testing & QA](/workflow-guides/testing-qa) |
| Database changes | [Database Management](/workflow-guides/database-management) |
| New project setup | [Starter Template](/starter-template/) |

---

## Designer

UI/UX designers working on interfaces and visual design.

### Your Focus

- Visual testing and QA
- Design-to-code handoff
- Brand consistency
- Review and feedback

### Learning Path

**Week 1:**
1. ✅ [Prerequisites](/getting-started/prerequisites)
2. ✅ [First Day Setup](/getting-started/first-day-setup)
3. ✅ [Quick Reference](/getting-started/quick-reference) (brand colors!)
4. ✅ [Testing & QA](/workflow-guides/testing-qa) — visual testing section

**Week 2:**
1. ✅ [Git Workflow](/workflow-guides/git-workflow) — understand the basics
2. ✅ [Environment Management](/workflow-guides/environment-management) — use staging for reviews

### Essential Plugins

- Image Analysis (review implementations)
- Design Tools (Figma integration)

### Day-to-Day Tasks

| Task | Guide |
|------|-------|
| Review implementations | [Testing & QA](/workflow-guides/testing-qa) |
| Check staging | [Environment Management](/workflow-guides/environment-management) |
| Report visual bugs | [Testing & QA](/workflow-guides/testing-qa) |

### Design-Specific Tips

- Use staging URLs for reviews, not local environments
- Compare designs against implementation at multiple screen sizes
- Document spacing, colors, and typography in Figma
- Use brand colors from [Quick Reference](/getting-started/quick-reference)

---

## Project Manager

PMs coordinating work and tracking progress.

### Your Focus

- Understanding workflows at a high level
- Knowing where work happens
- Tracking deployments and releases
- Coordinating between roles

### Learning Path

**Week 1:**
1. ✅ [Prerequisites](/getting-started/prerequisites) — accounts only, not coding tools
2. ✅ [Quick Reference](/getting-started/quick-reference)
3. ✅ [Git Workflow](/workflow-guides/git-workflow) — overview
4. ✅ [Testing & QA](/workflow-guides/testing-qa) — go/no-go process

**Week 2:**
1. ✅ [Environment Management](/workflow-guides/environment-management)
2. ✅ [Cloud Cost Management](/workflow-guides/cloud-cost-management)
3. ✅ Read overviews of other workflow guides

### You Don't Need

- Plugin installation (unless you want to try things)
- Database management details
- CLAUDE.md authoring

### Day-to-Day Tasks

| Task | Where |
|------|-------|
| Check deployment status | Vercel dashboard |
| Review staging builds | Staging URLs |
| Track work | GitHub issues/PRs |
| Monitor costs | Cloud dashboards |

### PM-Specific Tips

- Vercel dashboard shows all deployments
- Staging URLs let you review before production
- GitHub shows who worked on what and when
- Ask developers to explain blockers in plain language

---

## Content Creator

Writers, marketers, and content managers.

### Your Focus

- Understanding how content gets published
- Making content updates safely
- Basic Git concepts
- Using staging to preview

### Learning Path

**Week 1:**
1. ✅ [Prerequisites](/getting-started/prerequisites)
2. ✅ [First Day Setup](/getting-started/first-day-setup)
3. ✅ [Git Workflow](/workflow-guides/git-workflow) — basics only
4. ✅ [Testing & QA](/workflow-guides/testing-qa) — visual/content testing

**Week 2:**
1. ✅ [Environment Management](/workflow-guides/environment-management)
2. ✅ Practice: Make a content change with help

### You Don't Need

- Database management
- Plugin installation
- CLAUDE.md authoring
- Permission allowlisting details

### Day-to-Day Tasks

| Task | Process |
|------|---------|
| Update text | Ask Claude to edit the file |
| Add images | Add to `public/` folder |
| Preview changes | Check staging URL |
| Request deploy | Ask developer when ready |

### Content-Specific Tips

- Content usually lives in markdown files or a CMS
- Always preview on staging before production
- Keep images optimized (compressed, right format)
- Maintain consistent voice and style

---

## QA/Tester

Quality assurance and testing specialists.

### Your Focus

- Understanding all environments
- Test planning and execution
- Bug reporting
- Go/no-go decisions

### Learning Path

**Week 1:**
1. ✅ [Prerequisites](/getting-started/prerequisites)
2. ✅ [First Day Setup](/getting-started/first-day-setup)
3. ✅ [Testing & QA](/workflow-guides/testing-qa) — your main guide
4. ✅ [Environment Management](/workflow-guides/environment-management)

**Week 2:**
1. ✅ [Git Workflow](/workflow-guides/git-workflow) — understand the flow
2. ✅ [Database Management](/workflow-guides/database-management) — checking data
3. ✅ Practice: Full QA cycle on a feature

### Essential Plugins

- Image Analysis (for visual comparison)
- Database Query (for data verification)

### Day-to-Day Tasks

| Task | Guide |
|------|-------|
| Test new features | [Testing & QA](/workflow-guides/testing-qa) |
| Verify fixes | [Environment Management](/workflow-guides/environment-management) |
| Check data | [Database Management](/workflow-guides/database-management) |
| Go/no-go decision | [Testing & QA](/workflow-guides/testing-qa) |

### QA-Specific Tips

- Test on staging, not production
- Document reproduction steps for bugs
- Use the testing checklist for every feature
- Screenshots and recordings help developers

---

## Quick Reference by Role

| Role | Essential Guides | Plugins Needed |
|------|-----------------|----------------|
| Developer | All guides | All plugins |
| Designer | Testing, Environments | Image Analysis, Design Tools |
| PM | Git, Testing, Costs | None (optional) |
| Content | Git basics, Testing | None |
| QA | Testing, Environments, Database | Image Analysis, Database |

## Finding Your Buddy

Each new team member gets an onboarding buddy:
- Same or similar role
- Available for questions
- Paired for first week

Ask your manager who your buddy is if you don't know.
