"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

import { Button } from "../ui/button";
import { MailIcon } from "lucide-react";

export const ContactMe = () => {
    return (
        <Card className="max-w-full break-inside-avoid">
            <CardHeader>
                <CardTitle>Let's get in contact!</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="mb-6 leading-7">
                    I'd love to chat, so if you'd like to hit me up, just send me an email!
                </p>
                <div className="flex w-full gap-4 [&>*]:flex-1">
                    <Button asChild>
                        <a
                            href="mailto:ocskon@gmail.com"
                            data-umami-event="home-contact-me-email-button"
                        >
                            Contact me <MailIcon className="ml-2 size-4" />
                        </a>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};
