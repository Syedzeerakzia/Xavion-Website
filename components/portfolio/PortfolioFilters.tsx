"use client";

import { portfolioCategories } from "@/data/categories";
import Container from "@/components/ui/Container";

export default function PortfolioFilters() {
    return (
        <section className="pb-16">
            <Container>
                <div className="flex flex-wrap justify-center gap-4">
                    {portfolioCategories.map((category, index) => (
                        <button
                            key={category}
                            className={`rounded-full border px-5 py-2 text-sm transition-all ${index === 0
                                    ? "border-primary bg-primary text-white"
                                    : "border-white/10 text-gray hover:border-primary hover:text-white"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </Container>
        </section>
    );
}