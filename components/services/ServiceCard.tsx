import { Service } from "@/types/service";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface ServiceCardProps {
    service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
    const Icon = service.icon;
    return (
        <Card className="flex h-full flex-col bg-linear-to-br from-slate-800/50 via-slate-900/50 to-slate-950/50 border border-white/5">
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
                        key={feature.title}
                        className="flex items-center gap-2 text-sm text-gray-300"
                    >
                        ✓ {feature.title}
                    </li>
                ))}
            </ul>

            <div className="mt-auto pt-8">
                <Button
                    href="/services"
                    variant="secondary"
                    bgColor="#ffffff"
                    textColor="#000000"
                    className="w-full"
                >
                    Learn More
                </Button>
            </div>
        </Card>
    );
}