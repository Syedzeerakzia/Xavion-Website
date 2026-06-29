export interface PortfolioProject {
  id: number;

  title: string;
  slug: string;

  description: string;

  client: string;
  industry: string;

  thumbnail: string;
  heroImage: string;

  technologies: string[];

  categories: string[];

  challenge: string;

  solution: string;

  results: string[];

  duration: string;

  featured: boolean;
}