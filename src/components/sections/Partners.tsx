"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PARTNERS = [
  { name: "Pamoja Youth Initiative", url: "https://www.pamoja.or.tz/", logo: "/logos/partners/pamoja.jpeg" },
  { name: "Zanzibar Youth Forum", url: "https://www.zanzibaryouthforum.org/", logo: "/logos/partners/zyf.webp" },
  { name: "UKUEM", url: "https://ukuem.org/", logo: "/logos/partners/ukuem.png" },
  { name: "Zanvista Tours", url: "https://zanvistatours.com/", logo: "/logos/partners/zanvista.svg" },
];

const PAGE_SIZE = 3;
const PAGE_COUNT = Math.ceil(PARTNERS.length / PAGE_SIZE);
const AUTO_ADVANCE_MS = 10000;

export function Partners() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setPage((p) => (p + 1) % PAGE_COUNT);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, []);

  const visible = PARTNERS.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Partners"
          title={
            <>
              Organizations That{" "}
              <span className="font-serif italic text-accent-600 font-light dark:text-accent-400">
                Trust Us
              </span>
            </>
          }
          description="We're proud to work alongside these organizations, building the digital platforms behind their mission."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 min-h-[220px]">
          <AnimatePresence mode="wait">
            {visible.map((partner) => (
              <motion.a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="group flex h-full items-center gap-6 p-6"
              >
                <div className="relative h-16 w-16 flex-shrink-0">
                  <Image src={partner.logo} alt={partner.name} fill className="object-contain" sizes="64px" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-lg font-bold text-black tracking-tight dark:text-white">{partner.name}</h3>
                  <span className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-neutral-600 group-hover:underline decoration-black decoration-2 underline-offset-4 dark:text-neutral-400 dark:decoration-white">
                    Visit site
                    <HiOutlineArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            {Array.from({ length: PAGE_COUNT }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setPage(idx)}
                aria-label={`Go to partners page ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === page ? "w-6 bg-black dark:bg-white" : "w-2 bg-black/20 dark:bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Partners;
