import Section from "@/components/ui/Section";

import PortfolioCard from "./PortfolioCard";

import { portfolio } from "@/data/portfolio";

export default function PortfolioGrid() {
  return (
    <Section className="pt-0">
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {portfolio.map((project) => (
          <PortfolioCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </Section>
  );
}