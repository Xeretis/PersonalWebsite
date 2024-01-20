import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useEffect, useState } from "react";

import { Skeleton } from "./ui/skeleton";

export const GithubStats = ({ userData }) => {
    return (
        <Card className="max-w-full mb-4 break-inside-avoid">
            <CardHeader>
                <CardTitle>Github stats</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground leading-7">Total number of commits I made:</p>
                <p className="text-4xl mb-6 font-mono font-bold">
                    {userData.contributionsCollection.totalCommitContributions}
                </p>
                <p className="text-muted-foreground leading-7">Number of my public repositories:</p>
                <p className="text-4xl mb-6 font-mono font-bold">{userData.repositories.totalCount}</p>
                <p className="text-muted-foreground leading-7">Number of repositories I contributed to:</p>
                <p className="text-4xl mb-6 font-mono font-bold">{userData.repositoriesContributedTo.totalCount}</p>
                <p className="text-muted-foreground leading-7">Number of stars I received:</p>
                <p className="text-4xl font-mono font-bold">
                    {userData.repositories.nodes.reduce((acc, repo) => acc + repo.stargazers.totalCount, 0)}
                </p>
            </CardContent>
        </Card>
    );
};
