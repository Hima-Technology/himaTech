import type { Metadata } from "next";
import { HiCheck } from "react-icons/hi";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Team from "@/components/sections/Team";
import { SITE_STATS } from "@/lib/site-stats";

export const metadata: Metadata = {
  title: "About Us | Himma Technologies",
  description:
    "Founded in Zanzibar, Himma Technologies combines expertise in software development, AI, data analytics, and cybersecurity.",
};

const WHY_CHOOSE_US = [
  {
    title: "Expert Team",
    description: "Our talented team brings years of experience and deep technical expertise to every project.",
  },
  {
    title: "Custom Solutions",
    description: "We tailor our services to meet your unique business needs and goals.",
  },
  {
    title: "Proven Track Record",
    description: "We've successfully delivered projects across various industries and scales.",
  },
  {
    title: "Ongoing Support",
    description: "We provide continuous support and maintenance to ensure your success.",
  },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24 overflow-hidden">
        <Container className="text-center relative z-10">
          <span className="glass glass-badge glass-badge--violet">
            About Us
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold tracking-tight md:text-7xl">
            Who We Are |{" "}
            <span className="font-serif italic text-accent-600 font-light block sm:inline dark:text-accent-400">
              HimmaTech
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-neutral-600 leading-relaxed font-medium dark:text-neutral-400">
            We help ambitious brands and startups build digital products that stand out and scale. We believe in working smart, building fast, and designing with purpose.
          </p>
        </Container>
      </section>

      {/* Mission & Stats */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Our Mission"
                title={
                  <>
                    Your Growth,{" "}
                    <span className="font-serif italic text-accent-600 font-light dark:text-accent-400">
                      Our Mission
                    </span>
                  </>
                }
              />
              <p className="mt-6 text-sm md:text-base text-neutral-600 leading-relaxed font-medium dark:text-neutral-400">
                We craft digital solutions that not only look good but perform exceptionally. Our team thrives on innovation and turning bold ideas into meaningful impact. Based in Zanzibar, we combine regional insights with global engineering standards.
              </p>
            </div>

            <div className=" grid grid-cols-1 divide-y divide-black/10 rounded-3xl py-6 sm:grid-cols-3 sm:divide-y-0 sm:divide-x align-middle my-auto dark:divide-white/10">
              {SITE_STATS.map((stat) => (
                <div key={stat.label} className="text-center px-4 py-4 sm:py-0">
                  <p className="font-display text-4xl font-bold text-black tracking-tight dark:text-white">{stat.value}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="Why Choose Us"
            title={
              <>
                Why Choose{" "}
                <span className="font-serif italic text-accent-600 font-light dark:text-accent-400">Himma Technologies</span>
              </>
            }
          />
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
            {WHY_CHOOSE_US.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#5e7bcb] to-[#26418c] text-white shadow-[0_4px_16px_rgba(58,90,176,0.4)]">
                  <HiCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-black tracking-tight dark:text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600 leading-relaxed font-medium dark:text-neutral-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Team />
    </div>
  );
}
