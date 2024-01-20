import { Buffer } from "buffer";
import querystring from "querystring";

const basicAuth = Buffer.from(
    `${import.meta.env.VITE_SPOTIFY_CLIENT_ID}:${import.meta.env.VITE_SPOTIFY_CLIENT_SECRET}`
).toString("base64");

const getAccessToken = async () => {
    const response = await fetch(`https://accounts.spotify.com/api/token`, {
        method: "POST",
        headers: {
            Authorization: `Basic ${basicAuth}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: querystring.stringify({
            grant_type: "refresh_token",
            refresh_token: import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN,
        }),
    });
    return response.json();
};

export const getNowPlaying = async () => {
    const { access_token } = await getAccessToken();
    return fetch(`https://api.spotify.com/v1/me/player/currently-playing`, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
};
