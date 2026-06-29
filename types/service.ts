import { TablerIcon } from "@tabler/icons-react";

export interface Service {
    id: number;
    title: string;
    slug: string;
    description: string;
    shortDescription: string;
    icon: TablerIcon;
    features: string[];
    featured: boolean;
    image: string;
    cta: string;
}