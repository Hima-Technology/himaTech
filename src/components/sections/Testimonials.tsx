interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

/**
 * Renders nothing until real client testimonials are secured and added via
 * Sanity (see codev/specs/1-cms-relaunch.md) — no fabricated quotes ship.
 */
export function Testimonials({ items = [] }: { items?: Testimonial[] }) {
  if (items.length === 0) return null;

  return (
    <section className="py-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((item) => (
            <blockquote key={item.name} className="rounded-xl bg-neutral-50 p-8">
              <p className="text-neutral-700">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-4 text-sm font-semibold text-brand-900">
                {item.name}
                <span className="block font-normal text-neutral-600">{item.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
