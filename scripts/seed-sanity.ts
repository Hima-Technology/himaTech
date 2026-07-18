/**
 * One-time content seed. Requires SANITY_API_TOKEN (write access) plus
 * NEXT_PUBLIC_SANITY_PROJECT_ID / NEXT_PUBLIC_SANITY_DATASET in the
 * environment. Run with `npm run seed`.
 *
 * Pricing tiers, process steps, and portfolio copy here are drafts —
 * confirm/edit them in Sanity Studio before real public launch.
 */
import { createClient } from "@sanity/client";
import { projectId, dataset, apiVersion } from "../src/sanity/env";
import { products } from "../src/lib/products-data";

const token = process.env.SANITY_API_TOKEN;

if (!projectId) {
  console.error("NEXT_PUBLIC_SANITY_PROJECT_ID is not set. Create a Sanity project first (npx sanity login && npx sanity init).");
  process.exit(1);
}
if (!token) {
  console.error("SANITY_API_TOKEN is not set. Create a write token in sanity.io/manage and set it in .env.local.");
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });

const SERVICES = [
  { icon: "HiOutlineCode", title: "Software Development", description: "Tailor-made web and desktop applications designed around your business processes, from first prototype to production.", order: 1 },
  { icon: "HiOutlineChip", title: "AI Solutions", description: "Custom AI models and intelligent automation — predictive analytics, natural language processing, and computer vision.", order: 2 },
  { icon: "HiOutlineChartBar", title: "Data Analytics", description: "Transform complex data into clear, actionable insight with interactive dashboards and real-time reporting.", order: 3 },
  { icon: "HiOutlineShieldCheck", title: "Cybersecurity", description: "Enterprise-grade protection with real-time threat detection, compliance management, and regular security audits.", order: 4 },
  { icon: "HiOutlineDeviceMobile", title: "Web & Mobile Development", description: "Responsive websites and native/cross-platform mobile apps built to engage users and drive conversions.", order: 5 },
  { icon: "HiOutlineLightBulb", title: "IT Consulting & Training", description: "Strategic guidance to align technology with business goals, plus training programs in IT best practices and emerging tech.", order: 6 },
];

const TEAM = [
  { name: "Usama Talib Juma", role: "Team Leader & Full Stack Developer", bio: "Visionary team leader with exceptional expertise in full stack development. Drives innovation while empowering team members to achieve their highest potential.", order: 1 },
  { name: "Seif Mwita Mgeni", role: "Mobile & Backend Developer", bio: "Versatile developer specializing in robust mobile applications and scalable backend systems.", order: 2 },
  { name: "Hussein Ali Abdulrahman", role: "Senior Data Analyst & Advisor", bio: "Experienced data analyst with remarkable insight and strategic thinking, transforming complex data into actionable intelligence.", order: 3 },
  { name: "Ahmad Sadri Abdullah", role: "Technical Director & System Architect", bio: "Brilliant system architect designing innovative technical frameworks that form the foundation of our most advanced solutions.", order: 4 },
];

const PROCESS_STEPS = [
  { title: "Discovery", description: "We learn your business, goals, and constraints through a focused kickoff call.", order: 1 },
  { title: "Strategy", description: "We scope the solution, propose an architecture, and agree the roadmap with you.", order: 2 },
  { title: "Build", description: "We design and develop in visible phases, with regular check-ins along the way.", order: 3 },
  { title: "Launch & Support", description: "We ship, monitor, and stay on as a technical partner for what comes next.", order: 4 },
];

const PRICING_TIERS = [
  { name: "Starter", description: "For a focused website or a first product prototype.", features: ["Marketing website or MVP", "Up to 8 pages/screens", "Content management", "1 round of revisions"], highlighted: false, order: 1 },
  { name: "Growth", description: "For custom software or a full product build.", features: ["Custom web or mobile application", "API & third-party integrations", "Dedicated project lead", "Weekly progress check-ins"], highlighted: true, order: 2 },
  { name: "Enterprise", description: "For ongoing engineering, security, and AI partnership.", features: ["Continuous development retainer", "Cybersecurity & compliance support", "AI/data analytics workstreams", "Priority support & SLAs"], highlighted: false, order: 3 },
];

async function seed() {
  const transaction = client.transaction();

  transaction.createIfNotExists({
    _id: "siteSettings",
    _type: "siteSettings",
    title: "Hima Technologies",
    description: "Founded in Zanzibar, Hima Technologies combines expertise in software development, AI, data analytics, and cybersecurity.",
    email: "info@himatech.co.tz",
    phone: "+255 628 404 865",
    location: "Zanzibar, Tanzania",
    showTestimonials: false,
  });

  for (const service of SERVICES) {
    transaction.createIfNotExists({ _id: `service-${service.order}`, _type: "service", ...service });
  }
  for (const member of TEAM) {
    transaction.createIfNotExists({ _id: `team-${member.order}`, _type: "teamMember", ...member });
  }
  for (const step of PROCESS_STEPS) {
    transaction.createIfNotExists({ _id: `process-${step.order}`, _type: "processStep", ...step });
  }
  for (const tier of PRICING_TIERS) {
    transaction.createIfNotExists({ _id: `pricing-${tier.order}`, _type: "pricingTier", ...tier });
  }
  for (const product of products) {
    transaction.createIfNotExists({
      _id: `product-${product.id}`,
      _type: "product",
      title: product.title,
      description: product.description,
      category: product.category,
      features: product.features,
      url: product.url,
      author: product.author,
      order: product.id,
    });
  }

  await transaction.commit();
  console.log("Seed complete. No testimonials or team photos were seeded — add photos and real testimonials in Studio.");
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
