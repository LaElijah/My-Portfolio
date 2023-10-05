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
    console.log(tabsArray)

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
                        labels.map(label => {
                            return (
                                <div 
                                onClick={() => setLabel(label)}
                                key={label}
                                >
                                    {label}
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