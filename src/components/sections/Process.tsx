import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { getProcessSteps } from "@/sanity/queries";

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
    <section className="bg-black py-24 border-b border-white/10">
      <Container>
        <SectionHeading
          eyebrow="Our Process"
          title={
            <>
              The Journey to a{" "}
              <br className="sm:hidden" />
              <span className="font-serif italic text-neutral-400 font-light">
                Successful Product
              </span>
            </>
          }
          description="We keep things lean and collaborative — so ideas go from concept to launch without the chaos."
        />

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <RevealOnScroll key={step.title} delay={idx * 0.05}>
              <div className="relative pt-6 border-t border-white/10">
                <p className="font-display text-2xl font-bold text-neutral-600">/{String(idx + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 font-display text-xl font-bold text-white tracking-tight">{step.title}</h3>
                <p className="mt-3 text-sm text-neutral-400 leading-relaxed font-medium">{step.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Process;
