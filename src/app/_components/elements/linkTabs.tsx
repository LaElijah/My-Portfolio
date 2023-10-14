"use client"
import { useMediaQuery } from "@mantine/hooks"
import styles from "@/app/_styles/elements/tabs.module.scss"
import { useState } from "react"
import Link from "next/link"



export default function LinkTabs({links}: { links: Link[]}): JSX.Element | undefined {


    const [selected, setSelected] = useState("Home")



    if (useMediaQuery('(min-width: 769px)')) {
        return (

            <div className={styles.container}>

                    <Link
                        href="/"
                        className={("Home" === selected) ? styles.activeLink : styles.link}
                        key={99}
                        onClick={() => setSelected("Home")}
                    >
                        Home
                    </Link>
                    {links.map(({ label, link, key }: Link): JSX.Element => {
                        return (
                            <Link
                                href={link}
                                className={(label === selected) ? styles.activeLink : styles.link}
                                key={key}
                                onClick={() => setSelected(label)}
                            >
                                {label}
                            </Link>
                        )
                    }
                    )}
            </div>

        )
    }

}