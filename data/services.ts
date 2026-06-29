import {
  IconBrain,
  IconChartBar,
  IconCode,
  IconDatabaseCog,
  IconHierarchy3,
  IconUsers,
} from "@tabler/icons-react";

import { Service } from "@/types/service";

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
      { title: "Pipeline Automation" },
      { title: "Lead Management" },
      { title: "Follow-up Campaigns" },
      { title: "Multi-brand CRM" },
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
      { title: "n8n Workflows" },
      { title: "Make Integrations" },
      { title: "Zapier Automation" },
      { title: "Custom API Connections" },
    ],

    featured: true,

    cta: "Learn More",
  },

  {
    id: 3,
    title: "AI Integration",
    slug: "ai-integration",

    description:
      "Bring AI into your business with custom ChatGPT, Claude, and AI agents that automate customer support, content generation, and internal operations.",

    shortDescription:
      "Custom AI solutions powered by modern LLMs.",

    icon: IconBrain,

    image: "/images/services/ai.jpg",

    features: [
      { title: "AI Chatbots" },
      { title: "Custom AI Agents" },
      { title: "LLM Integrations" },
      { title: "Knowledge Base Assistants" },
    ],

    featured: true,

    cta: "Learn More",
  },

  {
    id: 4,
    title: "Custom Development",
    slug: "custom-development",

    description:
      "Build custom web applications, APIs, dashboards, and enterprise solutions using modern technologies including Next.js, Node.js, PHP, and WordPress.",

    shortDescription:
      "Tailored software engineered for your business.",

    icon: IconCode,

    image: "/images/services/development.jpg",

    features: [
      { title: "Next.js Applications" },
      { title: "Node.js APIs" },
      { title: "WordPress Development" },
      { title: "System Integrations" },
    ],

    featured: false,

    cta: "Learn More",
  },

  {
    id: 5,
    title: "Data & Analytics",
    slug: "data-analytics",

    description:
      "Transform raw business data into actionable insights with custom dashboards, reporting systems, and automated data pipelines.",

    shortDescription:
      "Business intelligence and data visualization.",

    icon: IconChartBar,

    image: "/images/services/analytics.jpg",

    features: [
      { title: "Custom Dashboards" },
      { title: "Automated Reporting" },
      { title: "Data Pipelines" },
      { title: "Business Intelligence" },
    ],

    featured: false,

    cta: "Learn More",
  },

  {
    id: 6,
    title: "Consulting",
    slug: "consulting",

    description:
      "Partner with our experts to design automation strategies, optimize workflows, train your team, and successfully implement scalable technology solutions.",

    shortDescription:
      "Strategy, implementation, and technical guidance.",

    icon: IconUsers,

    image: "/images/services/consulting.jpg",

    features: [
      { title: "Automation Strategy" },
      { title: "Workflow Audits" },
      { title: "Implementation Planning" },
      { title: "Team Training" },
    ],

    featured: false,

    cta: "Learn More",
  },
];