import type { MetadataRoute } from "next";

const BASE_URL = "https://www.himatech.co.tz";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about-us", "/contact-us", "/Our-Products", "/privacy-policy", "/terms-of-service"];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
