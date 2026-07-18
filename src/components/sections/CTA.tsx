import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export function CTA({ title, description, buttonText }: CTAProps) {
  return (
    <section className="bg-accent-500 py-20">
      <Container className="text-center">
        <h2 className="font-display text-display-sm text-white">
          {title || "Ready to get started?"}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
          {description || "Let's discuss how we can help your business grow."}
        </p>
        <Button href="/contact-us" variant="secondary" size="lg" className="mt-8">
          {buttonText || "Contact Us"}
        </Button>
      </Container>
    </section>
  );
}

export default CTA;

