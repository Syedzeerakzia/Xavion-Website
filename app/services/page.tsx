import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import ServiceSection from "@/components/services/ServiceSection";

import { services } from "@/data/services";
import Button from "@/components/ui/Button";

export default function ServicesPage() {
  return (
    <>
      <Section>
        <SectionHeading
          centered
          title="Our Services"
          subtitle="From CRM automation to AI-powered workflows, we build solutions that help businesses scale smarter."
        />
      </Section>

      {services.map((service, index) => (
        <ServiceSection
          key={service.id}
          service={service}
          reverse={index % 2 !== 0}
        />
      ))}

      <Section className="text-center">
        <h2 className="text-4xl font-bold">
          Ready to automate your business?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
          Let's discuss your goals and build automation solutions tailored to your business.
        </p>

        <Button
          href="/contact"
          size="lg"
          className="mt-10"
        >
          Contact Us
        </Button>
      </Section>
    </>
  );
}