import Hero from "@/components/home/hero/Hero";
import FeaturedServices from "@/components/home/FeaturedServices";
import FeaturedPortfolio from "@/components/home/FeaturedPortfolio";

import StackSection from "@/components/layout/StackSection";

export default function Home() {
  return (
    <>

      <Hero />

      <StackSection index={1}  className="bg-linear-to-b from-navy to-slate-900">
        <FeaturedServices />
      </StackSection>

      <StackSection index={2} className="bg-linear-to-b from-slate-900 to-black">
        <FeaturedPortfolio />
      </StackSection>

    </>
  );
}