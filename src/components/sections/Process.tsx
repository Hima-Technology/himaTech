import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { JellyCard } from "@/components/ui/JellyCard";
import { getProcessSteps } from "@/lib/cms/queries";

const FALLBACK_STEPS = [
  { title: "Discover", description: "Shape powerful experiences with purpose-driven creativity and thoughtful execution." },
  { title: "Design", description: "Build scalable solutions that bring your vision to life with precision and performance." },
  { title: "Develop", description: "Introduce your brand with impact through strategic rollouts that captivate and convert." },
  { title: "Launch & Grow", description: "Ensure long-term growth and stability with ongoing maintenance, updates, and optimization support." },
];

export async function Process() {
  const cmsSteps = await getProcessSteps();
  const steps = cmsSteps && cmsSteps.length > 0 ? cmsSteps : FALLBACK_STEPS;

  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Process"
          title={
            <>
              The Journey to a{" "}
              <br className="sm:hidden" />
              <span className="font-serif italic text-accent-600 font-light dark:text-accent-400">
                Successful Product
              </span>
            </>
          }
          description="We keep things lean and collaborative — so ideas go from concept to launch without the chaos."
        />

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <RevealOnScroll key={step.title} delay={idx * 0.05}>
              <JellyCard className="glass glass-card glass-card--tension h-full">
                <p className="font-display text-2xl font-bold text-neutral-600 dark:text-neutral-400">/{String(idx + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 font-display text-xl font-bold text-black tracking-tight dark:text-white">{step.title}</h3>
                <p className="mt-3 text-sm text-neutral-600 leading-relaxed font-medium dark:text-neutral-400">{step.description}</p>
              </JellyCard>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Process;
