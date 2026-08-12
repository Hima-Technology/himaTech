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
import { getServices } from "@/lib/cms/queries";

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
    <section id="services" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title={
            <>
              What{" "}
              <span className="font-serif italic text-accent-600 font-light dark:text-accent-400">
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
                <TiltCard className="glass glass-card h-full">
                  <div className="flex items-start justify-between">
                    <div className="grid h-12 w-12 place-content-center rounded-xl bg-gradient-to-br from-[#5e7bcb] to-[#26418c] text-white shadow-[0_4px_16px_rgba(58,90,176,0.4)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-display text-sm text-neutral-600 font-semibold dark:text-neutral-500">
                      /{String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-black tracking-tight dark:text-white">{service.title}</h3>
                  <p className="mt-3 text-sm text-neutral-600 leading-relaxed font-medium dark:text-neutral-400">{service.description}</p>
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
