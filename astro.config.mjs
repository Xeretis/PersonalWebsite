import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
    site: "https://xeretis.github.io",
    integrations: [
        react(),
        tailwind({
            applyBaseStyles: false,
        }),
        mdx(),
    ],
    output: "server",
    adapter: vercel(),
    markdown: {
        remarkPlugins: [remarkReadingTime],
    },
});
