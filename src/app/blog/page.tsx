import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Metadata } from "next";
import { RssButton } from "@/components/blog/rss-button";
import { SiteNavigation } from "@/components/site-navigation";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

function getPosts() {
    const files = fs.readdirSync(path.join("src", "content", "posts"));

    const posts = files.map((filename) => {
        const fileContents = fs.readFileSync(
            path.join("src", "content", "posts", filename),
            "utf-8"
        );

        const { data } = matter(fileContents);

        return {
            slug: filename.replace(".mdx", ""),
            frontmatter: data,
        };
    });

    return posts.sort((p1, p2) => {
        const d1: any = new Date(p1.frontmatter.pubDate);
        const d2: any = new Date(p2.frontmatter.pubDate);
        return d2 - d1;
    });
}

export const metadata: Metadata = {
    title: "Blog | Ocskó Nándor",
    description:
        "Hi, I'm Ocskó Nándor. This is my blog page where I ocassionally write about web development, laravel, ASP.NET Core and much more.",
    category: "technology",
};

const site_url =
    process.env.NODE_ENV === "production" ? "https://xeretis.me" : "http://localhost:3000";

export default function Blog() {
    const posts = getPosts();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Blog",
        url: `${site_url}/blog`,
        name: "Blog | Ocskó Nándor",
        description:
            "Hi, I'm Ocskó Nándor. This is my blog page where I ocassionally write about web development, laravel, ASP.NET Core and much more.",
        publisher: {
            "@type": "Person",
            name: "Ocskó Nándor",
            url: site_url,
        },
        blogPosts: posts.map((post) => ({
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
                sameAs: [
                    "https://www.linkedin.com/in/ocsk%C3%B3-n%C3%A1ndor-a81183262/",
                    "https://https://github.com/xeretis",
                    `${site_url}/about`,
                ],
            },
            creator: {
                "@type": "Person",
                name: "Ocskó Nándor",
                url: site_url,
                sameAs: [
                    "https://www.linkedin.com/in/ocsk%C3%B3-n%C3%A1ndor-a81183262/",
                    "https://https://github.com/xeretis",
                    `${site_url}/about`,
                ],
            },
            publisher: {
                "@type": "Person",
                name: "Ocskó Nándor",
                url: site_url,
                sameAs: [
                    "https://www.linkedin.com/in/ocsk%C3%B3-n%C3%A1ndor-a81183262/",
                    "https://https://github.com/xeretis",
                    `${site_url}/about`,
                ],
            },
        })),
    };

    return (
        <>
            <SiteNavigation />
            <div className="p-8 sm:p-16">
                <div className="flex flex-wrap justify-between gap-4">
                    <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
                        Blog
                    </h1>
                    <RssButton />
                </div>
                <div className="mt-10 flex flex-col gap-8">
                    {posts.map((post) => (
                        <div className="w-full" key={post.slug}>
                            <div className="flex items-baseline justify-between gap-8 overflow-hidden">
                                <div>
                                    <Link
                                        href={`/blog/posts/${post.slug}`}
                                        className="scroll-m-20 text-lg font-semibold leading-none tracking-tight first:mt-0 hover:underline sm:text-xl"
                                        data-umami-event="blog-post-button"
                                        data-umami-event-post={post.slug}
                                    >
                                        {post.frontmatter.title}
                                    </Link>
                                    <div className="max-sm:hidden">
                                        <p className="mt-2 font-mono text-sm leading-7 text-muted-foreground sm:text-base">
                                            {post.frontmatter.description}
                                        </p>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {post.frontmatter.tags.map((tag: string) => (
                                                <Badge key={tag}>{tag}</Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="sm:text-lg">
                                    {new Date(post.frontmatter.pubDate).toLocaleDateString(
                                        "en-US",
                                        {
                                            year: "numeric",
                                            month: "2-digit",
                                            day: "2-digit",
                                        }
                                    )}
                                </p>
                            </div>
                            <div className="sm:hidden">
                                <p className="mt-2 font-mono text-sm leading-7 text-muted-foreground sm:text-base">
                                    {post.frontmatter.description}
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {post.frontmatter.tags.map((tag: string) => (
                                        <Badge key={tag}>{tag}</Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="mt-6 font-mono leading-7">
                    Didn't find what you were looking for? Make sure to reach out to me through{" "}
                    <a
                        href="mailto:ocskon@gmail.com"
                        className="underline"
                        data-umami-event="blog-personal-email-button"
                    >
                        email
                    </a>{" "}
                    with any questions or ideas!
                </p>
            </div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </>
    );
}
