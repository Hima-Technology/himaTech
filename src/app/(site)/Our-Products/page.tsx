import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import CTA from "@/components/sections/CTA";
import ProductsGrid from "@/components/products/ProductsGrid";
import { products as fallbackProducts, productsMeta as meta } from "@/lib/products-data";
import { getCmsProducts } from "@/lib/cms/queries";

export const metadata: Metadata = {
  title: "Our Products | Hima Technologies",
  description: "Cutting-edge technology services designed to propel your business forward.",
};

export default async function ProductsPage() {
  const cmsProducts = await getCmsProducts();
  const products = cmsProducts && cmsProducts.length > 0 ? cmsProducts : fallbackProducts;

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24 overflow-hidden">
        <Container className="text-center relative z-10">
          <span className="glass glass-badge glass-badge--violet">
            Our Work
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold tracking-tight md:text-7xl">
            Our Featured{" "}
            <span className="font-serif italic text-accent-600 font-light block sm:inline dark:text-accent-400">
              Projects
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-neutral-600 leading-relaxed font-medium dark:text-neutral-400">
            Explore the digital products and platforms we design, build, and operate.
          </p>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          {products.length > 0 ? (
            <ProductsGrid products={products} />
          ) : (
            <div className="glass glass-card py-20 text-center">
              <h3 className="text-xl font-bold text-black tracking-tight dark:text-white">No projects available at the moment</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">Please check back later</p>
            </div>
          )}
        </Container>
      </section>

      <CTA title="Ready to transform your business?" buttonText="Let's Chat!" />
    </div>
  );
}
