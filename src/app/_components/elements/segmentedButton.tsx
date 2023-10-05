"use client"

import styles from "@/app/_styles/elements/segmentedButton.module.scss"
import { useState } from "react"

type Tab = {
    label: string,
    page: JSX.Element
}


export default function SegmentedButton(props: {
    tabs: any,

}): JSX.Element {
    const { tabs: tabsArray } = props
    const convertTabs = (tabs: Tab[], tabsTable: any = {}) => {
        tabs.map(({label, page}: Tab) => {
            tabsTable[label] = page
        })
        return tabsTable
    }

    const tabs = convertTabs(tabsArray)

    const labels = Object.keys(tabs)
    const [label, setLabel] = useState(labels[0])



    return (

        <>
            <>
                <div className={styles.container}>
                    {
                        labels.map((name: string) => {
                            return (
                                <div 
                                onClick={() => setLabel(name)}
                                key={name}
                                className={(name === label) 
                                    ? styles.activeTab : styles.tab
                                }
                                >
                                    {name}
                                </div>
                            )
                        })
                    }


                </div>
            </>

            <>
            {tabs[label]}
            </>



        </>
    )
}