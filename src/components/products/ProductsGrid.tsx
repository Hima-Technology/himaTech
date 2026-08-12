"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import ProductWebsiteCard from "@/components/products/ProductWebsiteCard";

type Product = {
  title: string;
  description: string;
  category: string;
  features: string[];
  url: string;
  author?: string;
};

export function ProductsGrid({ products }: { products: Product[] }) {
  const categories = useMemo(() => {
    const seen = new Set<string>();
    const ordered: string[] = [];
    for (const product of products) {
      if (!seen.has(product.category)) {
        seen.add(product.category);
        ordered.push(product.category);
      }
    }
    return ordered;
  }, [products]);

  const [activeCategory, setActiveCategory] = useState<string>("All");

  const visible =
    activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3">
        {["All", ...categories].map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={cn(
              "glass glass-chip !cursor-pointer",
              activeCategory === category && "is-selected"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {visible.length > 0 ? (
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((product) => (
            <ProductWebsiteCard key={product.title} product={product} />
          ))}
        </div>
      ) : (
        <div className="glass glass-card mt-12 py-20 text-center">
          <h3 className="text-xl font-bold text-black tracking-tight dark:text-white">No projects in this category yet</h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">Please check back later</p>
        </div>
      )}
    </div>
  );
}

export default ProductsGrid;
