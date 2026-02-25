import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "True Legacy Homes Docs",
  description: "AI Infrastructure & Developer Guides",
  base: '/tlh-docs/',
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/' },
      { text: 'Workflow Guides', link: '/workflow-guides/' },
      { text: 'Plugins', link: '/cowork-plugins/' }
    ],

    sidebar: {
      '/getting-started/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Overview', link: '/getting-started/' },
            { text: 'Prerequisites', link: '/getting-started/prerequisites' },
            { text: 'First Day Setup', link: '/getting-started/first-day-setup' },
            { text: 'Quick Reference', link: '/getting-started/quick-reference' }
          ]
        }
      ],
      '/workflow-guides/': [
        {
          text: 'Workflow Guides',
          items: [
            { text: 'Overview', link: '/workflow-guides/' },
            { text: 'Git Workflow', link: '/workflow-guides/git-workflow' },
            { text: 'Database Management', link: '/workflow-guides/database-management' },
            { text: 'Testing & QA', link: '/workflow-guides/testing-qa' },
            { text: 'Cloud Cost Management', link: '/workflow-guides/cloud-cost-management' },
            { text: 'Environment Management', link: '/workflow-guides/environment-management' },
            { text: 'CLAUDE.md Authoring', link: '/workflow-guides/claude-md-authoring' },
            { text: 'Permission Allowlisting', link: '/workflow-guides/permission-allowlisting' },
            { text: 'Context Management', link: '/workflow-guides/context-management' }
          ]
        }
      ],
      '/cowork-plugins/': [
        {
          text: 'Cowork Plugins',
          items: [
            { text: 'Overview', link: '/cowork-plugins/' },
            { text: 'Installation', link: '/cowork-plugins/installation' },
            { text: 'Plugin Directory', link: '/cowork-plugins/plugin-directory' }
          ]
        }
      ],
      '/starter-template/': [
        {
          text: 'Starter Template',
          items: [
            { text: 'Overview', link: '/starter-template/' },
            { text: 'Quick Start', link: '/starter-template/quick-start' },
            { text: 'Deployment', link: '/starter-template/deployment' }
          ]
        }
      ],
      '/team-onboarding/': [
        {
          text: 'Team Onboarding',
          items: [
            { text: 'Overview', link: '/team-onboarding/' },
            { text: 'By Role', link: '/team-onboarding/by-role' },
            { text: 'FAQ', link: '/team-onboarding/faq' }
          ]
        }
      ]
    },

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TrueLegacyHomes/tlh-docs' }
    ],

    footer: {
      message: 'True Legacy Homes IT & AI Documentation',
      copyright: '© 2024 True Legacy Homes. All rights reserved.'
    }
  }
})
