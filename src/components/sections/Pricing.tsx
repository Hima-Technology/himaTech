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
    <section className="bg-black py-24 border-b border-white/10">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Plans{" "}
              <span className="font-serif italic text-accent-400 font-light">That Scale With You</span>
            </>
          }
          description="Every engagement is quoted after a discovery call — these tiers give you a starting shape, not a fixed price."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, idx) => (
            <RevealOnScroll key={tier.name} delay={idx * 0.05}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-3xl p-8 transition-all duration-300",
                  tier.highlighted
                    ? "bg-[#141414] border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.05)] scale-100 lg:scale-[1.03]"
                    : "border border-white/10 bg-[#0c0c0c]/60 hover:bg-[#0c0c0c]/80 hover:border-white/20"
                )}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider">{tier.name}</h3>
                  {tier.highlighted && (
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-black">
                      Popular
                    </span>
                  )}
                </div>

                <p className="mt-4 text-sm text-neutral-400 font-medium">{tier.description}</p>

                <ul className="mt-8 flex-1 space-y-4 text-sm">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <HiCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                      <span className="text-neutral-300 font-medium">{feature}</span>
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
