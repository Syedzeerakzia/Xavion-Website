import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export default function ContactPage() {
  return (
    <>
      <Section className="pb-12">
        <SectionHeading
          centered
          title="Get In Touch"
          subtitle="Whether you're looking to automate your business, build custom software, or integrate AI into your workflows, we'd love to hear about your project."
        />
      </Section>

      <Section className="pt-0">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <ContactForm />
          <ContactInfo />
        </div>
      </Section>
    </>
  );
}