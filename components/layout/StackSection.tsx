import { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface StackSectionProps {
  children: ReactNode;
  className?: string;
  index?: number;
}

export default function StackSection({
  children,
  className,
  index = 0,
}: StackSectionProps) {
  return (
    <div
      className={cn("relative md:sticky md:top-10 min-h-screen bg-black", className)}
      style={{ zIndex: index }}
    > 
      {children}
    </div>
  );
}