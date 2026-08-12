import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { JellyCard } from "@/components/ui/JellyCard";
import { getTeamMembers } from "@/lib/cms/queries";

const LOCAL_PHOTOS = ["/image/usamah.webp", "/image/seif.webp", "/image/hussein.webp", "/image/ahmad.webp"];

const FALLBACK_MEMBERS = [
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
    description: "Versatile developer specializing in robust mobile applications and scalable backend systems.",
  },
  // {
  //   img: "/image/hussein.webp",
  //   name: "Hussein Ali Abdulrahman",
  //   title: "Senior Data Analyst & Advisor",
  //   description:
  //     "Experienced data analyst with remarkable insight and strategic thinking, transforming complex data into actionable intelligence.",
  // },
  {
    img: "/image/ahmad.webp",
    name: "Ahmad Sadri Abdullah",
    title: "Technical Director & System Architect",
    description:
      "Brilliant system architect designing innovative technical frameworks that form the foundation of our most advanced solutions.",
  },
];

export async function Team() {
  const cmsMembers = await getTeamMembers();
  // Real headshots live locally and aren't uploaded by the seed script yet —
  // pair CMS text with the matching local photo by seed order until photos
  // are added directly in the Strapi admin panel.
  const members =
    cmsMembers && cmsMembers.length > 0
      ? cmsMembers.map((m, idx) => ({
          img: LOCAL_PHOTOS[idx] || LOCAL_PHOTOS[0],
          name: m.name,
          title: m.role,
          description: m.bio,
        }))
      : FALLBACK_MEMBERS;

  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Team Members"
          title={
            <>
              Meet Our{" "}
              <span className="font-serif italic text-accent-600 font-light dark:text-accent-400">
                Team Members
              </span>
            </>
          }
          description="From visionary leadership to technical execution, each team member plays a pivotal role in delivering exceptional solutions."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {members.map((member, idx) => (
            <RevealOnScroll key={member.name} delay={idx * 0.05}>
              <JellyCard className="glass glass-card glass-card--tension group">
                <div className="relative aspect-square w-full mb-6 overflow-hidden rounded-2xl border border-black/5 bg-neutral-200 dark:border-white/5 dark:bg-neutral-900">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <h3 className="font-display text-lg font-bold text-black tracking-tight dark:text-white">{member.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">{member.title}</p>
                <p className="mt-3 text-sm text-neutral-600 leading-relaxed font-medium dark:text-neutral-500">{member.description}</p>
              </JellyCard>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Team;
