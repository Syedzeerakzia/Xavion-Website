import { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-primary/20 bg-navy p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary",
        className
      )}
    >
      {children}
    </div>
  );
}