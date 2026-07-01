"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import Container from "../ui/Container";
import Logo from "@/components/shared/Logo";
import { navigation } from "@/data/navigation";
import Button from "../ui/Button";

import { IconMenu2, IconX } from "@tabler/icons-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Logo />

        {/* Desktop Nav */}
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

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button
            href="/contact"
            variant="secondary"
            bgColor="#3B82F6"
            textColor="#ffffff"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <IconX size={24} />
          ) : (
            <IconMenu2 size={24} />
          )}
        </button>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur"
          >
            <motion.div
              className="flex flex-col gap-6 px-6 py-6"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
            >
              {navigation.map((item) => (
                <motion.div
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    show: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-blue-500 transition"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}