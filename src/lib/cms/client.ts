const STRAPI_URL = process.env.STRAPI_URL;
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

export const isCmsConfigured = Boolean(STRAPI_URL);

/**
 * Fetches `data` from a Strapi REST endpoint. Returns null if Strapi isn't
 * configured, unreachable, or the request fails — callers fall back to the
 * static content baked into each component.
 */
export async function strapiFetch<T>(path: string): Promise<T | null> {
  if (!STRAPI_URL) return null;

  try {
    const res = await fetch(`${STRAPI_URL}${path}`, {
      headers: STRAPI_API_TOKEN ? { Authorization: `Bearer ${STRAPI_API_TOKEN}` } : undefined,
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const json = await res.json();
    return (json.data ?? null) as T | null;
  } catch {
    return null;
  }
}
