"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/#services", label: "Services" },
  { href: "/Our-Products", label: "Products" },
  { href: "/contact-us", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition duration-250",
        scrolled
          ? "bg-white/95 shadow-soft backdrop-blur-sm"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="relative z-10">
          <Image
            src={scrolled ? "/logos/Hima-dark.webp" : "/logos/Hima-white.webp"}
            alt="Hima Technologies"
            width={160}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <ul
          className={cn(
            "hidden items-center gap-8 text-sm font-semibold lg:flex",
            scrolled ? "text-neutral-700" : "text-white"
          )}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition hover:text-accent-500">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href="/contact-us" size="md">
            Get in Touch
          </Button>
        </div>

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button
              aria-label="Toggle menu"
              className={cn(
                "z-10 rounded-md p-2 lg:hidden",
                scrolled ? "text-neutral-900" : "text-white"
              )}
            >
              <HiOutlineMenu size={26} />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-brand-950/60 backdrop-blur-sm" />
            <Dialog.Content className="fixed right-0 top-0 z-50 h-full w-full max-w-sm bg-white p-8 shadow-soft-lg">
              <div className="flex items-center justify-between">
                <Dialog.Title className="font-display text-lg text-brand-900">
                  Menu
                </Dialog.Title>
                <Dialog.Close asChild>
                  <button aria-label="Close menu" className="rounded-md p-2 text-neutral-700">
                    <HiOutlineX size={24} />
                  </button>
                </Dialog.Close>
              </div>
              <ul className="mt-10 flex flex-col gap-6 text-lg font-semibold text-brand-900">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} onClick={() => setOpen(false)}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button href="/contact-us" size="lg" className="mt-10 w-full" onClick={() => setOpen(false)}>
                Get in Touch
              </Button>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}

export default Navbar;
