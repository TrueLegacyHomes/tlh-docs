# Plugin Directory

A complete list of the 14 plugins we use at True Legacy Homes, organized by category.

## Essential Plugins

These are required for all team members.

### 1. 🔍 Web Search

**What it does:** Allows Claude to search the internet for current information, documentation, and answers.

**When to use:**
- Looking up documentation
- Finding code examples
- Checking current best practices
- Researching unfamiliar topics

**Example:**
```
"Search for how to implement pagination in Next.js 14"
```

**Permissions:** Network access (read-only)

---

### 2. 🖼️ Image Analysis

**What it does:** Claude can view and understand images, screenshots, and designs.

**When to use:**
- Analyzing design mockups
- Understanding error screenshots
- Comparing visual differences
- Reading text from images

**Example:**
```
"Look at this screenshot and tell me what the error means"
[paste image]
```

**Permissions:** Read images from clipboard/files

---

### 3. 📁 File Operations

**What it does:** Enhanced file creation, modification, and organization capabilities.

**When to use:**
- Creating multiple files at once
- Reorganizing project structure
- Batch file operations
- Template-based file generation

**Example:**
```
"Create a new component with its test file and story file"
```

**Permissions:** Read/write files in project directory

---

## Development Plugins

For coding and technical work.

### 4. 🌿 Git Integration

**What it does:** Streamlined Git operations with better commit messages and conflict resolution.

**When to use:**
- Committing changes
- Viewing history
- Understanding diffs
- Resolving conflicts

**Example:**
```
"Commit these changes with a descriptive message"
```

**Permissions:** Execute git commands

---

### 5. 🗄️ Database Query

**What it does:** Direct querying and interaction with Supabase databases.

**When to use:**
- Checking data
- Running queries
- Understanding schema
- Debugging data issues

**Example:**
```
"Show me all users who signed up in the last 7 days"
```

**Permissions:** Network access, database credentials

---

### 6. 🧪 Test Generator

**What it does:** Automatically generates unit tests, integration tests, and test data.

**When to use:**
- Adding tests to new code
- Improving test coverage
- Creating test fixtures
- Mocking data

**Example:**
```
"Generate tests for the UserProfile component"
```

**Permissions:** Read/write files

---

### 7. 📚 Documentation Generator

**What it does:** Creates documentation from code, including README files, API docs, and code comments.

**When to use:**
- Documenting new features
- Creating API references
- Generating READMEs
- Adding code comments

**Example:**
```
"Generate documentation for all functions in lib/api.ts"
```

**Permissions:** Read/write files

---

## Communication Plugins

For interacting with people and services.

### 8. 📧 Email Drafting

**What it does:** Helps compose professional emails based on context and intent.

**When to use:**
- Writing client emails
- Responding to inquiries
- Drafting announcements
- Following up on conversations

**Example:**
```
"Draft an email to the client about the project delay"
```

**Permissions:** None (just generates text)

---

### 9. 💬 Slack Integration

**What it does:** Sends messages and manages Slack communications.

**When to use:**
- Posting updates
- Notifying team members
- Searching message history

**Example:**
```
"Send a message to #dev-updates about the deployment"
```

**Permissions:** Slack API access

---

## Productivity Plugins

For efficiency and workflow improvement.

### 10. 📋 Task Management

**What it does:** Creates, tracks, and organizes tasks and to-do items.

**When to use:**
- Breaking down work
- Tracking progress
- Creating checklists
- Managing priorities

**Example:**
```
"Create a task list for implementing the new feature"
```

**Permissions:** Read/write task files

---

### 11. 📅 Calendar Integration

**What it does:** Checks and manages calendar events and scheduling.

**When to use:**
- Checking availability
- Scheduling meetings
- Setting reminders
- Finding open time slots

**Example:**
```
"What meetings do I have tomorrow?"
```

**Permissions:** Calendar API access

---

### 12. 📊 Analytics Viewer

**What it does:** Pulls and displays analytics data from Vercel, Google Analytics, etc.

**When to use:**
- Checking traffic
- Monitoring performance
- Reviewing user behavior
- Tracking deployments

**Example:**
```
"Show me yesterday's traffic to the homepage"
```

**Permissions:** Analytics API access

---

## Specialized Plugins

For specific use cases.

### 13. 🎨 Design Tools

**What it does:** Integration with design tools like Figma for extracting specs and assets.

**When to use:**
- Getting design specifications
- Extracting colors and fonts
- Downloading assets
- Comparing design to implementation

**Example:**
```
"What are the spacing values in this Figma component?"
```

**Permissions:** Figma API access

---

### 14. 🔐 Secrets Manager

**What it does:** Safely manages environment variables and secrets across environments.

**When to use:**
- Updating environment variables
- Rotating secrets
- Comparing environments
- Deploying new credentials

**Example:**
```
"Add this API key to the staging environment"
```

**Permissions:** Environment variable access, encrypted storage

---

## Plugin Summary Table

| # | Plugin | Category | Essential? |
|---|--------|----------|------------|
| 1 | Web Search | Essential | ✅ Yes |
| 2 | Image Analysis | Essential | ✅ Yes |
| 3 | File Operations | Essential | ✅ Yes |
| 4 | Git Integration | Development | ✅ Yes |
| 5 | Database Query | Development | ✅ Yes |
| 6 | Test Generator | Development | Recommended |
| 7 | Documentation Generator | Development | Recommended |
| 8 | Email Drafting | Communication | Recommended |
| 9 | Slack Integration | Communication | Optional |
| 10 | Task Management | Productivity | Optional |
| 11 | Calendar Integration | Productivity | Optional |
| 12 | Analytics Viewer | Productivity | Optional |
| 13 | Design Tools | Specialized | Role-based |
| 14 | Secrets Manager | Specialized | Admin only |

## Installation Priority

### Install First (Day 1)
1. Web Search
2. Image Analysis
3. File Operations
4. Git Integration
5. Database Query

### Install Second (Week 1)
6. Test Generator
7. Documentation Generator
8. Email Drafting

### Install As Needed
9. Slack Integration
10. Task Management
11. Calendar Integration
12. Analytics Viewer
13. Design Tools
14. Secrets Manager

## Requesting New Plugins

Need a plugin we don't have? Here's how to request it:

1. Check if it exists in the marketplace
2. Review its permissions and security
3. Post in #dev-requests on Slack with:
   - Plugin name
   - What it does
   - Why you need it
4. Wait for approval before installing

::: tip Keep It Lean
More plugins = more complexity. Only install what you actually use regularly.
:::

## Related Documentation

- [Plugin Installation Guide](/cowork-plugins/installation) — How to install these plugins
- [Permission Allowlisting](/workflow-guides/permission-allowlisting) — Managing plugin permissions
