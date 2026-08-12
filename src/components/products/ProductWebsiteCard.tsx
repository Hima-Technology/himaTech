import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { HiCheck } from "react-icons/hi";
import { JellyCard } from "@/components/ui/JellyCard";

type Product = {
  title: string;
  description: string;
  category: string;
  features: string[];
  url: string;
  author?: string;
};

export function ProductWebsiteCard({ product }: { product: Product }) {
  return (
    <JellyCard as="article" className="glass glass-card glass-card--tension group flex h-full flex-col">
      <span className="glass glass-badge glass-badge--aqua w-fit">
        {product.category}
      </span>

      <h3 className="mt-6 font-display text-xl font-bold text-black tracking-tight dark:text-white">
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline decoration-black decoration-2 underline-offset-4 dark:decoration-white"
        >
          {product.title}
        </a>
      </h3>
      <p className="mt-2 flex-1 text-sm text-neutral-600 leading-relaxed font-medium dark:text-neutral-400">{product.description}</p>

      <ul className="mt-6 space-y-2">
        {product.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-neutral-700 font-medium dark:text-neutral-300">
            <HiCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-black dark:text-white" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-4 text-xs font-semibold text-neutral-600 dark:border-white/10 dark:text-neutral-500">
        <span>{product.author || "HimaTech Team"}</span>
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-black hover:underline underline-offset-2 dark:text-white"
        >
          Visit <HiOutlineArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </JellyCard>
  );
}

export default ProductWebsiteCard;
