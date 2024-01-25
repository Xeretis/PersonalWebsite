import "@/styles/highlight-js/github-dark.css";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MdxLink } from "@/components/blog/mdx/custom-link";
import { Metadata } from "next";
import { SiteNavigation } from "@/components/site-navigation";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import readingDuration from "reading-duration";
import rehypeHighlight from "rehype-highlight";

export async function generateStaticParams() {
    const files = fs.readdirSync(path.join("src", "content", "posts"));

    const paths = files.map((filename) => ({
        slug: filename.replace(".mdx", ""),
    }));

    return paths;
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
    const post = getPost(params);

    return {
        title: post.frontmatter.title,
        description: post.frontmatter.description,
        category: "technology",
        openGraph: {
            determiner:
                post.frontmatter.title.startsWith("A ") || post.frontmatter.title.startsWith("An ")
                    ? "auto"
                    : post.frontmatter.title.startsWith("The ")
                    ? "the"
                    : "",
            type: "article",
        },
    };
}

function getPost({ slug }: { slug: string }) {
    const markdownFile = fs.readFileSync(path.join("src", "content", "posts", slug + ".mdx"), "utf-8");

    const { data, content } = matter(markdownFile);

    return {
        frontmatter: data,
        slug,
        content,
    };
}

const site_url = process.env.NODE_ENV === "production" ? "https://xeretis.me" : "http://localhost:3000";

export default function Post({ params }: any) {
    const post = getPost(params);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.frontmatter.title,
        genre: "Technology and Software Development",
        keywords: post.frontmatter.tags.join(", "),
        url: `${site_url}/blog/posts/${post.slug}`,
        datePublished: post.frontmatter.pubDate,
        description: post.frontmatter.description,
        image: {
            "@type": "ImageObject",
            url: `${site_url}/blog/thumbnail?title=${encodeURIComponent(
                post.frontmatter.title
            )}&tags=${encodeURIComponent(post.frontmatter.tags.join(","))}`,
            width: 1200,
            height: 600,
        },
        inLanguage: "en-US",
        author: {
            "@type": "Person",
            name: "Ocskó Nándor",
            url: site_url,
        },
        creator: {
            "@type": "Person",
            name: "Ocskó Nándor",
            url: site_url,
        },
        publisher: {
            "@type": "Person",
            name: "Ocskó Nándor",
            url: site_url,
        },
    };

    const options = {
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [rehypeHighlight],
        },
    };

    return (
        <>
            <SiteNavigation />
            <div className="p-8 sm:p-16">
                <article
                    className="prose dark:prose-invert custom-prose-headings prose-h1:scroll-m-20
                        prose-h1:text-4xl prose-h1:font-bold prose-h1:tracking-tight
                        prose-h1:lg:text-5xl prose-h2:scroll-m-20 prose-h2:border-b
                        prose-h2:pb-2 prose-h2:text-3xl prose-h2:font-semibold
                        prose-h2:tracking-tight prose-h2:first:mt-0 prose-h3:scroll-m-20
                        prose-h3:text-2xl prose-h3:font-semibold prose-h3:tracking-tight
                        prose-h3:mt-0 prose-h4:scroll-m-20 prose-h4:text-xl prose-h4:font-semibold
                        prose-h4:tracking-tight prose-p:leading-7 prose-p:[&:not(:first-child)]:mt-6
                        prose-blockquote:mt-6 prose-blockquote:border-l-2 prose-blockquote:pl-6
                        prose-blockquote:italic prose-img:rounded-lg mx-auto"
                >
                    <h1 className="not-prose scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
                        {post.frontmatter.title}
                    </h1>
                    <div className="flex justify-between mt-2">
                        <p className="not-prose leading-7 text-muted-foreground text-sm">
                            {readingDuration(post.content, { emoji: false })}
                        </p>
                        <p className="not-prose leading-7 text-muted-foreground text-sm">
                            Published on:{" "}
                            {new Date(post.frontmatter.pubDate).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit",
                            })}
                        </p>
                    </div>
                    <MDXRemote
                        source={post.content}
                        components={{ Image: (props) => <Image {...props} />, a: MdxLink }}
                        options={options as any}
                    />
                </article>
                <div className="max-w-[65ch] mx-auto flex justify-between items-end mt-6">
                    <div className="flex-1">
                        <p className="leading-7 text-muted-foreground text-sm">Tags:</p>
                        <div className="flex flex-wrap gap-2">
                            {post.frontmatter.tags.map((tag: string) => (
                                <Badge key={tag}>{tag}</Badge>
                            ))}
                        </div>
                    </div>
                    <a href="/blog">
                        <Button variant="secondary">Back to the blog page</Button>
                    </a>
                </div>
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </>
    );
}
