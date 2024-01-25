import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

import Image from "next/image";
import { Music } from "lucide-react";

export const SpotifyNowPlaying = ({ spotifyData }: { spotifyData?: any }) => {
    if (!spotifyData) return null;

    return (
        <Card className="max-w-full">
            <CardHeader>
                <CardTitle>Currently I'm listening to</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex gap-4">
                    <Image
                        src={spotifyData.item.album.images[0].url}
                        width={200}
                        height={200}
                        alt="Spotify album cover"
                        className="size-24 rounded-lg"
                    />
                    <div className="overflow-hidden">
                        <p className="overflow-hidden truncate text-2xl font-semibold leading-none tracking-tight">
                            {spotifyData.item.name}
                        </p>
                        <p className="overflow-hidden truncate text-sm leading-8 text-muted-foreground">
                            {spotifyData.item.artists.map((artist: any) => artist.name).join(", ")}
                        </p>
                        <div className="mt-4 flex gap-2 text-sm">
                            <Music className="text-muted-foreground" size="1.25rem" />
                            <p className="text-muted-foreground">
                                Powered by{" "}
                                <a className="font-medium underline" href="https://spotify.com" target="_blank">
                                    Spotify
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
