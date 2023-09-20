"use client"
import styles from "../../styles/elements/dropdown.module.scss"
import { useState } from "react"
import Link from "next/link"
import { useMediaQuery } from '@mantine/hooks'


type Link = {
    name: string,
    key: number
}

interface Props {
    links: Link[]
}

export default function LinkSection(props: Props): JSX.Element {

    const [selected, setSelected] = useState("Home")
    const [opened, setOpened] = useState(false)
    const { links } = props

    const isMobile: boolean | undefined = useMediaQuery('(max-width: 768px)')
    const isDesktop: boolean | undefined = useMediaQuery('(min-width: 769px)')

    return (
        <section className={styles.container}>
            {isMobile &&
                <div>
                   
                    
                </div>
            }

            {isDesktop &&

                <div className={styles.links}>
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
            }

        </section>
    )
}