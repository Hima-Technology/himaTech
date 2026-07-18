import { HiCheck } from "react-icons/hi";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { getPricingTiers } from "@/sanity/queries";

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
          eyebrow="Packages"
          title="Straightforward packages, scoped to your project"
          description="Every engagement is quoted after a discovery call — these tiers give you a starting shape."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, idx) => (
            <RevealOnScroll key={tier.name} delay={idx * 0.05}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-2xl p-8",
                  tier.highlighted
                    ? "bg-accent-900 text-white shadow-glow-accent"
                    : "border border-neutral-200 bg-white shadow-soft"
                )}
              >
                <h3 className="font-display text-xl">{tier.name}</h3>
                <p className={cn("mt-2 text-sm", tier.highlighted ? "text-white/70" : "text-neutral-600")}>
                  {tier.description}
                </p>
                <ul className="mt-6 flex-1 space-y-3 text-sm">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <HiCheck
                        className={cn(
                          "mt-0.5 flex-shrink-0",
                          tier.highlighted ? "text-accent-400" : "text-accent-600"
                        )}
                      />
                      <span className={tier.highlighted ? "text-white/90" : "text-neutral-700"}>{feature}</span>
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
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Pricing;
