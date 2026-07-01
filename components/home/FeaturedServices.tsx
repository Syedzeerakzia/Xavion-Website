"use client";

import { motion, type Variants } from "framer-motion"

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import ServiceCard from "@/components/services/ServiceCard";

import { services } from "@/data/services";

const container: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}
export default function FeaturedServices() {
    return (
        <Section>
            <SectionHeading
                centered
                title="Featured Services"
                subtitle="Automation solutions designed to streamline your business and accelerate growth."
            />

            <motion.div
                className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}>
                {services
                    .filter((service) => service.featured)
                    .map((service) => (
                        <motion.div key={service.id} variants={item}>
                            <ServiceCard key={service.id} service={service} />
                        </motion.div>
                    ))}
            </motion.div>
        </Section>
    );
}