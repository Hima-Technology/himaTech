import { strapiFetch } from "./client";

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

const ORDERED = "sort=order:asc&pagination[pageSize]=100";

export const getSiteSettings = () => strapiFetch<SiteSettings>(`/api/site-setting`);
export const getServices = () => strapiFetch<Service[]>(`/api/services?${ORDERED}`);
export const getTeamMembers = () => strapiFetch<TeamMember[]>(`/api/team-members?${ORDERED}`);
export const getProcessSteps = () => strapiFetch<ProcessStep[]>(`/api/process-steps?${ORDERED}`);
export const getPricingTiers = () => strapiFetch<PricingTier[]>(`/api/pricing-tiers?${ORDERED}`);
export const getTestimonials = () => strapiFetch<Testimonial[]>(`/api/testimonials?${ORDERED}`);
export const getCmsProducts = () => strapiFetch<CmsProduct[]>(`/api/products?${ORDERED}`);
