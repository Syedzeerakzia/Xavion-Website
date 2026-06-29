import { Service } from "@/types/service";
import { IconBrain, IconDatabaseCog, IconHierarchy3 } from "@tabler/icons-react";

export const services: Service[] = [
    {
        id: 1,
        title: "CRM Automation",
        slug: "crm-automation",

        description:
            "Streamline customer relationships with intelligent CRM solutions built on GoHighLevel and HubSpot. From lead capture to follow-ups and pipeline management, we automate every step of your sales process.",

        shortDescription:
            "GoHighLevel, HubSpot, and CRM automation solutions.",

        icon: IconDatabaseCog,

        image: "/images/services/crm.jpg",

        features: [
            "Pipeline Automation",
            "Lead Management",
            "Follow-up Campaigns",
            "Multi-brand CRM",
        ],
        featured: true,
        cta: "Learn More",
    },

    {
        id: 2,
        title: "Workflow Automation",
        slug: "workflow-automation",

        description:
            "Eliminate repetitive tasks by connecting your applications with intelligent workflows. We build scalable automations using n8n, Make, Zapier, and custom APIs.",

        shortDescription:
            "Connect apps and automate business processes.",

        icon: IconHierarchy3,

        image: "/images/services/workflow.jpg",

        features: [
            "n8n Workflows",
            "Make Integrations",
            "Zapier Automation",
            "Custom API Connections",
        ],
        featured: true,
        cta: "Learn More",
    },

    {
        id: 3,
        title: "AI Integration",
        slug: "ai-integration",

        description:
            "Bring AI into your business with custom ChatGPT and Claude integrations, AI agents, and intelligent assistants that automate customer support, content generation, and internal operations.",

        shortDescription:
            "Custom AI solutions powered by modern LLMs.",

        icon: IconBrain,

        image: "/images/services/ai.jpg",

        features: [
            "AI Chatbots",
            "Custom AI Agents",
            "LLM Integrations",
            "Knowledge Base Assistants",
        ],
        featured: true,
        cta: "Learn More",
    },
];