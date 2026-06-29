import { PortfolioProject } from "@/types/portfolio";

export const portfolio: PortfolioProject[] = [
    {
        id: 1,
        title: "CRM Migration & Sales Automation",
        slug: "crm-migration-sales-automation",

        description:
            "Migrated a growing real estate agency from spreadsheets to GoHighLevel with automated lead nurturing and pipeline management.",

        client: "Prime Realty",
        industry: "Real Estate",

        thumbnail: "/images/portfolio/crm-migration-thumb.jpg",
        heroImage: "/images/portfolio/crm-migration.jpg",

        technologies: [
            "GoHighLevel",
            "Zapier",
            "Twilio",
            "Google Sheets",
        ],

        challenge:
            "The client relied on manual spreadsheets and inconsistent follow-ups, causing lost leads and delayed responses.",

        solution:
            "Built a fully automated CRM system with lead capture, SMS/email follow-ups, pipeline automation, and appointment scheduling.",

        results: [
            "40% increase in lead conversion",
            "75% reduction in manual work",
            "Centralized sales pipeline",
        ],

        duration: "4 Weeks",

        featured: true,
        categories: ["CRM", "GoHighLevel", "Automation"]
    },

    {
        id: 2,
        title: "AI Customer Support Agent",
        slug: "ai-customer-support-agent",

        description:
            "Designed an AI-powered support assistant using ChatGPT that answered customer inquiries, qualified leads, and integrated with CRM workflows.",

        client: "Nova Digital",
        industry: "Marketing Agency",

        thumbnail: "/images/portfolio/ai-agent-thumb.jpg",
        heroImage: "/images/portfolio/ai-agent.jpg",

        technologies: [
            "OpenAI",
            "n8n",
            "WhatsApp API",
            "GoHighLevel",
        ],

        challenge:
            "The agency struggled with high support volume and slow response times outside business hours.",

        solution:
            "Developed an AI support agent capable of answering FAQs, booking appointments, qualifying prospects, and syncing conversations to the CRM.",

        results: [
            "24/7 customer support",
            "60% faster response times",
            "Reduced support workload by 50%",
        ],

        duration: "3 Weeks",

        featured: true,
        categories: ["CRM", "GoHighLevel", "Automation"]
    },

    {
        id: 3,
        title: "Business Workflow Automation",
        slug: "business-workflow-automation",

        description:
            "Automated finance, HR, and project management workflows by integrating multiple SaaS platforms through n8n and Make.",

        client: "Vertex Solutions",
        industry: "SaaS",

        thumbnail: "/images/portfolio/workflow-thumb.jpg",
        heroImage: "/images/portfolio/workflow.jpg",

        technologies: [
            "n8n",
            "Make",
            "Slack",
            "Airtable",
            "Notion",
        ],

        challenge:
            "Internal teams spent hours each week manually transferring data between tools, leading to delays and errors.",

        solution:
            "Implemented automated workflows for employee onboarding, project updates, notifications, reporting, and database synchronization.",

        results: [
            "80+ hours saved monthly",
            "Automated 20+ workflows",
            "Improved operational efficiency",
        ],

        duration: "5 Weeks",

        featured: true,
        categories: ["CRM", "GoHighLevel", "Automation"]
    },
];