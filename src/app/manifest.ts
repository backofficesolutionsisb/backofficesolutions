import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "BOS",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f6fbff",
    theme_color: "#1698c9",
    lang: "en-CA",
  };
}
