import RSS from "rss";
import fs from "fs";
import path from "path";

export default async function generateRssFeed(posts: Array<{ slug: string; frontmatter: any }>) {
    console.log("Generating RSS feed");

    const site_url = process.env.NODE_ENV === "production" ? "https://xeretis.me" : "http://localhost:3000";

    const feedOptions = {
        title: "Blog posts | RSS Feed",
        description: "Welcome to this blog posts!",
        site_url: site_url,
        feed_url: `${site_url}/feed.xml`,
        image_url: `${site_url}/logo.jpeg`,
        pubDate: new Date(),
        copyright: `All rights reserved ${new Date().getFullYear()}`,
    };

    const feed = new RSS(feedOptions);

    const files = fs.readdirSync(path.join("src", "content", "posts"));

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
}
