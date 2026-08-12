import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { TiltCard } from "@/components/ui/TiltCard";
import { Button } from "@/components/ui/Button";
import { products as fallbackProducts } from "@/lib/products-data";
import { getCmsProducts } from "@/lib/cms/queries";

export async function Work() {
  const cmsProducts = await getCmsProducts();
  const products = cmsProducts && cmsProducts.length > 0 ? cmsProducts : fallbackProducts;
  const highlights = products.slice(0, 3);

  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Projects"
          title={
            <>
              Our Featured{" "}
              <span className="font-serif italic text-accent-600 font-light dark:text-accent-400">
                Projects
              </span>
            </>
          }
          description="Explore some of the high-impact software systems, web applications, and security platforms we've delivered recently."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {highlights.map((product, idx) => (
            <RevealOnScroll key={product.title} delay={idx * 0.05}>
              <TiltCard className="h-full">
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass glass-card group flex h-full flex-col"
                >
                  <span className="glass glass-badge glass-badge--aqua w-fit">
                    {product.category}
                  </span>

                  <h3 className="mt-6 font-display text-xl font-bold text-black tracking-tight dark:text-white">{product.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-neutral-600 leading-relaxed font-medium dark:text-neutral-400">{product.description}</p>

                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-black group-hover:underline decoration-black decoration-2 underline-offset-4 dark:text-white dark:decoration-white">
                    Visit site
                    <HiOutlineArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </a>
              </TiltCard>
            </RevealOnScroll>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button href="/Our-Products" variant="secondary" size="lg">
            View All Projects
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default Work;
