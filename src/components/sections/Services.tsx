import {
  HiOutlineCode,
  HiOutlineChip,
  HiOutlineChartBar,
  HiOutlineShieldCheck,
  HiOutlineDeviceMobile,
  HiOutlineLightBulb,
  HiOutlineSparkles,
} from "react-icons/hi";
import type { IconType } from "react-icons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { TiltCard } from "@/components/ui/TiltCard";
import { getServices } from "@/sanity/queries";

const ICONS: Record<string, IconType> = {
  HiOutlineCode,
  HiOutlineChip,
  HiOutlineChartBar,
  HiOutlineShieldCheck,
  HiOutlineDeviceMobile,
  HiOutlineLightBulb,
};

const FALLBACK_SERVICES = [
  {
    icon: "HiOutlineCode",
    title: "Software Development",
    description:
      "Tailor-made web and desktop applications designed around your business processes, from first prototype to production.",
  },
  {
    icon: "HiOutlineChip",
    title: "AI Solutions",
    description:
      "Custom AI models and intelligent automation — predictive analytics, natural language processing, and computer vision.",
  },
  {
    icon: "HiOutlineChartBar",
    title: "Data Analytics",
    description:
      "Transform complex data into clear, actionable insight with interactive dashboards and real-time reporting.",
  },
  {
    icon: "HiOutlineShieldCheck",
    title: "Cybersecurity",
    description:
      "Enterprise-grade protection with real-time threat detection, compliance management, and regular security audits.",
  },
  {
    icon: "HiOutlineDeviceMobile",
    title: "Web & Mobile Development",
    description:
      "Responsive websites and native/cross-platform mobile apps built to engage users and drive conversions.",
  },
  {
    icon: "HiOutlineLightBulb",
    title: "IT Consulting & Training",
    description:
      "Strategic guidance to align technology with business goals, plus training programs in IT best practices and emerging tech.",
  },
];

export async function Services() {
  const cmsServices = await getServices();
  const services = cmsServices && cmsServices.length > 0 ? cmsServices : FALLBACK_SERVICES;

  return (
    <section id="services" className="py-24 bg-black border-b border-white/10">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title={
            <>
              What{" "}
              <span className="font-serif italic text-accent-400 font-light">
                We Do
              </span>
            </>
          }
          description="We craft digital experiences from idea to launch — blending strategy, design, and engineering to build products that performs."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = ICONS[service.icon] || HiOutlineSparkles;
            return (
              <RevealOnScroll key={service.title} delay={idx * 0.05}>
                <TiltCard className="h-full rounded-2xl border border-white/10 bg-[#0c0c0c]/60 p-8 hover:bg-[#0c0c0c]/90 transition-all duration-300 hover:border-white/20">
                  <div className="flex items-start justify-between">
                    <div className="grid h-12 w-12 place-content-center rounded-xl bg-white text-black">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-display text-sm text-neutral-600 font-semibold">
                      /{String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-white tracking-tight">{service.title}</h3>
                  <p className="mt-3 text-sm text-neutral-400 leading-relaxed font-medium">{service.description}</p>
                </TiltCard>
              </RevealOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Services;
