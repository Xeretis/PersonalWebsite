import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export const GithubStats = ({ userData }: { userData: any }) => {
    return (
        <Card className="max-w-full break-inside-avoid">
            <CardHeader>
                <CardTitle>My Github stats</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="leading-7 text-muted-foreground">Total number of commits I made:</p>
                <p className="mb-6 font-mono text-4xl font-bold">
                    {userData.contributionsCollection.totalCommitContributions}
                </p>
                <p className="leading-7 text-muted-foreground">Number of my public repositories:</p>
                <p className="mb-6 font-mono text-4xl font-bold">{userData.repositories.totalCount}</p>
                <p className="leading-7 text-muted-foreground">Number of repositories I contributed to:</p>
                <p className="mb-6 font-mono text-4xl font-bold">{userData.repositoriesContributedTo.totalCount}</p>
                <p className="leading-7 text-muted-foreground">Number of stars I received:</p>
                <p className="font-mono text-4xl font-bold">
                    {userData.repositories.nodes.reduce((acc: any, repo: any) => acc + repo.stargazers.totalCount, 0)}
                </p>
            </CardContent>
        </Card>
    );
};
