import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export default function PortfolioHero() {
  return (
    <Section className="pb-12">
      <SectionHeading
        centered
        title="Our Work"
        subtitle="Explore a selection of automation, AI, CRM, and custom software projects that have helped businesses streamline operations and accelerate growth."
      />
    </Section>
  );
}