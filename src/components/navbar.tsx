"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

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
        "fixed top-0 z-50 w-full transition duration-300 border-b",
        scrolled
          ? "bg-white/70 border-black/10 backdrop-blur-md dark:bg-black/70 dark:border-white/10"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link
          href="/"
          className={cn(
            "relative z-10 font-display text-xl font-bold tracking-tight flex items-center gap-2",
            scrolled ? "text-black dark:text-white" : "text-white"
          )}
        >
          {/* Not-scrolled navbar always sits over a permanently-dark hero band, so
              the white logo is correct regardless of theme; scrolled state flips
              with the theme since it's over the page's own background. */}
          {scrolled ? (
            <>
              <Image
                src="/logos/Hima-dark.webp"
                alt="Hima Technologies"
                width={140}
                height={32}
                className="h-8 w-auto dark:hidden"
                priority
              />
              <Image
                src="/logos/Hima-white.webp"
                alt="Hima Technologies"
                width={140}
                height={32}
                className="hidden h-8 w-auto dark:block"
                priority
              />
            </>
          ) : (
            <Image
              src="/logos/Hima-white.webp"
              alt="Hima Technologies"
              width={140}
              height={32}
              className="h-8 w-auto"
              priority
            />
          )}
        </Link>

        <ul
          className={cn(
            "hidden items-center gap-8 text-sm font-medium lg:flex",
            scrolled ? "text-neutral-600 dark:text-neutral-400" : "text-white/80"
          )}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "transition",
                  scrolled ? "hover:text-black dark:hover:text-white" : "hover:text-white"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle
            className={cn(
              "rounded-full p-2 transition",
              scrolled ? "text-black hover:bg-black/5 dark:text-white dark:hover:bg-white/10" : "text-white hover:bg-white/10"
            )}
          />
          <Button href="/contact-us" variant="primary" size="md">
            Let&apos;s Chat!
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle
            className={cn(
              "rounded-full p-2 transition",
              scrolled ? "text-black hover:bg-black/5 dark:text-white dark:hover:bg-white/10" : "text-white hover:bg-white/10"
            )}
          />
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button
                aria-label="Toggle menu"
                className={cn("z-10 rounded-md p-2", scrolled ? "text-black dark:text-white" : "text-white")}
              >
                <HiOutlineMenu size={26} />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm animate-fade-in" />
              <Dialog.Content className="fixed right-0 top-0 z-50 h-full w-full max-w-sm bg-white border-l border-black/10 p-8 shadow-2xl flex flex-col justify-between dark:bg-[#0a0a0a] dark:border-white/10">
                <div>
                  <div className="flex items-center justify-between">
                    <Dialog.Title className="font-display text-lg text-black font-bold dark:text-white">
                      Navigation
                    </Dialog.Title>
                    <Dialog.Close asChild>
                      <button aria-label="Close menu" className="rounded-md p-2 text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white">
                        <HiOutlineX size={24} />
                      </button>
                    </Dialog.Close>
                  </div>
                  <ul className="mt-12 flex flex-col gap-6 text-xl font-medium text-neutral-600 dark:text-neutral-400">
                    {NAV_LINKS.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="hover:text-black dark:hover:text-white transition"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Button href="/contact-us" size="lg" className="w-full" onClick={() => setOpen(false)}>
                    Let&apos;s Chat!
                  </Button>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
