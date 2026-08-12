import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <Container className="max-w-lg">
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-neutral-600 dark:text-neutral-500">404</p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">Page not found</h1>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Button href="/" size="lg" className="mt-8">
          Back to Home
        </Button>
      </Container>
    </div>
  );
}
