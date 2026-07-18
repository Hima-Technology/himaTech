import type { Metadata } from "next";
import { HiOutlineLightBulb, HiOutlineEye, HiOutlineHeart, HiCheck } from "react-icons/hi";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import Team from "@/components/sections/Team";

export const metadata: Metadata = {
  title: "About Us | Hima Technologies",
  description:
    "Founded in Zanzibar, Hima Technologies combines expertise in software development, AI, data analytics, and cybersecurity.",
};

const VALUES = [
  {
    icon: HiOutlineLightBulb,
    title: "Our Mission",
    description:
      "To empower businesses with innovative technology solutions that drive growth, efficiency, and success in the digital age.",
  },
  {
    icon: HiOutlineEye,
    title: "Our Vision",
    description:
      "To be a leading force in East African technology innovation, recognized for excellence, creativity, and transformative solutions.",
  },
  {
    icon: HiOutlineHeart,
    title: "Our Values",
    description:
      "Innovation, integrity, collaboration, and customer-centricity guide everything we do and every solution we create.",
  },
];

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
    <div className="page-transition">
      <section className="bg-brand-950 pb-20 pt-40 text-center text-white">
        <Container>
          <h1 className="font-display text-display-lg">About Hima Technologies</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Innovating the future through cutting-edge technology solutions.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-3xl text-center">
          <SectionHeading eyebrow="Who We Are" title="Founded in Zanzibar, built for East Africa" />
          <p className="mt-6 text-lg leading-relaxed text-neutral-600">
            Hima Technologies is a forward-thinking technology company dedicated to delivering
            innovative solutions that transform businesses and empower organizations to achieve
            their goals. Founded in Zanzibar by a team of forward-thinking innovators, we combine
            expertise in software development, artificial intelligence, data analytics, and
            cybersecurity — harnessing cutting-edge solutions to drive meaningful impact across
            industries and ensure businesses stay ahead in an ever-evolving digital landscape.
          </p>
        </Container>
      </section>

      <section className="bg-neutral-50 py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {VALUES.map((value, idx) => (
              <RevealOnScroll key={value.title} delay={idx * 0.05}>
                <div className="h-full rounded-xl bg-white p-8 shadow-soft">
                  <div className="mb-4 grid h-14 w-14 place-content-center rounded-full bg-brand-900 text-white">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-lg text-brand-900">{value.title}</h3>
                  <p className="mt-2 text-neutral-600">{value.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading title="Why Choose Hima Technologies?" />
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
            {WHY_CHOOSE_US.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                  <HiCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-brand-900">{item.title}</h3>
                  <p className="mt-1 text-neutral-600">{item.description}</p>
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
