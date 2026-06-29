import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import { values } from "@/data/values";

export default function CoreValues() {
  return (
    <Section>
      <Container>
        <SectionHeading
          centered
          title="Our Core Values"
          subtitle="Everything we build is guided by these principles."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <Card
                key={value.id}
                className="text-center transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                  <Icon
                    size={32}
                    className="text-primary"
                  />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {value.title}
                </h3>

                <p className="mt-4 text-gray-400">
                  {value.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}