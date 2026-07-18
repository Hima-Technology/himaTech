import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export function CTA({ title, description, buttonText }: CTAProps) {
  return (
    <section className="bg-black py-24 border-b border-white/10 relative overflow-hidden">
      {/* Decorative background glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-800/10 blur-[100px] pointer-events-none"
      />
      <Container className="text-center relative z-10">
        <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl leading-tight">
          {title || "Ready to get started?"}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-neutral-400 text-sm md:text-base leading-relaxed">
          {description || "Let's discuss how we can help your business grow."}
        </p>
        <Button href="/contact-us" variant="primary" size="lg" className="mt-10">
          {buttonText || "Let's Chat!"}
        </Button>
      </Container>
    </section>
  );
}

export default CTA;

