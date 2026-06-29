import Image from "next/image";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import { PortfolioProject } from "@/types/portfolio";

interface PortfolioCardProps {
  project: PortfolioProject;
}

export default function PortfolioCard({
  project,
}: PortfolioCardProps) {
  return (
    <Card className="overflow-hidden p-0 flex flex-col">
      <div className="relative h-56">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold">
          {project.title}
        </h3>

        <p className="mt-3 text-gray">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-auto pt-8">
          <Button
            href={`/portfolio/${project.slug}`}
            variant="secondary"
            className="w-full"
          >
            View Case Study
          </Button>
        </div>
      </div>
    </Card>
  );
}