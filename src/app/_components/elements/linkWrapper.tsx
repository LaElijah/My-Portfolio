"use client"

import { useRouter } from "next/navigation"




export default function LinkWrapper(
    {
        children,
        href,
        className: styles }
        : {
            children: JSX.Element | JSX.Element[],
            href: string,
            className: string
        }
) {

const router = useRouter()

    return (
        <div className={styles} onClick={() => router.push(href)} >
            {children}
        </div>

    )
}
