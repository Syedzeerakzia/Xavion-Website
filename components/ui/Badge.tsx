import { cn } from "@/lib/cn";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "rounded-md bg-primary px-3 py-1 text-xs font-medium text-white",
        className
      )}
    >
      {children}
    </span>
  );
}