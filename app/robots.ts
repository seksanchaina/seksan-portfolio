import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://seksanchaina.github.io/seksan-portfolio/sitemap.xml",
  };
}
