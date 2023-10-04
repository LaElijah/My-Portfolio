import styles from "@/app/_styles/elements/links.module.scss"
import Link from "next/link"
import Dropdown from "./dropdown"
import LinkTabs from "./linkTabs"


type Link = {
    name: string,
    key: number
}

interface Props {
    links: Link[]
}

export default function LinkSection(props: Props): JSX.Element {

    const { links } = props


    return (
        <section className={styles.container}>

            <Dropdown links={links} /> 

            <LinkTabs links={links} />

        </section>
    )
}