import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <div className="sticky top-0 h-screen">
      <Section className="relative flex h-screen items-center overflow-hidden">

        {/* Three Background */}
        <HeroBackground />

        {/* Gradient Overlay */}
        {/* <div className="absolute inset-0 -z-10 bg-linear-to-br from-black/40 via-navy/30 to-black/50 " /> */}

        {/* Content */}
        <div className="relative z-20 lg:w-7xl">

          <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
            Automate.
            <br />
            Scale.
            <br />
            Grow.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray">
            We build AI-powered automation systems that streamline operations,
            eliminate repetitive tasks, and help businesses scale faster with
            CRM, workflow automation, and custom software solutions.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">
            <Button
              href="/contact"
              variant="secondary"
              bgColor="#3B82F6"
              textColor="#ffffff"
              size="lg">
              Get Started
            </Button>

            <Button
              href="/portfolio"
              variant="secondary"
              size="lg"
            >
              View Portfolio
            </Button>
          </div>

        </div>

      </Section>
    </div>
  );
}