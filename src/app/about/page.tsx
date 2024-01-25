import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Metadata } from "next";
import { SiteNavigation } from "@/components/site-navigation";
import portraitImage from "@/assets/about/portrait.png";

export const metadata: Metadata = {
    title: "About | Ocskó Nándor",
    description:
        "Hi, I'm Ocskó Nándor. This is my about page so if you are intersted in my skillset, education (or even my hobbies) then you're in the right place.",
};

const site_url = process.env.NODE_ENV === "production" ? "https://xeretis.me" : "http://localhost:3000";

export default function About() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Ocskó Nándor",
        url: `${site_url}/about`,
        sameAs: [
            "https://www.linkedin.com/in/ocsk%C3%B3-n%C3%A1ndor-a81183262/",
            "https://https://github.com/xeretis",
            site_url,
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
            "@id": `${site_url}/about`,
        },
    };

    return (
        <>
            <SiteNavigation />
            <div className="p-8 sm:p-16">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">About me</h1>

                <div className="flex gap-8 max-sm:flex-col-reverse">
                    <div className="flex-1 mt-10">
                        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                            <span className="font-mono text-muted-foreground">01.</span> Itroduction
                        </h2>
                        <p className="leading-7 mt-6 font-mono">
                            I'm a high school student at Lovassy László Gimnázium in Hungary. I've been programming
                            since the age of 11 and currently I'm interested in full-stack web development. I'm usually
                            working with React on the front-end and ASP.NET Core or Laravel on the back-end, but I'm
                            always interested in trying something new as I'm always looking for new challenges. I
                            beleive the best way to learn is to build something, so I'm always working on new projects.
                        </p>
                        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                            <span className="font-mono text-muted-foreground">02.</span> My hobbies
                        </h2>
                        <p className="leading-7 mt-6 font-mono">
                            In my free time I like to do martial arts, watch series, do speedcubing (I average around 17
                            seconds on the 3x3x3 Rubik's cube) and of course I enjoy spending time with my friends. As a
                            martial art I do Brazilian Jiu Jitsu, but in the past I've also done Karate and Taekwondo
                            and as for my taste in series, I mostly enjoy watching sci-fi and I'm a big fan of Stargate.
                        </p>
                    </div>
                    <Image
                        src={portraitImage}
                        alt="Portrait"
                        className="float-right max-sm:w-full max-sm:h-[60vh] h-[350px] w-[250px] rounded-lg object-cover mt-10 self-center"
                        priority
                    />
                </div>
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    <span className="font-mono text-muted-foreground">03.</span> Technologies I use
                </h2>
                <div className="py-6 flex flex-wrap gap-2">
                    <Badge>ASP.NET Core</Badge>
                    <Badge>C#</Badge>
                    <Badge>Laravel</Badge>
                    <Badge>Livewire</Badge>
                    <Badge>PHP</Badge>
                    <Badge>React</Badge>
                    <Badge>Typescript</Badge>
                    <Badge>Tailwind CSS</Badge>
                    <Badge>REST APIs</Badge>
                    <Badge>Docker</Badge>
                </div>
                <p className="leading-7 text-muted-foreground font-mono">
                    (Check out the home page for details on what tools I use with these technologies)
                </p>
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </>
    );
}
