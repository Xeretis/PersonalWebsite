import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export const Welcome = () => {
    return (
        <Card className="max-w-full break-inside-avoid">
            <CardHeader>
                <CardTitle>Welcome to my personal website!</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="leading-7">
                    I'm glad you're here! If you'd like, go ahead and check out the other pages on this website to learn
                    more about me. Oh and here you can find some cards with even more information about me.
                </p>
                <p className="mt-6 leading-7">
                    If you became interested in collaborating with me or just want to chat, feel free to contact me via
                    email (top left corner).
                </p>
            </CardContent>
        </Card>
    );
};
