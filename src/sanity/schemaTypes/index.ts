import type { SchemaTypeDefinition } from "sanity";
import siteSettings from "./siteSettings";
import service from "./service";
import product from "./product";
import teamMember from "./teamMember";
import processStep from "./processStep";
import pricingTier from "./pricingTier";
import testimonial from "./testimonial";
import faq from "./faq";

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettings,
  service,
  product,
  teamMember,
  processStep,
  pricingTier,
  testimonial,
  faq,
];

export const schema: { types: SchemaTypeDefinition[] } = { types: schemaTypes };
