import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { HiCheck } from "react-icons/hi";

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
    <article className="group flex h-full flex-col rounded-3xl border border-white/10 bg-[#0c0c0c]/60 p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#0c0c0c]/90">
      <span className="w-fit rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-semibold text-neutral-300">
        {product.category}
      </span>

      <h3 className="mt-6 font-display text-xl font-bold text-white tracking-tight">
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline decoration-white decoration-2 underline-offset-4"
        >
          {product.title}
        </a>
      </h3>
      <p className="mt-2 flex-1 text-sm text-neutral-400 leading-relaxed font-medium">{product.description}</p>

      <ul className="mt-6 space-y-2">
        {product.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-neutral-300 font-medium">
            <HiCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-semibold text-neutral-500">
        <span>{product.author || "HimaTech Team"}</span>
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-white hover:underline underline-offset-2"
        >
          Visit <HiOutlineArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </article>
  );
}

export default ProductWebsiteCard;
