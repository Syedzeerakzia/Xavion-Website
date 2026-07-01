"use client";

import { motion, type Variants } from "framer-motion";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import PortfolioCard from "@/components/portfolio/PortfolioCard";

import { portfolio } from "@/data/portfolio";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function FeaturedPortfolio() {
  return (
    <Section>
      <SectionHeading
        centered
        title="Featured Work"
        subtitle="Real automation projects delivering measurable business results."
      />

      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        {portfolio
          .filter((project) => project.featured)
          .map((project) => (
            <motion.div key={project.id} variants={item}>
              <PortfolioCard project={project} />
            </motion.div>
          ))}
      </motion.div>
    </Section>
  );
}