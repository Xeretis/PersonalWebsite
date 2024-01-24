import { ProjectCard } from "@/components/projects/project-card";
import { SiteNavigation } from "@/components/site-navigation";
import dayGuesser1Image from "@/assets/projects/DayGuesser1.png";
import docsharing1Image from "@/assets/projects/Docsharing1.png";
import lovassyApp1Image from "@/assets/projects/LovassyApp1.png";
import lovassyApp2Image from "@/assets/projects/LovassyApp2.png";
import lovassyApp3Image from "@/assets/projects/LovassyApp3.png";
import lovassyApp4Image from "@/assets/projects/LovassyApp4.png";
import nextClient1Image from "@/assets/projects/NextClient1.png";

export default function Projects() {
    const projects = [
        {
            name: "LovassyApp",
            description:
                "A whole suite of tools to make the life of a student at Lovassy László Gimnázium easier. Grade based currency system and store, voting system and much more.",
            tags: ["ASP.NET Core", "React", "Mantine", "Typescript", "Tauri", "Rust"],
            githubUrl: "https://github.com/LovassyApp/LovassyApp",
            liveUrl: "https://app.lovassy.hu",
            images: [lovassyApp1Image, lovassyApp2Image, lovassyApp3Image, lovassyApp4Image],
        },
        {
            name: "QrTagger",
            description:
                "A web application that makes it easier for anyone that finds yout lost items to return them to you. It allows you to create QR codes that contain your contact information and anyone that scans them can instantly share thier location with you.",
            tags: ["Laravel", "Livewire", "Filament", "Tailwind CSS", "Alpine.js"],
            githubUrl: "https://github.com/Xeretis/QrTagger",
        },
        {
            name: "DavidikumApp",
            description:
                "A web application for the students at Davidikum Kollégium, Veszprém. It's main feature is meal cancellations but it is actively being developed with more and more new features to come.",
            tags: ["Laravel", "Livewire", "Filament", "Tailwind CSS", "Alpine.js"],
            githubUrl: "https://github.com/Xeretis/DavidikumApp",
        },
        {
            name: "Docsharing",
            description:
                'A platform for sharing documents with others by uploading them to a "space" which can be accessed by anyone with a link or code that can even be time limited. This was my first laravel project.',
            tags: ["Laravel", "Livewire", "Tailwind CSS", "Alpine.js"],
            githubUrl: "https://github.com/Xeretis/Docsharing",
            images: [docsharing1Image],
        },
        {
            name: "CreativeScieneceTournament",
            description:
                "A web application for the KTTV competition. It allows teams of students to register, view exercises and submit their solutions and view the global leaderboard. It also provides judges with a simple interface for grading. Won 2nd place at the 2023 Neuman János Intrenational Software Product Competition.",
            tags: ["ASP.NET Core", "React", "Typescript", "Mantine"],
            githubUrl: "https://github.com/Xeretis/CreativeScienceTournament",
        },
        {
            name: "GoodHomeKftWebsite",
            description:
                "A website for a local company that does accounting and management of blocks of flats. The site is in Hungarian and it is only meant to be a simple landing page with a link to a costumer gateway.",
            tags: ["SvelteKit", "Typescript", "Tailwind CSS"],
            githubUrl: "https://github.com/Xeretis/GoodHomeKftWebsite",
            liveUrl: "https://tarsashaz-kecskemet.com/",
        },
        {
            name: "Shimmer",
            description:
                "A lightweight wrapper around Quartz.NET that reduces boilerplate and simplifies making and scheduling jobs. It supports both simple jobs and job trees (that are supposed to run in a given order).",
            tags: [".NET", "Quartz.NET"],
            githubUrl: "https://github.com/Xeretis/Shimmer",
        },
        {
            name: "NextClient",
            description:
                "A minecraft utility mod aimed at anarchy servers. It includes a comprehensive set of features, most notably a predictive crystal aura and a macro system. It was one of my first projects that use OOP.",
            tags: ["Java", "Fabric", "PanelStudio"],
            githubUrl: "https://github.com/Xeretis/NextClient/tree/rewrite",
            images: [nextClient1Image],
        },
        {
            name: "DayGuesser",
            description:
                "A simple web app that I made for practicing the Doomsday algorithm (guessing the day of the week from a date). It is localized in both Hungarian and English.",
            tags: ["React", "Mantine", "Typescript"],
            githubUrl: "https://github.com/Xeretis/DayGuesser",
            liveUrl: "https://day-guesser.vercel.app",
            images: [dayGuesser1Image],
        },
        {
            name: "ASPiderBlogEngine",
            description:
                "A headless blog engine based on the winning entry for the Dusza Árpád National Programming Contest 2022 (Web Category), which I originally made in a team of 3 with Gyimesi Máté and Tombor Péter. This was my first ever C# project.",
            tags: ["ASP.NET Core"],
            githubUrl: "https://github.com/Xeretis/ASPiderBlogEngine",
        },
        {
            name: "MentalWealth",
            description:
                "A mental health app that gives you the best of both digital and analog worlds. The features include private journaling, anonymous help sessions and optional thoughts sharing. Won 2nd place at the 2023 Git Init hackathon.",
            tags: ["ASP.NET Core", "React", "Typescript", "Mantine"],
            githubUrl: "https://github.com/franciskafieh/MentalWealth",
        },
        {
            name: "ExpressBase",
            description:
                "An opinionated boilerplate for applications using Express.js and React. It includes a whole bunch of useful features such as the MVC pattern, queues, authentication, email sending, end to end type safety, rate limiting, global state handling and more.",
            tags: ["Express.js", "React", "Mantine", "Typescript", "Prisma ORM"],
            githubUrl: "https://github.com/Xeretis/ExpressBase",
        },
        {
            name: "ArrowMenu",
            description:
                "A simple and easy to use library for creating console menus with arrow navigation in C++. It provides utilities for creating all sorts of different menu items, like cyclable lists, submenues and a lot more.",
            tags: ["C++", "Windows"],
            githubUrl: "https://github.com/Xeretis/ArrowMenu",
        },
        {
            name: "CliLib",
            description:
                "A library for creating command line interface applications in C++. It acts as a command line parser and provides a streamlined way of creating commands with options.",
            tags: ["C++"],
            githubUrl: "https://github.com/Xeretis/CliLib",
        },
    ];

    return (
        <>
            <SiteNavigation />
            <div className="p-8 sm:p-16">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">My projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                    {projects.map((project) => (
                        <ProjectCard key={project.name} project={project} />
                    ))}
                </div>
                <p className="leading-7 mt-6 font-mono">
                    And that's just the tip of the iceberg. Check out my{" "}
                    <a className="underline" href="https://github.com/Xeretis?tab=repositories&type=source">
                        GitHub
                    </a>{" "}
                    for more! Oh and just click on the cards to see more about the projects.
                </p>
            </div>
        </>
    );
}
