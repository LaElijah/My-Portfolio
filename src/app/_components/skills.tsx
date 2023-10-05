
"use client"

import styles from "@/app/_styles/components/skills.module.scss"
import TabGroup from "./elements/TabGroup"
import TechSkills from "./elements/techSkills"
import SoftSkills from "./elements/softSkills"

type Tab = {
    label: string,
    page: JSX.Element
}

export default function Skills(): JSX.Element {

    const tabs: Tab[] = [
        {
            label: "Tech Skills",
            page: <TechSkills />
        },
        {
            label: "Soft Skills",
            page: <SoftSkills />
        },
    ]


    return (
        <section className={styles.container}>

            <TabGroup
                unstyledTabArea
                tabs={tabs}
            />


        </section>
    )
}