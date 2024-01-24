import { Badge } from "@/components/ui/badge";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { Rss } from "lucide-react";
import { RssButton } from "@/components/blog/rss-button";
import { SiteNavigation } from "@/components/site-navigation";
import fs from "fs";
import generateRssFeed from "@/lib/rss";
import matter from "gray-matter";
import path from "path";

function getPosts() {
    const files = fs.readdirSync(path.join("src", "content", "posts"));

    const posts = files.map((filename) => {
        const fileContents = fs.readFileSync(path.join("src", "content", "posts", filename), "utf-8");

        const { data } = matter(fileContents);

        return {
            slug: filename.replace(".mdx", ""),
            frontmatter: data,
        };
    });

    return posts;
}

export default function Blog() {
    const posts = getPosts();

    return (
        <>
            <SiteNavigation />
            <div className="p-8 sm:p-16">
                <div className="flex flex-wrap justify-between gap-4">
                    <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">Blog</h1>
                    <RssButton />
                </div>
                <div className="mt-10 flex flex-col gap-8">
                    {posts.map((post) => (
                        <div className="w-full" key={post.slug}>
                            <div className="flex justify-between overflow-hidden items-baseline gap-8">
                                <div>
                                    <Link
                                        href={`/blog/posts/${post.slug}`}
                                        className="scroll-m-20 text-lg sm:text-xl font-semibold tracking-tight first:mt-0 hover:underline leading-none"
                                    >
                                        {post.frontmatter.title}
                                    </Link>
                                    <div className="max-sm:hidden">
                                        <p className="leading-7 font-mono text-muted-foreground mt-2 text-sm sm:text-base">
                                            {post.frontmatter.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {post.frontmatter.tags.map((tag: string) => (
                                                <Badge key={tag}>{tag}</Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="sm:text-lg">
                                    {new Date(post.frontmatter.pubDate).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "2-digit",
                                        day: "2-digit",
                                    })}
                                </p>
                            </div>
                            <div className="sm:hidden">
                                <p className="leading-7 font-mono text-muted-foreground mt-2 text-sm sm:text-base">
                                    {post.frontmatter.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {post.frontmatter.tags.map((tag: string) => (
                                        <Badge key={tag}>{tag}</Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="leading-7 mt-6 font-mono">
                    Didn't find what you were looking for? Make sure to reach out to me through{" "}
                    <a href="mailto:ocskon@gmail.com" className="underline">
                        email
                    </a>{" "}
                    with any questions or ideas!
                </p>
            </div>
        </>
    );
}
