import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

import Link from "next/link";

export const MdxLink = (
    props: { children?: React.ReactNode } & DetailedHTMLProps<
        AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
    >
) => {
    const href = props.href;
    const isInternalLink = href && href.startsWith("/");

    if (isInternalLink) {
        return <Link href={href}>{props.children}</Link>;
    }

    return <a target="_blank" {...props} />;
};
