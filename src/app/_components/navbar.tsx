import styles from "../styles/layout/navbar.module.scss"
import LinkSection from "./elements/linkSection"
import Link from "next/link"
import Tag from "./elements/tag"

type Link = {
    name: string,
    key: number
}

interface Props {
    links: Link[]
}


export default function Navbar(props: Props): JSX.Element {
    const { links } = props

    return (
        <section className={styles.container} >

            <div className={styles.wrapper}>

                <Tag />

                <LinkSection links={links} />

            </div>


        </section>
    )
}