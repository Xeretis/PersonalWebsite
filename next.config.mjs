import RSS from "rss";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.scdn.co",
                port: "",
                pathname: "/image/**",
            },
        ],
    },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const files = fs.readdirSync(path.join("src", "content", "posts"));

    const posts = files.map((filename) => {
        const fileContents = fs.readFileSync(path.join("src", "content", "posts", filename), "utf-8");

        const { data } = matter(fileContents);

        return {
            slug: filename.replace(".mdx", ""),
            frontmatter: data,
        };
    });

    const site_url = process.env.NODE_ENV === "production" ? "https://xeretis.me" : "http://localhost:3000";

    const feedOptions = {
        title: "Blog posts | Ocskó Nándor",
        description:
            "Welcome to my blog! I post here ocassionally about web development, my projects, IT related stuff and many other things.",
        site_url: site_url,
        feed_url: `${site_url}/feed.xml`,
        image_url: `${site_url}/logo.png`,
        pubDate: new Date(),
        copyright: `All rights reserved ${new Date().getFullYear()}`,
    };

    const feed = new RSS(feedOptions);

    // Add each individual post to the feed.
    posts.map((post) => {
        feed.item({
            title: post.frontmatter.title,
            description: post.frontmatter.description,
            url: `${site_url}/posts/${post.slug}`,
            date: post.frontmatter.pubDate,
        });
    });

    // Write the RSS feed to a file as XML.
    fs.writeFileSync("./public/feed.xml", feed.xml({ indent: true }));

    return nextConfig;
};
