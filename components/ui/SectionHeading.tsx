import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-16",
        centered && "text-center",
        className
      )}
    >
      <h2 className="text-4xl font-bold text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 max-w-2xl text-gray">
          {subtitle}
        </p>
      )}
    </div>
  );
}