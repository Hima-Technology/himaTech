import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export function CTA({ title, description, buttonText }: CTAProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <Container className="text-center relative z-10">
        <h2 className="font-display text-4xl font-bold tracking-tight text-black md:text-5xl lg:text-6xl leading-tight dark:text-white">
          {title || "Ready to get started?"}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-neutral-600 text-sm md:text-base leading-relaxed dark:text-neutral-400">
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

