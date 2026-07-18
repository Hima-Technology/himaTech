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
    <section className="bg-black py-24 border-b border-white/10">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Hear from the Clients{" "}
              <br className="hidden sm:inline" />
              <span className="font-serif italic text-accent-400 font-light">
                We&apos;ve Partnered With
              </span>
            </>
          }
          description="Read what our partners say about our speed, communication, and technical depth."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <blockquote key={item.name} className="rounded-3xl border border-white/10 bg-[#0c0c0c]/60 p-8 hover:border-white/20 transition-all duration-300">
              <p className="text-neutral-300 text-sm leading-relaxed font-medium">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-6 text-sm font-semibold text-white tracking-tight">
                {item.name}
                <span className="block text-xs font-normal text-neutral-500 mt-1">{item.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
