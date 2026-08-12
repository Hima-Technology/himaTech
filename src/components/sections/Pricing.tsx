import { HiCheck } from "react-icons/hi";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { JellyCard } from "@/components/ui/JellyCard";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { getPricingTiers } from "@/lib/cms/queries";

const FALLBACK_TIERS = [
  {
    name: "Starter",
    description: "For a focused website or a first product prototype.",
    features: ["Marketing website or MVP", "Up to 8 pages/screens", "Content management", "1 round of revisions"],
    highlighted: false,
  },
  {
    name: "Growth",
    description: "For custom software or a full product build.",
    features: [
      "Custom web or mobile application",
      "API & third-party integrations",
      "Dedicated project lead",
      "Weekly progress check-ins",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For ongoing engineering, security, and AI partnership.",
    features: [
      "Continuous development retainer",
      "Cybersecurity & compliance support",
      "AI/data analytics workstreams",
      "Priority support & SLAs",
    ],
    highlighted: false,
  },
];

export async function Pricing() {
  const cmsTiers = await getPricingTiers();
  const tiers = cmsTiers && cmsTiers.length > 0 ? cmsTiers : FALLBACK_TIERS;

  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Plans{" "}
              <span className="font-serif italic text-accent-600 font-light dark:text-accent-400">That Scale With You</span>
            </>
          }
          description="Every engagement is quoted after a discovery call — these tiers give you a starting shape, not a fixed price."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, idx) => (
            <RevealOnScroll key={tier.name} delay={idx * 0.05}>
              <JellyCard
                className={cn(
                  "glass glass-card glass-card--tension flex h-full flex-col",
                  tier.highlighted ? "glass--bright scale-100 lg:scale-[1.03]" : ""
                )}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold text-black uppercase tracking-wider dark:text-white">{tier.name}</h3>
                  {tier.highlighted && (
                    <span className="glass glass-badge glass-badge--amber">Popular</span>
                  )}
                </div>

                <p className="mt-4 text-sm text-neutral-600 font-medium dark:text-neutral-400">{tier.description}</p>

                <ul className="mt-8 flex-1 space-y-4 text-sm">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <HiCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-black dark:text-white" />
                      <span className="text-neutral-700 font-medium dark:text-neutral-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="/contact-us"
                  variant={tier.highlighted ? "primary" : "secondary"}
                  className="mt-8 w-full"
                >
                  Get a Quote
                </Button>
              </JellyCard>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Pricing;
