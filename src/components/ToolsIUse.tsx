import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const ToolsIUse = () => {
    return (
        <Card className="max-w-full mb-4 break-inside-avoid">
            <CardHeader>
                <CardTitle>Tools I use</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground leading-7">For developing applications:</p>
                <p className="mb-6 font-mono text-sm">VS Code, IntelliJ Idea Professional, Rider</p>
                <p className="text-muted-foreground leading-7">For deploying my finished products:</p>
                <p className="mb-6 font-mono text-sm">Docker, Nginx</p>
                <p className="text-muted-foreground leading-7">For testing and integrating:</p>
                <p className="font-mono text-sm">OpenAPI, Postman, Github Actions</p>
            </CardContent>
        </Card>
    );
};
