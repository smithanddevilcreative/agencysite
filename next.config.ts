import type { NextConfig } from "next";

/**
 * Static export.
 *
 * Every route on this site is static — there is no server work at request
 * time — so the whole thing exports to plain HTML. That is what makes the
 * review deploy a drag-and-drop onto Netlify rather than a build pipeline.
 *
 * `images.unoptimized` is required by export: the optimiser is a server
 * feature. The animated WebPs already opt out of it individually for the same
 * reason (the optimiser flattens them to a single frame).
 */
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
