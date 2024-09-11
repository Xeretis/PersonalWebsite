import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

import { ArrowRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export const CheckOutOtherContnent = () => {
    return (
        <Card className="max-w-full break-inside-avoid">
            <CardHeader>
                <CardTitle>Check out my projects!</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="mb-4 leading-7">
                    To learn more about what I do just go and check out my projects. If you're at it
                    you might as well take a look at my about page too.
                </p>
                <div className="flex w-full gap-4 [&>*]:flex-1">
                    <Button asChild>
                        <Link href="/projects">
                            Projects <ArrowRightIcon className="ml-1 size-4" />
                        </Link>
                    </Button>
                    <Button variant="secondary" asChild>
                        <Link href="/about">
                            About <ArrowRightIcon className="ml-1 size-4" />
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};
