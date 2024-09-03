"use client";

import { Button } from "../ui/button";
import { MouseEvent } from "react";
import { Rss } from "lucide-react";

const site_url =
    process.env.NODE_ENV === "production" ? "https://xeretis.me" : "http://localhost:3000";

export const RssButton = () => {
    const onClick = (event: MouseEvent<HTMLButtonElement>) => {
        navigator.clipboard.writeText(`${site_url}/feed.xml`);
        const perviousText = event.currentTarget.innerHTML;
        event.currentTarget.innerHTML = "Copied!";
        setTimeout(() => {
            (event.target as HTMLButtonElement).innerHTML = perviousText;
        }, 2000);
    };

    return (
        <Button variant="outline" data-umami-event="blog-rss-button" onClick={onClick}>
            <span className="mr-2">
                <Rss size="1rem" />
            </span>{" "}
            Copy RSS link
        </Button>
    );
};
