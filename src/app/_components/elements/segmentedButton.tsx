"use client"

import styles from "@/app/_styles/elements/segmentedButton.module.scss"
import { useState } from "react"

export default function SegmentedButton(props: {
    tabs: any,

}): JSX.Element {
    const { tabs } = props

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