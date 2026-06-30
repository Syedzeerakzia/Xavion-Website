import Hero from "@/components/home/hero/Hero";
import FeaturedServices from "@/components/home/FeaturedServices";
import FeaturedPortfolio from "@/components/home/FeaturedPortfolio";

export default function Home() {
  return (
    <main className="relative bg-black">
      <Hero />

      <div className="relative z-10 rounded-t-[40px] bg-background">
        <FeaturedServices />
        <FeaturedPortfolio />
       </div>
    </main>
  );
}