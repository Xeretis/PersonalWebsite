import { Button } from "@/components/ui/button";
import Config from "../../astro.config.mjs";
import { Rss } from "lucide-react";

export const RssButton = () => {
    return (
        <Button variant="outline" id="rss-button">
            <span className="mr-2">
                <Rss size="1rem" />
            </span>
            Copy RSS link
        </Button>
    );
};
