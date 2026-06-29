import AboutHero from "@/components/about/AboutHero";
import CompanyStory from "@/components/about/CompanyStory";
import CoreValues from "@/components/about/CoreValues";
import ExperienceSection from "@/components/about/ExperienceSection";
import TeamSection from "@/components/about/TeamSection";
import CTASection from "@/components/about/CTASection";

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <CompanyStory />

      <CoreValues />

      <ExperienceSection />

      <TeamSection />

      <CTASection />
    </>
  );
}