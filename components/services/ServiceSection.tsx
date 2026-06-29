import Image from "next/image";

import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

import { Service } from "@/types/service";

interface ServiceSectionProps {
    service: Service;
    reverse?: boolean;
}

export default function ServiceSection({
    service,
    reverse = false,
}: ServiceSectionProps) {
    const Icon = service.icon;

    return (
        <Section>
            <div
                className={`grid items-center gap-16 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
            >
                {/* Content */}
                <div>
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                        <Icon size={32} className="text-primary" />
                    </div>

                    <h2 className="text-4xl font-bold">
                        {service.title}
                    </h2>

                    <p className="mt-6 text-lg text-gray-400">
                        {service.description}
                    </p>

                    <ul className="mt-8 space-y-4">
                        {service.features.map((feature) => (
                            <li
                                key={feature.title}
                                className="flex items-start gap-3"
                            >
                                <span className="text-primary mt-1">✓</span>

                                <div>
                                    <p className="font-medium">
                                        {feature.title}
                                    </p>

                                    {feature.description && (
                                        <p className="text-sm text-gray-400 mt-1">
                                            {feature.description}
                                        </p>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>

                    <Button
                        href="/contact"
                        className="mt-10"
                    >
                        Get Started
                    </Button>
                </div>

                {/* Image */}
                <div className="relative aspect-video overflow-hidden rounded-2xl">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </Section>
    );
}