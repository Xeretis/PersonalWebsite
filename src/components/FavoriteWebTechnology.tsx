import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

import exp from "constants";

export const FavoriteWebTechnology = () => {
    return (
        <Card className="max-w-full h-auto mb-4 break-inside-avoid">
            <CardHeader>
                <CardTitle>My overall favorite web technology is...</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="mb-6 font-mono text-4xl font-bold">ASP.NET Core</p>
                <p className="leading-7">
                    I think modern .NET and C# is severely underrated and personally I've always had an amazing time
                    developping and deploying .NET web applications with ASP.NET Core. Not to mention that its
                    performance is nearly unparalleled.
                </p>
                <p className="leading-7 mt-6">
                    A close second would be Laravel (especially with the TALL stack and Filament).
                </p>
            </CardContent>
        </Card>
    );
};
