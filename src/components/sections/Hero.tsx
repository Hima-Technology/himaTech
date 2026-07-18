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
    <div className="relative w-full bg-black overflow-hidden min-h-screen lg:h-screen flex flex-col justify-between pt-24 pb-8 md:pt-28">
      {/* Background grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      
      {/* Drifting background glows using the brand colors */}
      <div
        aria-hidden="true"
        className="absolute -top-20 left-1/4 h-[350px] w-[350px] rounded-full bg-accent-900/15 blur-[120px] animate-[float-blob-1_25s_ease-in-out_infinite] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-accent-950/30 blur-[130px] animate-[float-blob-2_30s_ease-in-out_infinite] pointer-events-none"
      />
      <CursorGlow />

      {/* Main copy vertically centered in the remaining height */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center flex-1 flex flex-col justify-center py-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 md:space-y-6"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wider text-neutral-300 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
              Software Development &amp; AI Partner
            </span>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl xl:text-8.5xl leading-[1.1] md:leading-[1.15]">
            Create,{" "}
            <span className="font-serif italic text-neutral-400 font-light block sm:inline">
              Impactful
            </span>
            <br className="hidden sm:inline" />
            Digital Solutions
          </h1>

          <p className="mx-auto max-w-2xl text-sm md:text-base text-neutral-400 leading-relaxed">
            We build high-performance software, AI systems, and secure digital
            platforms with intention, clarity, and care for ambitious businesses.
          </p>

          <div className="pt-2 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Magnetic>
              <Button href="/contact-us" variant="primary" size="md">
                Let&apos;s Chat!
              </Button>
            </Magnetic>
            <Button href="/about-us" variant="secondary" size="md">
              Our Journey
              <HiOutlineArrowRight size={16} />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Grid Stats section at the bottom part */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
        <div className="grid grid-cols-1 divide-y divide-white/10 border-t border-b border-white/10 py-6 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="text-center px-4 py-2 sm:py-0">
              <p className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
                <AnimatedCounter value={stat.value} />
              </p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Marquee at the very bottom */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 mt-4 pb-4">
        <p className="mb-4 text-center text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
          Our Tech Stack
        </p>
        <Marquee>
          {STACK.map((tech) => (
            <div key={tech.alt} className="mx-6 flex items-center justify-center h-10">
              <Image
                src={tech.src}
                alt={tech.alt}
                width={32}
                height={32}
                className="h-7 w-auto opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Hero;
