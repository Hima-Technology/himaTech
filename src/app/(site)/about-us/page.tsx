import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import Team from "@/components/sections/Team";

export const metadata: Metadata = {
  title: "About Us | Hima Technologies",
  description:
    "Founded in Zanzibar, Hima Technologies combines expertise in software development, AI, data analytics, and cybersecurity.",
};

const STATS = [
  { value: "100+", label: "Projects Launched" },
  { value: "5+", label: "Years of Experience" },
  { value: "25+", label: "Happy Clients" },
];

const EXPERIENCE = [
  {
    role: "Senior Enterprise Solutions",
    period: "2023 - Present",
    company: "Zanzibar Digital Hub",
    description: "Designing large-scale architecture, databases, and microservices for East African business growth.",
  },
  {
    role: "Full Stack Engineering",
    period: "2020 - 2023",
    company: "Stone Town Tech Systems",
    description: "Collaborated on web platforms, high-performance backends, and custom CMS integrations.",
  },
  {
    role: "Interface & UI Design",
    period: "2018 - 2020",
    company: "Island Creative Studio",
    description: "Designed responsive user layouts, wireframes, and custom web vector illustrations.",
  },
];

export default function AboutUs() {
  return (
    <div className="bg-black text-white min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
        <Container className="text-center relative z-10">
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-300">
            About Us
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold tracking-tight md:text-7xl">
            Who We Are |{" "}
            <span className="font-serif italic text-neutral-400 font-light block sm:inline">
              HimaTech
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-neutral-400 leading-relaxed font-medium">
            We help ambitious brands and startups build digital products that stand out and scale. We believe in working smart, building fast, and designing with purpose.
          </p>
        </Container>
      </section>

      {/* Mission & Stats */}
      <section className="py-24 border-b border-white/10 bg-[#030303]">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Our Mission"
                title={
                  <>
                    Your Growth,{" "}
                    <span className="font-serif italic text-neutral-400 font-light">
                      Our Mission
                    </span>
                  </>
                }
              />
              <p className="mt-6 text-sm md:text-base text-neutral-400 leading-relaxed font-medium">
                We craft digital solutions that not only look good but perform exceptionally. Our team thrives on innovation and turning bold ideas into meaningful impact. Based in Zanzibar, we combine regional insights with global engineering standards.
              </p>
            </div>
            
            <div className="grid grid-cols-1 divide-y divide-white/10 border-t border-b border-white/10 py-6 sm:grid-cols-3 sm:divide-y-0 sm:divide-x align-middle my-auto">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center px-4 py-4 sm:py-0">
                  <p className="font-display text-4xl font-bold text-white tracking-tight">{stat.value}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Timeline Section */}
      <section className="py-24 border-b border-white/10 bg-black">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <SectionHeading
                align="left"
                eyebrow="Our Experience"
                title={
                  <>
                    Our Expertise That{" "}
                    <span className="font-serif italic text-neutral-400 font-light block">
                      Creatively Evolves
                    </span>
                  </>
                }
              />
              <p className="mt-4 text-sm text-neutral-400 leading-relaxed font-medium max-w-sm">
                We’ve grown through every challenge and collaboration. Each step has sharpened our skills and broadened our impact.
              </p>
            </div>

            <div className="lg:col-span-2 space-y-12">
              {EXPERIENCE.map((exp, idx) => (
                <RevealOnScroll key={exp.role} delay={idx * 0.05}>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-8 border-b border-white/10 last:border-b-0 last:pb-0">
                    <div className="md:col-span-1 text-sm font-semibold text-neutral-500 uppercase tracking-wider">
                      {exp.period}
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="font-display text-xl font-bold text-white tracking-tight">{exp.role}</h3>
                      <p className="text-xs font-semibold text-neutral-400 mt-1 uppercase tracking-wider">{exp.company}</p>
                      <p className="mt-3 text-sm text-neutral-400 leading-relaxed font-medium">{exp.description}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Team />
    </div>
  );
}
