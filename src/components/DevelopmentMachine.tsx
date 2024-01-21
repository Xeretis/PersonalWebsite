import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const DevelopmentMachine = () => {
    return (
        <Card className="max-w-full break-inside-avoid">
            <CardHeader>
                <CardTitle>My development machine is a...</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="mb-6 font-mono text-4xl font-bold">2020 MacBook Air</p>
                <p className="leading-7">
                    To be specific it's the base model with the M1 chip. I travel a lot so I make great use of the
                    battery life and all my dev tools run quite well on it.
                </p>
            </CardContent>
        </Card>
    );
};
