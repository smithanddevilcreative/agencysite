const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "6y2dn5q3";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-10-09";

const endpoint = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`;

export async function sanityQuery<T>(
  query: string,
  params: Record<string, string | number | boolean> = {},
): Promise<T> {
  const url = new URL(endpoint);
  url.searchParams.set("query", query);

  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(`$${key}`, JSON.stringify(value));
  }

  const response = await fetch(url, {
    headers: { Accept: "application/json" },
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`Sanity query failed: ${response.status} ${response.statusText}`);
  }

  const payload = await response.json();
  return payload.result as T;
}

export const sanityConfig = {
  projectId,
  dataset,
  apiVersion,
} as const;
