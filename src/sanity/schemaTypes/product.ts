import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", type: "text", validation: (r) => r.required() }),
    defineField({ name: "category", type: "string" }),
    defineField({ name: "features", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "url", type: "url" }),
    defineField({ name: "author", type: "string" }),
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
    defineField({ name: "order", type: "number", initialValue: 0 }),
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
