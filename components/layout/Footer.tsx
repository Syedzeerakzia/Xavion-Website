import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <Container>

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Xavion Tech.
          </p>

          <p className="text-sm text-gray-500">
            Automate. Scale. Grow.
          </p>

        </div>

      </Container>
    </footer>
  );
}