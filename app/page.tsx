import Hero from "@/components/home/hero/Hero";
import FeaturedServices from "@/components/home/FeaturedServices";
import FeaturedPortfolio from "@/components/home/FeaturedPortfolio";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedServices />
      <FeaturedPortfolio />
    </>
  );
}