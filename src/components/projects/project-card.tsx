"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../ui/dialog";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "../ui/drawer";
import { ExternalLink, Github } from "lucide-react";
import Image, { StaticImageData } from "next/image";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { DialogHeader } from "../ui/dialog";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useState } from "react";

export interface Project {
    name: string;
    description: string;
    tags: string[];
    githubUrl?: string;
    liveUrl?: string;
    images?: StaticImageData[];
}

export const ProjectCard = ({ project }: { project: Project }) => {
    const [open, setOpen] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)");

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <div data-umami-event="project-open" data-umami-event-project={project.name}>
                        <TriggerCard project={project} />
                    </div>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{project.name}</DialogTitle>
                    </DialogHeader>
                    {project.images && <ImageCarusel project={project} />}
                    <p className="font-mono leading-7">{project.description}</p>
                    <p className="-mb-2 font-semibold">Tags:</p>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <Badge key={tag}>{tag}</Badge>
                        ))}
                    </div>
                    {(project.githubUrl || project.liveUrl) && (
                        <>
                            <p className="-mb-2 font-semibold">Links:</p>
                            <div className="flex flex-wrap gap-4">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        data-umami-event="project-github-button"
                                        data-umami-event-project={project.name}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Button variant="outline">
                                            <span className="mr-2">
                                                <Github size="1rem" />
                                            </span>
                                            Github
                                        </Button>
                                    </a>
                                )}
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        data-umami-event="project-live-button"
                                        data-umami-event-project={project.name}
                                        target="_blank"
                                    >
                                        <Button variant="default">
                                            <span className="mr-2">
                                                <ExternalLink size="1rem" />
                                            </span>
                                            Live
                                        </Button>
                                    </a>
                                )}
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <div>
                    <TriggerCard project={project} />
                </div>
            </DrawerTrigger>
            <DrawerContent className="max-h-[30rem] overflow-x-scroll">
                <DrawerHeader className="text-left">
                    <DrawerTitle>{project.name}</DrawerTitle>
                </DrawerHeader>
                <div className="grid gap-4 overflow-x-auto p-4">
                    {project.images && <ImageCarusel project={project} controls={false} />}
                    <p className="font-mono leading-7">{project.description}</p>
                    <p className="-mb-2 font-semibold">Tags:</p>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <Badge key={tag}>{tag}</Badge>
                        ))}
                    </div>
                    {(project.githubUrl || project.liveUrl) && (
                        <>
                            <p className="-mb-2 font-semibold">Links:</p>
                            <div className="flex flex-wrap gap-4">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        data-umami-event="project-github-button"
                                        data-umami-event-project={project.name}
                                        target="_blank"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Button variant="outline">
                                            <span className="mr-2">
                                                <Github size="1rem" />
                                            </span>
                                            Github
                                        </Button>
                                    </a>
                                )}
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        data-umami-event="project-live-button"
                                        data-umami-event-project={project.name}
                                        target="_blank"
                                    >
                                        <Button variant="default">
                                            <span className="mr-2">
                                                <ExternalLink size="1rem" />
                                            </span>
                                            Live
                                        </Button>
                                    </a>
                                )}
                            </div>
                        </>
                    )}
                    <DrawerClose asChild>
                        <Button variant="outline">Close</Button>
                    </DrawerClose>
                </div>
            </DrawerContent>
        </Drawer>
    );
};

const TriggerCard = ({ project }: { project: Project }) => {
    return (
        <Card className="cursor-pointer" role="button" aria-haspopup="true">
            <CardHeader className="overflow-hidden">
                <CardTitle className="truncate">{project.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="line-clamp-3 font-mono leading-7">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            {(project.githubUrl || project.liveUrl) && (
                <CardFooter>
                    <div className="flex flex-wrap gap-4">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                onClick={(e) => e.stopPropagation()}
                                data-umami-event="project-github-button"
                                data-umami-event-project={project.name}
                            >
                                <Button variant="outline" size="icon">
                                    <Github />
                                    <span className="sr-only">Github</span>
                                </Button>
                            </a>
                        )}
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank">
                                <Button
                                    variant="default"
                                    size="icon"
                                    onClick={(e) => e.stopPropagation()}
                                    data-umami-event="project-live-button"
                                    data-umami-event-project={project.name}
                                >
                                    <ExternalLink />
                                    <span className="sr-only">Live</span>
                                </Button>
                            </a>
                        )}
                    </div>
                </CardFooter>
            )}
        </Card>
    );
};

const ImageCarusel = ({ project, controls = true }: { project: Project; controls?: boolean }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Carousel className="w-full max-w-xs">
                <CarouselContent>
                    {project.images!.map((image, index) => (
                        <CarouselItem key={index}>
                            <Image
                                src={image}
                                alt={"Project image showing " + project.name}
                                className="rounded-lg"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {controls && (
                    <>
                        <CarouselPrevious />
                        <CarouselNext />
                    </>
                )}
            </Carousel>
            {!controls && project.images!.length > 1 && (
                <p className="text-sm text-muted-foreground">Swipe sideways to see more</p>
            )}
        </div>
    );
};
