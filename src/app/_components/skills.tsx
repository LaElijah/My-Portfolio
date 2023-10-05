


import styles from "@/app/_styles/components/skills.module.scss"
import SegmentedButton from "./elements/segmentedButton"
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
        {
            label: "Big Skills",
            page: <SoftSkills />
        }
    ]


    return (
        <section className={styles.container}>

            <SegmentedButton 
            unstyledTabArea
            tabs={tabs}
            />
          

        </section>
    )
}