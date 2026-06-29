import { TablerIcon } from "@tabler/icons-react";

export interface ServiceFeature {
  title: string;
  description?: string;
}

export interface Service {
    id: number;
    title: string;
    slug: string;
    description: string;
    shortDescription: string;
    icon: TablerIcon;
    features: ServiceFeature[];
    featured: boolean;
    image: string;
    cta: string;
}