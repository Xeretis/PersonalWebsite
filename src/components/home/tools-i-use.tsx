import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export const ToolsIUse = () => {
    return (
        <Card className="max-w-full break-inside-avoid">
            <CardHeader>
                <CardTitle>Tools I use</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="leading-7 text-muted-foreground">For developing applications:</p>
                <p className="mb-6 font-mono font-bold">VS Code, IntelliJ Idea Professional, Rider</p>
                <p className="leading-7 text-muted-foreground">For deploying my finished products:</p>
                <p className="mb-6 font-mono font-bold">Docker, Nginx</p>
                <p className="leading-7 text-muted-foreground">For testing and integrating:</p>
                <p className="font-mono font-bold">OpenAPI, Postman, Github Actions</p>
            </CardContent>
        </Card>
    );
};
