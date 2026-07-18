import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const MEMBERS = [
  {
    img: "/image/usamah.webp",
    name: "Usama Talib Juma",
    title: "Team Leader & Full Stack Developer",
    description:
      "Visionary team leader with exceptional expertise in full stack development. Drives innovation while empowering team members to achieve their highest potential.",
  },
  {
    img: "/image/seif.webp",
    name: "Seif Mwita Mgeni",
    title: "Mobile & Backend Developer",
    description:
      "Versatile developer specializing in robust mobile applications and scalable backend systems.",
  },
  {
    img: "/image/hussein.webp",
    name: "Hussein Ali Abdulrahman",
    title: "Senior Data Analyst & Advisor",
    description:
      "Experienced data analyst with remarkable insight and strategic thinking, transforming complex data into actionable intelligence.",
  },
  {
    img: "/image/ahmad.webp",
    name: "Ahmad Sadri Abdullah",
    title: "Technical Director & System Architect",
    description:
      "Brilliant system architect designing innovative technical frameworks that form the foundation of our most advanced solutions.",
  },
];

export function Team() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Meet the Team"
          title="Behind the success: our dedicated team"
          description="From visionary leadership to technical execution, each team member plays a pivotal role in delivering exceptional solutions."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {MEMBERS.map((member, idx) => (
            <RevealOnScroll key={member.name} delay={idx * 0.05}>
              <div className="rounded-xl bg-white p-6 text-center shadow-soft">
                <div className="relative mx-auto mb-6 h-28 w-28 overflow-hidden rounded-full ring-4 ring-neutral-50">
                  <Image src={member.img} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="font-display text-lg text-brand-900">{member.name}</h3>
                <p className="mt-1 text-sm font-semibold text-accent-600">{member.title}</p>
                <p className="mt-3 text-sm text-neutral-500">{member.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Team;
