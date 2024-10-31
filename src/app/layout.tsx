import "./styles.css";

import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme-provider";

const site_url =
    process.env.NODE_ENV === "production" ? "https://xeretis.me" : "http://localhost:3000";

export const metadata: Metadata = {
    metadataBase: new URL(site_url),
    alternates: {
        types: {
            "application/rss+xml": `${site_url}/feed.xml`,
        },
    },
    category: "portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={GeistSans.className}>
                <Script
                    defer
                    src="https://cloud.umami.is/script.js"
                    data-website-id="9ed14374-fe9d-4f4e-816f-e6b8c11b236f"
                    data-domains="xeretis.me"
                />
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
