import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Set BASE_URL env var for GitHub Pages (e.g., BASE_URL=/astro-terminal-docs/)
const site = process.env.SITE_URL || "https://example.com";
const base = process.env.BASE_URL || "/";

export default defineConfig({
  site,
  base,
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
  },
});
