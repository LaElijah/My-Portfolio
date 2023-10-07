
import styles from "@/app/_styles/pages/detailedProject.module.scss"


export default function DetailedProject({params}: any) {


    return (
        <div className={styles.container}>
            <div id="contained">
            Project: {params.id}
            </div>
        </div>
    )
}