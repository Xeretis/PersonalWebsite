import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col gap-4 justify-center items-center p-8 sm:p-16">
            <p className="text-8xl sm:text-[10rem] font-mono text-gray-300 dark:text-gray-800">404</p>
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-center">You seem lost...</h1>
            <p className="scroll-m-20 sm:text-xl text-muted-foreground text-center text-balance lg:max-w-[50vw]">
                The page you are looking for does not exist. Check the URL and make sure you didn't make a typo if you
                think this page should exist.
            </p>
            <Link href="/">
                <Button>Go back home</Button>
            </Link>
        </div>
    );
}
