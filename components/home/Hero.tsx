import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function Hero() {
  return (
    <Section className="relative overflow-hidden py-32">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-black via-navy to-black" />

      <div className="max-w-3xl">
        {/* <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          AI • Automation • CRM • Development
        </span> */}

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

        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/contact" size="lg">
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
  );
}