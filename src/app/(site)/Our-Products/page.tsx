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
    <div className="page-transition">
      <section className="bg-brand-950 pb-20 pt-40 text-center text-white">
        <Container>
          <h1 className="font-display text-display-lg">{meta.title}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">{meta.description}</p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          {products.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductWebsiteCard key={product.title} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <h3 className="text-xl font-medium text-neutral-700">No products available at the moment</h3>
              <p className="mt-2 text-neutral-500">Please check back later</p>
            </div>
          )}
        </Container>
      </section>

      <CTA title="Ready to transform your business?" buttonText="Schedule Consultation" />
    </div>
  );
}
