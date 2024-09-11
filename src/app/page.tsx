import { CheckOutOtherContnent } from "@/components/home/check-out-other-content";
import { ChevronsDown } from "lucide-react";
import { DevelopmentMachine } from "@/components/home/development-machine";
import { FavoriteWebTechnology } from "@/components/home/favorite-web-technology";
import { GithubStats } from "@/components/home/github-stats";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { SiteNavigation } from "@/components/site-navigation";
import { SpotifyNowPlaying } from "@/components/home/spotify-now-playing";
import { ToolsIUse } from "@/components/home/tools-i-use";
import { Welcome } from "@/components/home/welcome";
import { cn } from "@/lib/utils";
import portraitImage from "@/assets/portrait.png";
import styles from "./styles.module.css";

async function getGithubData() {
    const githubQuery = `
        query {
            user(login: "${process.env.GITHUB_USERNAME}") {
            contributionsCollection {
                totalCommitContributions
            }
            repositoriesContributedTo {
                totalCount
            }
            repositories(first: 100, isFork: false, privacy: PUBLIC) {
                totalCount
                nodes {
                stargazers {
                    totalCount
                }
                }
            }
            starredRepositories {
                totalCount
            }
            }
        }
    `;

    const githubUserData = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + process.env.GITHUB_TOKEN,
        },
        body: JSON.stringify({ query: githubQuery }),
        next: {
            revalidate: 3600,
        },
    })
        .then((response) => response.json())
        .then((data) => {
            return data.data.user;
        });

    return githubUserData;
}

const getSpotifyData = async () => {
    const basicAuth = Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
    ).toString("base64");

    const params = new URLSearchParams();
    params.append("grant_type", "refresh_token");
    params.append("refresh_token", process.env.SPOTIFY_REFRESH_TOKEN as string);

    const accessToken = await fetch(`https://accounts.spotify.com/api/token`, {
        method: "POST",
        headers: {
            Authorization: `Basic ${basicAuth}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
        next: {
            revalidate: 3540,
        },
    });

    const token = (await accessToken.json()).access_token;

    const result = await fetch(`https://api.spotify.com/v1/me/player/currently-playing`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
    });

    return (result.status === 200 ? result.json() : undefined) as Promise<any>;
};

export const metadata: Metadata = {
    title: "Home | Ocskó Nándor",
    description:
        "Hi, I'm Ocskó Nándor. This is my portfolio page. If you are interested in contacting me or you want to see what I do, you're in the right place.",
};

const site_url =
    process.env.NODE_ENV === "production" ? "https://xeretis.me" : "http://localhost:3000";

export default async function Home() {
    const githubUserData = await getGithubData();
    const spotifyData = await getSpotifyData();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Ocskó Nándor",
        url: site_url,
        sameAs: [
            "https://www.linkedin.com/in/ocsk%C3%B3-n%C3%A1ndor-a81183262/",
            "https://https://github.com/xeretis",
            `${site_url}/about`,
        ],
        email: "ocskon@gmail.com",
        gender: "male",
        knowsAbout: [
            {
                "@type": "Thing",
                name: "Full-Stack Web Development",
            },
            {
                "@type": "Thing",
                name: "ASP.NET Core",
            },
            {
                "@type": "Thing",
                name: "C#",
            },
            {
                "@type": "Thing",
                name: "Laravel",
            },
            {
                "@type": "Thing",
                name: "Livewire",
            },
            {
                "@type": "Thing",
                name: "PHP",
            },
            {
                "@type": "Thing",
                name: "React",
            },
            {
                "@type": "Thing",
                name: "Typescript",
            },
            {
                "@type": "Thing",
                name: "Tailwind CSS",
            },
            {
                "@type": "Thing",
                name: "REST API",
            },
            {
                "@type": "Thing",
                name: "Docker",
            },
        ],
        knowsLanguage: [
            {
                "@type": "Language",
                name: "Hungarian",
                alternateName: "hu",
            },
            {
                "@type": "Language",
                name: "English",
                alternateName: "en",
            },
            {
                "@type": "Language",
                name: "German",
                alternateName: "de",
            },
            {
                "@type": "Language",
                name: "French",
                alternateName: "fr",
            },
        ],
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": site_url,
        },
    };

    return (
        <>
            <div className="relative flex h-screen items-center justify-center gap-16 p-8 bg-dot-black/[0.2] dark:bg-dot-white/[0.2] max-md:flex-col ">
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
                <SiteNavigation absolute />
                <Image
                    src={portraitImage}
                    alt="Portrait"
                    className={cn(
                        "h-[200px] w-[200px] lg:h-[400px] lg:w-[400px] object-cover",
                        styles["portrait-image"]
                    )}
                    priority
                />
                <div className="flex max-w-[32rem] flex-col gap-4">
                    <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
                        Hi, I'm Ocskó Nándor
                    </h1>
                    <h2 className="font-mono leading-7 text-muted-foreground">
                        I'm a Hungarian student with a passion for full-stack web development.
                    </h2>
                </div>
                <div className="absolute inset-x-0 bottom-5 flex w-full justify-center">
                    <Link
                        className="size-8 animate-bounce"
                        href="#widgets"
                        data-umami-event="home-scroll-down-button"
                    >
                        <ChevronsDown />
                    </Link>
                </div>
            </div>
            <div className="columns-1 p-4 md:columns-2 lg:columns-3" id="widgets">
                <div className="break-inside-avoid">
                    <Welcome />
                    <div className="h-4"></div>
                </div>
                <div className="break-inside-avoid">
                    <GithubStats userData={githubUserData} />
                    <div className="h-4"></div>
                </div>

                <div className="break-inside-avoid">
                    <ToolsIUse />
                    <div className="h-4"></div>
                </div>
                {spotifyData && (
                    <div className="break-inside-avoid">
                        <SpotifyNowPlaying spotifyData={spotifyData} />
                        <div className="h-4"></div>
                    </div>
                )}
                <div className="break-inside-avoid">
                    <DevelopmentMachine />
                    <div className="h-4"></div>
                </div>
                <div className="break-inside-avoid">
                    <FavoriteWebTechnology />
                    <div className="h-4"></div>
                </div>
                <CheckOutOtherContnent />
            </div>
            <div className="w-full p-4">
                <p className="text-center text-muted-foreground">
                    Designed and made by Ocskó Nándor using{" "}
                    <a
                        className="font-medium underline"
                        href="https://ui.shadcn.com"
                        data-umami-event="shadcn-button"
                        target="_blank"
                    >
                        shadcn/ui
                    </a>{" "}
                    and{" "}
                    <a
                        className="font-medium underline"
                        href="https://nextjs.org/"
                        data-umami-event="nextjs-button"
                        target="_blank"
                    >
                        Next.js
                    </a>
                    .
                </p>
            </div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </>
    );
}
