export interface PortfolioProject {
  id: number;

  slug: string;

  title: string;

  description: string;

  client: string;

  industry: string;

  thumbnail: string;

  heroImage: string;

  technologies: string[];

  challenge: string;

  solution: string;

  results: string[];

  duration: string;

  featured: boolean;

  categories: ["CRM", "GoHighLevel", "Automation"]
}