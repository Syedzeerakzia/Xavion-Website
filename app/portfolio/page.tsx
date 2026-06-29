import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioFilters from "@/components/portfolio/PortfolioFilters";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioFilters />
      <PortfolioGrid />
    </>
  );
}