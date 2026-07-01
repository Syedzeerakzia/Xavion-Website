import { ReactNode } from "react";
import { cn } from "@/lib/cn";
import Container from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export default function Section({
  children,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section className={cn("py-24", className)}>
      
      <Container className={containerClassName}>
        
        {children}
      </Container>
    </section>
  );
}