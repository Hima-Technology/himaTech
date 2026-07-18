import { HiCheck } from "react-icons/hi";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { getPricingTiers } from "@/sanity/queries";

const FALLBACK_TIERS = [
  {
    name: "Starter Plan",
    price: "$2,500+",
    period: "/ Project",
    description: "For early-stage ideas or small projects.",
    features: [
      "Discovery session & roadmap",
      "Basic frontend development",
      "2 rounds of revisions",
      "1-week turnaround"
    ],
    highlighted: false,
  },
  {
    name: "Growth Plan",
    price: "$6,500+",
    period: "/ Project",
    description: "For growing brands or MVP launches.",
    features: [
      "End-to-end design & dev",
      "Responsive frontend & CMS",
      "Light brand styling",
      "SEO-ready & launch support",
      "2-3 weeks delivery"
    ],
    highlighted: true,
  },
  {
    name: "Custom Plan",
    price: "Custom",
    period: "",
    description: "For complex products or long-term builds.",
    features: [
      "Full product design + development",
      "Feature-rich platforms or apps",
      "Advanced backend integrations",
      "Dedicated team & PM"
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
          eyebrow="Pricing Plan"
          title={
            <>
              Plans{" "}
              <span className="font-serif italic text-neutral-400 font-light">
                That Scale With You
              </span>
            </>
          }
          description="Whether you're launching a startup or growing a product, we’ve got a plan that fits your stage — no fluff, just what you need."
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
                
                <div className="mt-6 flex items-baseline gap-1 text-white">
                  <span className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">
                    {"price" in tier ? (tier.price as string) : "$6,500+"}
                  </span>
                  <span className="text-sm font-semibold text-neutral-400">
                    {"period" in tier ? (tier.period as string) : "/ Project"}
                  </span>
                </div>

                <p className="mt-4 text-sm text-neutral-400 font-medium">
                  {tier.description}
                </p>

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
                  Get Started
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
