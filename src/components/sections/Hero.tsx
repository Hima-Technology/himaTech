"use client";

import Image from "next/image";
import { HiOutlinePhone, HiOutlineArrowRight, HiOutlineChevronDown } from "react-icons/hi";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Marquee } from "@/components/ui/Marquee";

const STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "15+", label: "Team Members" },
  { value: "5+", label: "Years of Innovation" },
];

const STACK = [
  { src: "/image/NextJS.webp", alt: "Next.js" },
  { src: "/image/ReactJS.webp", alt: "React" },
  { src: "/image/Typescript.webp", alt: "TypeScript" },
  { src: "/image/Tailwind.webp", alt: "Tailwind CSS" },
  { src: "/image/Django.webp", alt: "Django" },
  { src: "/image/MongoDB.webp", alt: "MongoDB" },
  { src: "/image/python.webp", alt: "Python" },
];

export function Hero() {
  return (
    <div className="relative w-full">
      <header className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink-950">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/video/intro-ezgif.com-video-to-webp-converter.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/85 via-ink-950/70 to-ink-950/95" />
        <CursorGlow />

        <div className="relative z-10 mx-auto max-w-4xl px-6 pt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="mb-4 inline-block rounded-full bg-accent-900 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-white">
              Founded in Zanzibar
            </span>
            <h1 className="text-display-lg text-white">
              Software, AI &amp; security
              <br />
              built for what&apos;s <span className="text-accent-300">next</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
              Hima Technologies combines expertise in software development,
              artificial intelligence, data analytics, and cybersecurity to
              help businesses stay ahead in an ever-evolving digital
              landscape.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Magnetic>
                <Button href="/contact-us" size="lg">
                  <HiOutlinePhone size={18} />
                  Get in Touch
                </Button>
              </Magnetic>
              <Button href="/about-us" variant="ghost" size="lg">
                About Us
                <HiOutlineArrowRight size={18} />
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <HiOutlineChevronDown size={28} />
        </div>
      </header>

      <div className="mx-6 -mt-14 grid grid-cols-1 gap-8 rounded-2xl bg-white p-8 shadow-soft-lg sm:grid-cols-3 md:mx-16 md:p-12">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center sm:text-left">
            <p className="font-display text-display-md text-ink-950">
              <AnimatedCounter value={stat.value} />
            </p>
            <p className="mt-1 font-medium text-neutral-600">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mx-6 mt-10 md:mx-16">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-neutral-500 sm:text-left">
          Our Stack
        </p>
        <Marquee>
          {STACK.map((tech) => (
            <Image
              key={tech.alt}
              src={tech.src}
              alt={tech.alt}
              width={40}
              height={40}
              className="h-8 w-auto grayscale transition duration-250 hover:grayscale-0"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Hero;
