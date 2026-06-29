import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import ServiceCard from "@/components/services/ServiceCard";

import { services } from "@/data/services";

export default function FeaturedServices() {
    return (
        <Section>
            <SectionHeading
                centered
                title="Featured Services"
            // subtitle="Automation solutions designed to streamline your business and accelerate growth."
            />

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {services
                    .filter((service) => service.featured)
                    .map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
            </div>
        </Section>
    );
}