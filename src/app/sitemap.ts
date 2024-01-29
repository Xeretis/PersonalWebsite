import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const site_url = process.env.NODE_ENV === "production" ? "https://xeretis.me" : "http://localhost:3000";

function getPosts() {
    const files = fs.readdirSync(path.join("src", "content", "posts"));

    const posts = files.map((filename) => {
        return {
            slug: filename.replace(".mdx", ""),
        };
    });

    return posts;
}

export default function sitemap(): MetadataRoute.Sitemap {
    const sitemap: MetadataRoute.Sitemap = [
        {
            url: site_url,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${site_url}/about`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.6,
        },
        {
            url: `${site_url}/projects`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${site_url}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
    ];

    const posts = getPosts();

    posts.forEach((post) => {
        sitemap.push({
            url: `${site_url}/blog/posts/${post.slug}`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.7,
        });
    });

    return sitemap;
}
