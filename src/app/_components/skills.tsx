


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

    const convertTabs = (tabs: Tab[], tabsTable: any = {}) => {
        

        tabs.map(({label, page}: Tab) => {
            tabsTable[label] = page
        })

        return tabsTable

    }

    const tabsTabel = convertTabs(tabs)

    

    return (
        <section className={styles.container}>

            <SegmentedButton tabs={tabs}/>
          

        </section>
    )
}