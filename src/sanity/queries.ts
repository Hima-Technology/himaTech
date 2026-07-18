import { sanityFetch } from "./client";

export interface SiteSettings {
  title: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  showTestimonials: boolean;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo?: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface PricingTier {
  name: string;
  description: string;
  features: string[];
  highlighted: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface CmsProduct {
  title: string;
  description: string;
  category: string;
  features: string[];
  url: string;
  author?: string;
}

export const getSiteSettings = () => sanityFetch<SiteSettings>(`*[_id == "siteSettings"][0]`);
export const getServices = () => sanityFetch<Service[]>(`*[_type == "service"] | order(order asc)`);
export const getTeamMembers = () => sanityFetch<TeamMember[]>(`*[_type == "teamMember"] | order(order asc)`);
export const getProcessSteps = () => sanityFetch<ProcessStep[]>(`*[_type == "processStep"] | order(order asc)`);
export const getPricingTiers = () => sanityFetch<PricingTier[]>(`*[_type == "pricingTier"] | order(order asc)`);
export const getTestimonials = () => sanityFetch<Testimonial[]>(`*[_type == "testimonial"] | order(order asc)`);
export const getCmsProducts = () => sanityFetch<CmsProduct[]>(`*[_type == "product"] | order(order asc)`);
