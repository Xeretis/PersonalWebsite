import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export const GithubStats = ({ userData }: { userData: any }) => {
    return (
        <Card className="max-w-full break-inside-avoid">
            <CardHeader>
                <CardTitle>My Github stats</CardTitle>
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
                    {userData.repositories.nodes.reduce((acc: any, repo: any) => acc + repo.stargazers.totalCount, 0)}
                </p>
            </CardContent>
        </Card>
    );
};
