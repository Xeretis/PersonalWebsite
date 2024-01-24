import { ChevronsDown } from "lucide-react";
import { DevelopmentMachine } from "@/components/home/development-machine";
import { FavoriteWebTechnology } from "@/components/home/favorite-web-technology";
import { GithubStats } from "@/components/home/github-stats";
import Image from "next/image";
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
    const basicAuth = Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString(
        "base64"
    );

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

export default async function Home() {
    const githubUserData = await getGithubData();
    const spotifyData = await getSpotifyData();

    return (
        <>
            <div className="relative h-screen flex justify-center items-center gap-16 p-8 max-md:flex-col">
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
                <div className="flex flex-col gap-4 max-w-[32rem]">
                    <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">Hi, I'm Ocskó Nándor</h1>
                    <h2 className="text-muted-foreground leading-7 font-mono">
                        I'm a Hungarian student with a passion for full-stack web development.
                    </h2>
                </div>
                <div className="absolute bottom-5 left-0 right-0 w-full flex justify-center">
                    <span className="animate-bounce w-8 h-8">
                        <ChevronsDown />
                    </span>
                </div>
            </div>
            <div className="columns-1 md:columns-2 lg:columns-3 p-4">
                <div className="break-inside-avoid">
                    <Welcome />
                    <div className="h-4"></div>
                </div>
                <div className="break-inside-avoid">
                    <GithubStats userData={githubUserData} />
                    <div className="h-4"></div>
                </div>
                <div className="break-inside-avoid">
                    <DevelopmentMachine />
                    <div className="h-4"></div>
                </div>
                <div className="break-inside-avoid">
                    <SpotifyNowPlaying spotifyData={spotifyData} />
                    <div className="h-4"></div>
                </div>
                <div className="break-inside-avoid">
                    <ToolsIUse />
                    <div className="h-4"></div>
                </div>
                <FavoriteWebTechnology />
            </div>
            <div className="w-full p-4">
                <p className="text-muted-foreground text-center">
                    Designed and made by Ocskó Nándor using{" "}
                    <a className="font-medium underline" href="https://ui.shadcn.com" target="_blank">
                        shadcn/ui
                    </a>{" "}
                    and{" "}
                    <a className="font-medium underline" href="https://nextjs.org/" target="_blank">
                        Next.js
                    </a>
                    .
                </p>
            </div>
        </>
    );
}
