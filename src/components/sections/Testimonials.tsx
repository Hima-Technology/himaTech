import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

/**
 * Renders client testimonials when added via Sanity (see codev/specs/1-cms-relaunch.md).
 */
export function Testimonials({ items = [] }: { items?: Testimonial[] }) {
  if (items.length === 0) return null;

  return (
    <section className="bg-white py-24 border-b border-black/10 dark:bg-black dark:border-white/10">
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
            <blockquote key={item.name} className="rounded-3xl border border-black/10 bg-neutral-50 p-8 hover:border-black/20 transition-all duration-300 dark:border-white/10 dark:bg-[#0c0c0c]/60 dark:hover:border-white/20">
              <p className="text-neutral-700 text-sm leading-relaxed font-medium dark:text-neutral-300">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-6 text-sm font-semibold text-black tracking-tight dark:text-white">
                {item.name}
                <span className="block text-xs font-normal text-neutral-600 mt-1 dark:text-neutral-500">{item.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
