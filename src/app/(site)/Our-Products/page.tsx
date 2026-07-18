import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import CTA from "@/components/sections/CTA";
import ProductWebsiteCard from "@/components/products/ProductWebsiteCard";
import { products as fallbackProducts, productsMeta as meta } from "@/lib/products-data";
import { getCmsProducts } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Our Products | Hima Technologies",
  description: "Cutting-edge technology services designed to propel your business forward.",
};

export default async function ProductsPage() {
  const cmsProducts = await getCmsProducts();
  const products = cmsProducts && cmsProducts.length > 0 ? cmsProducts : fallbackProducts;

  return (
    <div className="bg-black text-white min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden border-b border-white/10 bg-[#030303]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
        <Container className="text-center relative z-10">
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-300">
            Our Work
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold tracking-tight md:text-7xl">
            Our Featured{" "}
            <span className="font-serif italic text-accent-400 font-light block sm:inline">
              Projects
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-neutral-400 leading-relaxed font-medium">
            Explore the digital products and platforms we design, build, and operate.
          </p>
        </Container>
      </section>

      <section className="py-24 bg-black">
        <Container>
          {products.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductWebsiteCard key={product.title} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center border border-white/10 rounded-3xl bg-[#0c0c0c]/40">
              <h3 className="text-xl font-bold text-white tracking-tight">No projects available at the moment</h3>
              <p className="mt-2 text-sm text-neutral-400">Please check back later</p>
            </div>
          )}
        </Container>
      </section>

      <CTA title="Ready to transform your business?" buttonText="Let's Chat!" />
    </div>
  );
}
