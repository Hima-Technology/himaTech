import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { HiCheck } from "react-icons/hi";
import { Badge } from "@/components/ui/Badge";

type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  features: string[];
  url: string;
  author?: string;
};

export function ProductWebsiteCard({ product }: { product: Product }) {
  return (
    <article className="flex h-full flex-col rounded-xl bg-white p-6 shadow-soft transition duration-250 hover:-translate-y-1 hover:shadow-soft-md">
      <Badge tone="brand" className="w-fit">
        {product.category}
      </Badge>
      <h3 className="mt-4 font-display text-lg text-brand-900">
        <a href={product.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent-600">
          {product.title}
        </a>
      </h3>
      <p className="mt-2 flex-1 text-neutral-600">{product.description}</p>

      <ul className="mt-4 space-y-2">
        {product.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-neutral-600">
            <HiCheck className="mt-0.5 flex-shrink-0 text-accent-600" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-4">
        <span className="text-sm text-neutral-500">{product.author || "HimaTech Team"}</span>
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-semibold text-accent-600 hover:text-accent-700"
        >
          Visit <HiOutlineArrowUpRight />
        </a>
      </div>
    </article>
  );
}

export default ProductWebsiteCard;
