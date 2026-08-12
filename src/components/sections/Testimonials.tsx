import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JellyCard } from "@/components/ui/JellyCard";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

/**
 * Renders client testimonials when added via the CMS (see codev/specs/1-cms-relaunch.md).
 */
export function Testimonials({ items = [] }: { items?: Testimonial[] }) {
  if (items.length === 0) return null;

  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Hear from the Clients{" "}
              <br className="hidden sm:inline" />
              <span className="font-serif italic text-accent-600 font-light dark:text-accent-400">
                We&apos;ve Partnered With
              </span>
            </>
          }
          description="Read what our partners say about our speed, communication, and technical depth."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <JellyCard key={item.name} as="blockquote" className="glass glass-card glass-card--tension">
              <p className="text-neutral-700 text-sm leading-relaxed font-medium dark:text-neutral-300">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-6 text-sm font-semibold text-black tracking-tight dark:text-white">
                {item.name}
                <span className="block text-xs font-normal text-neutral-600 mt-1 dark:text-neutral-500">{item.role}</span>
              </footer>
            </JellyCard>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
