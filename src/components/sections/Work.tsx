import Link from "next/link";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Badge } from "@/components/ui/Badge";
import { TiltCard } from "@/components/ui/TiltCard";
import { Button } from "@/components/ui/Button";
import { products as fallbackProducts } from "@/lib/products-data";
import { getCmsProducts } from "@/sanity/queries";

export async function Work() {
  const cmsProducts = await getCmsProducts();
  const products = cmsProducts && cmsProducts.length > 0 ? cmsProducts : fallbackProducts;
  const highlights = products.slice(0, 3);

  return (
    <section className="bg-black py-24 border-b border-white/10">
      <Container>
        <SectionHeading
          eyebrow="Our Projects"
          title={
            <>
              Our Featured{" "}
              <span className="font-serif italic text-accent-400 font-light">
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
                  className="group flex h-full flex-col rounded-3xl border border-white/10 bg-[#0c0c0c]/60 p-8 transition-all duration-300 hover:border-white/20 hover:bg-[#0c0c0c]/90"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-semibold text-neutral-300">
                      {product.category}
                    </span>
                  </div>
                  
                  {/* Mock image placeholder box that looks like a high-end UI mockup container */}
                  <div className="mt-6 aspect-[4/3] rounded-2xl bg-neutral-900 border border-white/5 overflow-hidden relative flex items-center justify-center group-hover:border-white/10 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-white/5 opacity-40" />
                    <div className="text-[10px] font-mono tracking-widest text-neutral-600 uppercase">
                      UI/UX Mockup
                    </div>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-bold text-white tracking-tight">{product.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-neutral-400 leading-relaxed font-medium">{product.description}</p>
                  
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-white group-hover:underline decoration-white decoration-2 underline-offset-4">
                    View project
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
