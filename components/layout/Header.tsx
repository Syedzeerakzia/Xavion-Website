import Link from "next/link";
import Container from "../ui/Container";
import Logo from "@/components/shared/Logo";

import { navigation } from "@/data/navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">

        <Logo />

        <nav className="hidden gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-400 transition hover:text-blue-500"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-600"
        >
          Get Started
        </Link>

      </Container>
    </header>
  );
}