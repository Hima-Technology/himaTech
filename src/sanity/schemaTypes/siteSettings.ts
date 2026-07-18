import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Site Title", type: "string" }),
    defineField({ name: "description", title: "Site Description", type: "text" }),
    defineField({ name: "email", title: "Contact Email", type: "string" }),
    defineField({ name: "phone", title: "Contact Phone", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({
      name: "showTestimonials",
      title: "Show Testimonials Section",
      type: "boolean",
      description: "Keep off until real client testimonials are added below.",
      initialValue: false,
    }),
  ],
});
