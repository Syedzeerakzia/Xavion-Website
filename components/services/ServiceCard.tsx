import { Service } from "@/types/service";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface ServiceCardProps {
    service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
    const Icon = service.icon;
    return (
        <Card className="flex h-full flex-col">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                {/* Replace with Tabler Icon later */}
                {/* <span className="text-3xl">⚡</span> */}
                <Icon size={32} stroke={1.75} className="text-primary" />
            </div>

            <h3 className="text-xl font-semibold text-white">
                {service.title}
            </h3>

            <p className="mt-4 text-gray">
                {service.shortDescription}
            </p>

            <ul className="mt-6 space-y-2">
                {service.features.slice(0, 3).map((feature) => (
                    <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-300"
                    >
                        ✓ {feature}
                    </li>
                ))}
            </ul>

            <div className="mt-auto pt-8">
                <Button
                    href="/services"
                    variant="secondary"
                    className="w-full"
                >
                    Learn More
                </Button>
            </div>
        </Card>
    );
}