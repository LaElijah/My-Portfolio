

import styles from "@/app/_styles/elements/segmentedButton.module.scss"


export default function SegmentedButton(props: { selections: string[] }): JSX.Element {
    const { selections } = props

    return (
        <div className={styles.container}>
            {
                selections.map(selection => {
                    return (
                        <div>
                            {selection}
                        </div>
                    )
                })
            }


        </div>
    )
}