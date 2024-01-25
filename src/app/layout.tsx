import "./styles.css";

import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme-provider";

const site_url = process.env.NODE_ENV === "production" ? "https://xeretis.me" : "http://localhost:3000";

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
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    {children}
                </ThemeProvider>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
