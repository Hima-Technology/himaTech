import Link from "next/link";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Badge } from "@/components/ui/Badge";
import { products as fallbackProducts } from "@/lib/products-data";
import { getCmsProducts } from "@/sanity/queries";

export async function Work() {
  const cmsProducts = await getCmsProducts();
  const products = cmsProducts && cmsProducts.length > 0 ? cmsProducts : fallbackProducts;
  const highlights = products.slice(0, 3);

  return (
    <section className="bg-brand-950 py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Work"
          light
          title="Products we've built in-house"
          description="A look at the platforms HimaTech designs, builds, and operates."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {highlights.map((product, idx) => (
            <RevealOnScroll key={product.title} delay={idx * 0.05}>
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-xl border border-white/10 bg-white/5 p-8 transition duration-250 hover:-translate-y-1 hover:border-accent-500/50"
              >
                <Badge tone="accent" className="w-fit">
                  {product.category}
                </Badge>
                <h3 className="mt-4 font-display text-lg text-white">{product.title}</h3>
                <p className="mt-2 flex-1 text-sm text-white/60">{product.description}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent-400">
                  Visit site
                  <HiOutlineArrowUpRight className="transition duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </RevealOnScroll>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/Our-Products"
            className="text-sm font-semibold text-white underline decoration-accent-500 decoration-2 underline-offset-4 hover:text-accent-400"
          >
            View all products
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default Work;
