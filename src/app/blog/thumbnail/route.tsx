import { ImageResponse } from "next/og";
import { type NextRequest } from "next/server";
import { GeistSans } from "geist/font/sans";

export const runtime = "edge";

export async function GET(request: NextRequest) {
    const params = request.nextUrl.searchParams;

    const title = params.get("title") || "Title";
    const tags = params.get("tags")?.split(",") || undefined;

    return new ImageResponse(
        (
            <div
                className={GeistSans.className}
                style={{
                    position: "relative",
                    background: "white",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 32,
                }}
            >
                <p
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        marginLeft: 16,
                        padding: 8,
                        fontSize: 24,
                        fontWeight: 600,
                        backgroundColor: "black",
                        color: "white",
                    }}
                >
                    Blog | Ocskó Nándor
                </p>
                <h1 style={{ fontSize: 54 }}>{title}</h1>
                {tags && (
                    <div
                        style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            padding: 16,
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <p
                            style={{
                                fontSize: 24,
                                fontWeight: 600,
                                lineHeight: 1,
                            }}
                        >
                            Tags:{" "}
                        </p>
                        <div
                            style={{
                                display: "flex",
                                gap: 8,
                            }}
                        >
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    style={{
                                        borderRadius: 9999,
                                        backgroundColor: "black",
                                        color: "white",
                                        paddingLeft: 16,
                                        paddingRight: 16,
                                        paddingTop: 4,
                                        paddingBottom: 4,
                                        fontWeight: 600,
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        ),
        {
            width: 1200,
            height: 600,
        }
    );
}
