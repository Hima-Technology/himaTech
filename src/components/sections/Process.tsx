import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { getProcessSteps } from "@/sanity/queries";

const FALLBACK_STEPS = [
  { title: "Discovery", description: "We learn your business, goals, and constraints through a focused kickoff call." },
  { title: "Strategy", description: "We scope the solution, propose an architecture, and agree the roadmap with you." },
  { title: "Build", description: "We design and develop in visible phases, with regular check-ins along the way." },
  { title: "Launch & Support", description: "We ship, monitor, and stay on as a technical partner for what comes next." },
];

export async function Process() {
  const cmsSteps = await getProcessSteps();
  const steps = cmsSteps && cmsSteps.length > 0 ? cmsSteps : FALLBACK_STEPS;

  return (
    <section className="bg-neutral-50 py-24">
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title="A clear process, from first call to launch"
          description="Every engagement follows the same four phases, so you always know what's next."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <RevealOnScroll key={step.title} delay={idx * 0.05}>
              <div className="relative">
                <p className="font-display text-4xl text-brand-100">{String(idx + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 font-display text-lg text-brand-900">{step.title}</h3>
                <p className="mt-2 font-medium text-neutral-600">{step.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Process;
