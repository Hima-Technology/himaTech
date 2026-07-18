import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", type: "text", validation: (r) => r.required() }),
    defineField({
      name: "icon",
      type: "string",
      description: "react-icons/hi name, e.g. HiOutlineCode",
      validation: (r) => r.required(),
    }),
    defineField({ name: "order", type: "number", initialValue: 0 }),
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
