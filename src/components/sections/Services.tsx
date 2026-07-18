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
    <section id="services" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Technology services built to move your business forward"
          description="A comprehensive suite of services designed to help our clients thrive in the digital age."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = ICONS[service.icon] || HiOutlineSparkles;
            return (
              <RevealOnScroll key={service.title} delay={idx * 0.05}>
                <div className="h-full rounded-xl border border-neutral-100 bg-white p-8 shadow-soft transition duration-250 hover:-translate-y-1 hover:shadow-soft-md">
                  <div className="mb-5 grid h-12 w-12 place-content-center rounded-lg bg-accent-900 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg text-ink-950">{service.title}</h3>
                  <p className="mt-2 font-medium text-neutral-600">{service.description}</p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Services;
