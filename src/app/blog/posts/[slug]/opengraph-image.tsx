import fs from "fs";
import matter from "gray-matter";
import path from "path";

function getPost({ slug }: { slug: string }) {
    const markdownFile = fs.readFileSync(path.join("src", "content", "posts", slug + ".mdx"), "utf-8");

    const { data, content } = matter(markdownFile);

    return {
        frontmatter: data,
        slug,
        content,
    };
}

export const alt = "Blog | Ocskó Nándor";
export const contentType = "image/png";

const site_url = process.env.NODE_ENV === "production" ? "https://xeretis.me" : "http://localhost:3000";

export default async function OpenGraphImage({ params }: any) {
    const post = getPost(params);

    return await fetch(
        `${site_url}/blog/thumbnail?title=${encodeURIComponent(post.frontmatter.title)}&tags=${encodeURIComponent(
            post.frontmatter.tags.join(",")
        )}`
    );
}
