import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function CTASection() {
  return (
    <Section>
      <Container>
        <div className="rounded-3xl border border-white/10 bg-[#0F172A] px-8 py-20 text-center">
          <h2 className="text-4xl font-bold">
            Ready to automate your business?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Whether you're looking to streamline operations, integrate AI, or
            build custom software, we're here to help you achieve your goals.
          </p>

          <Button
            href="/contact"
            size="lg"
            className="mt-10"
          >
            Let's Talk
          </Button>
        </div>
      </Container>
    </Section>
  );
}