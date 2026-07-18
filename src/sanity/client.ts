import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";
import { projectId, dataset, apiVersion, isSanityConfigured } from "./env";

export const client = isSanityConfigured
  ? createClient({ projectId, dataset, apiVersion, useCdn: true })
  : null;

const builder = client ? imageUrlBuilder(client) : null;

export function urlFor(source: Image) {
  if (!builder) throw new Error("Sanity is not configured");
  return builder.image(source);
}

export async function sanityFetch<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  if (!client) return null;
  return client.fetch<T>(query, params);
}
