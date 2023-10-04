"use client"
import { useMediaQuery } from "@mantine/hooks"
import styles from "@/app/_styles/elements/tabs.module.scss"
import { useState } from "react"
import Link from "next/link"

type Link = {
    name: string,
    key: number
}

interface Props {
    links: Link[]
}


export default function LinkTabs(props: Props): JSX.Element | undefined {


    const [selected, setSelected] = useState("Home")
    const { links } = props


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
                    {links.map(({ name, key }: Link) => {
                        return (
                            <Link
                                href={`/${name.toLowerCase()}`}
                                className={(name === selected) ? styles.activeLink : styles.link}
                                key={key}
                                onClick={() => setSelected(name)}
                            >
                                {name}
                            </Link>
                        )
                    }
                    )}
            </div>

        )
    }

}