import { PortfolioProject } from "@/types/portfolio";

export const portfolio: PortfolioProject[] = [
  {
    id: 1,
    title: "HubSpot to GoHighLevel Migration",
    slug: "hubspot-to-gohighlevel-migration",

    description:
      "Migrated an e-commerce company from HubSpot to GoHighLevel while preserving existing automations and significantly reducing CRM costs.",

    client: "Confidential",
    industry: "E-Commerce",

    thumbnail: "/images/portfolio/hubspot-ghl-thumb.jpg",
    heroImage: "/images/portfolio/hubspot-ghl.jpg",

    technologies: [
      "GoHighLevel",
      "HubSpot",
      "Zapier",
      "Twilio",
    ],

    challenge:
      "The client faced high CRM subscription costs and wanted to migrate to GoHighLevel without disrupting their existing sales and marketing automations.",

    solution:
      "Planned and executed a complete CRM migration, recreated workflows, migrated contacts and pipelines, integrated SMS and email automation, and thoroughly tested every automation before launch.",

    results: [
      "80% reduction in CRM costs",
      "100% automation continuity",
      "Successful zero-downtime migration",
    ],

    duration: "4 Weeks",

    featured: true,

    categories: [
      "GHL",
      "CRM Migration",
      "CRM",
    ],
  },

  {
    id: 2,
    title: "Lead Capture & WhatsApp AI",
    slug: "lead-capture-whatsapp-ai",

    description:
      "Built an intelligent lead qualification system connecting web forms, n8n, Airtable, WhatsApp, and AI for automated conversations.",

    client: "Marketing Agency",
    industry: "Marketing",

    thumbnail: "/images/portfolio/lead-ai-thumb.jpg",
    heroImage: "/images/portfolio/lead-ai.jpg",

    technologies: [
      "n8n",
      "OpenAI",
      "WhatsApp API",
      "Airtable",
    ],

    challenge:
      "The client needed instant lead engagement and multilingual conversations without increasing support staff.",

    solution:
      "Created an automation pipeline where website forms trigger n8n workflows, store data in Airtable, and launch an AI-powered WhatsApp assistant capable of qualifying leads in multiple languages.",

    results: [
      "Instant lead qualification",
      "Multi-language AI conversations",
      "Automated CRM-ready lead collection",
    ],

    duration: "3 Weeks",

    featured: true,

    categories: [
      "n8n",
      "AI",
      "WhatsApp",
    ],
  },

  {
    id: 3,
    title: "Multi-Step Lead Nurture Workflow",
    slug: "multi-step-lead-nurture-workflow",

    description:
      "Designed a 12-step GoHighLevel nurture sequence combining email and SMS automation to improve lead conversion.",

    client: "Real Estate Agency",
    industry: "Real Estate",

    thumbnail: "/images/portfolio/nurture-workflow-thumb.jpg",
    heroImage: "/images/portfolio/nurture-workflow.jpg",

    technologies: [
      "GoHighLevel",
      "Twilio",
      "Mailgun",
      "Automation",
    ],

    challenge:
      "Leads frequently went cold due to inconsistent follow-ups and manual outreach processes.",

    solution:
      "Implemented a fully automated 12-step nurture campaign with personalized email, SMS reminders, behavior-based triggers, and appointment booking automation.",

    results: [
      "40% increase in conversions",
      "Automated email & SMS follow-ups",
      "Consistent lead nurturing at scale",
    ],

    duration: "3 Weeks",

    featured: true,

    categories: [
      "GHL",
      "Automation",
      "Nurture",
    ],
  },
];