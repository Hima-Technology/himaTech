export interface ProductData {
  id: number;
  title: string;
  description: string;
  category: string;
  features: string[];
  url: string;
  author?: string;
}

export const products: ProductData[] = [
  {
    id: 1,
    title: "Cybersecurity Suite",
    description:
      "Enterprise-grade security solutions protecting your digital assets 24/7 with real-time threat intelligence.",
    category: "Security Solutions",
    features: ["Real-time threat detection", "Compliance management", "Data encryption", "Security audits"],
    url: "https://security.himatech.co.tz",
    author: "Security Team",
  },
  {
    id: 2,
    title: "AI Solutions",
    description: "Custom AI models that learn and adapt to your business needs, delivering intelligent automation.",
    category: "Artificial Intelligence",
    features: ["Predictive analytics", "Natural language processing", "Computer vision", "Recommendation engines"],
    url: "https://ai.himatech.co.tz",
    author: "AI Research Team",
  },
  {
    id: 3,
    title: "Data Analytics",
    description: "Transform complex data into clear, actionable insights with our powerful analytics platform.",
    category: "Business Intelligence",
    features: ["Interactive dashboards", "Real-time reporting", "Data visualization", "Custom metrics"],
    url: "https://analytics.himatech.co.tz",
    author: "Data Team",
  },
  {
    id: 4,
    title: "Custom Software",
    description: "Tailor-made applications designed specifically for your business processes and workflows.",
    category: "Software Development",
    features: ["Web applications", "Mobile solutions", "API integration", "Legacy modernization"],
    url: "https://software.himatech.co.tz",
    author: "Development Team",
  },
  {
    id: 5,
    title: "Cloud Solutions",
    description: "Scalable, secure cloud infrastructure optimized for performance and cost-efficiency.",
    category: "Cloud Services",
    features: ["Cloud migration", "Hybrid cloud", "Disaster recovery", "Cost optimization"],
    url: "https://google.com",
    author: "Cloud Team",
  },
  {
    id: 6,
    title: "Website Development",
    description: "Beautiful, high-performance websites designed to engage visitors and drive conversions.",
    category: "Web Solutions",
    features: ["Responsive design", "SEO optimized", "E-commerce ready", "CMS integration"],
    url: "https://www.himatech.co.tz",
    author: "Web Team",
  },
];

export const productsMeta = {
  title: "Our Digital Solutions",
  description: "Cutting-edge technology services designed to propel your business forward",
};
