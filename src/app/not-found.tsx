import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 sm:p-16">
            <p className="font-mono text-8xl text-gray-300 dark:text-gray-800 sm:text-[10rem]">404</p>
            <h1 className="scroll-m-20 text-center text-4xl font-bold tracking-tight lg:text-5xl">You seem lost...</h1>
            <p className="scroll-m-20 text-balance text-center text-muted-foreground sm:text-xl lg:max-w-[50vw]">
                The page you are looking for does not exist. Check the URL and make sure you didn't make a typo if you
                think this page should exist.
            </p>
            <Link href="/">
                <Button>Go back home</Button>
            </Link>
        </div>
    );
}
