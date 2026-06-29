import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import PortfolioCard from "@/components/portfolio/PortfolioCard";

import { portfolio } from "@/data/portfolio";

export default function FeaturedPortfolio() {
  return (
    <Section>
      <SectionHeading
        centered
        title="Featured Work"
        // subtitle="Real automation projects delivering measurable business results."
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
        {portfolio
          .filter((project) => project.featured)
          .map((project) => (
            <PortfolioCard
              key={project.id}
              project={project}
            />
          ))}
      </div>
    </Section>
  );
}