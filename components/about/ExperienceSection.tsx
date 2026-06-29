import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import { statistics } from "@/data/statistics";

export default function ExperienceSection() {
  return (
    <Section className="bg-navy/30">
      <Container>
        <SectionHeading
          centered
          title="Experience That Delivers Results"
          subtitle="Our numbers reflect the value we create for clients."
        />

        <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {statistics.map((stat) => (
            <Card
              key={stat.id}
              className="text-center"
            >
              <h3 className="text-5xl font-bold text-primary">
                {stat.value}
              </h3>

              <p className="mt-4 text-gray-400">
                {stat.label}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}