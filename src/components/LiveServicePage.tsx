"use client";

import {useEffect, useState} from "react";
import {ServiceDetailPage} from "./ServiceDetailPage";
import {SERVICE_QUERY, mergeServiceContent, type CMSService} from "@/lib/sanity-services";
import type {ServicePageData} from "@/lib/service-pages";

const endpoint = "https://6y2dn5q3.api.sanity.io/v2026-10-09/data/query/production";

/**
 * Pages remain statically exportable. On each visit the published CMS data
 * refreshes in the browser, so editors do not need a Netlify redeploy for
 * visible copy and slideshow changes. GitHub remains the safe fallback.
 */
export function LiveServicePage({initialData}: {initialData: ServicePageData}) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    let cancelled = false;
    const update = async () => {
      const url = new URL(endpoint);
      url.searchParams.set("query", SERVICE_QUERY);
      url.searchParams.set("$slug", JSON.stringify(initialData.slug));

      try {
        const response = await fetch(url.toString(), {cache: "no-store"});
        if (!response.ok) return;
        const payload: {result?: CMSService | null} = await response.json();
        const cms = payload.result;
        if (!cancelled && cms?.heroTitle && cms?.standfirst && cms?.capabilities?.items?.length && cms?.faq?.items?.length) {
          setData(mergeServiceContent(initialData, cms));
        }
      } catch {
        // Keep the page functional if Sanity is temporarily unavailable.
      }
    };

    void update();
    const onVisible = () => {
      if (document.visibilityState === "visible") void update();
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      cancelled = true;
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [initialData]);

  return <ServiceDetailPage data={data} />;
}
