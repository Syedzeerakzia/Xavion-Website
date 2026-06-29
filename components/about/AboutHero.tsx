import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutHero() {
  return (
    <Section className="pb-10">
      <SectionHeading
        centered
        title="About Xavion Tech"
        subtitle="Helping businesses automate, scale, and innovate through intelligent software, AI, and workflow automation."
      />
    </Section>
  );
}