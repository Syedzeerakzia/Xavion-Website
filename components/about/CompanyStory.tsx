import Image from "next/image";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function CompanyStory() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our Story
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Building technology that helps businesses scale.
            </h2>

            <p className="mt-6 text-gray-400">
              Xavion Tech was founded with a simple mission: eliminate repetitive
              work through automation, AI, and modern software engineering.
            </p>

            <p className="mt-4 text-gray-400">
              We partner with agencies, startups, and growing businesses to
              design CRM systems, workflow automations, AI assistants, and
              custom applications that improve efficiency and create measurable
              results.
            </p>

            <Button
              href="/contact"
              className="mt-8"
            >
              Work With Us
            </Button>
          </div>

          <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/about/company-story.jpg"
              alt="Xavion Tech"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}