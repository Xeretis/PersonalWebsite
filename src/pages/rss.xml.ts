import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
    return rss({
        title: "Astro Learner | Blog",
        description: "My journey learning Astro",
        site: context.site,
        //@ts-ignore
        items: await pagesGlobToRssItems(import.meta.glob("./posts/**/*.mdx")),
        customData: `<language>en-us</language>`,
    });
}
