



import styles from "@/app/_styles/pages/projects.module.scss"
import Link from "next/link"


export default function Projects() {



    return (
        <div className={styles.container}>

            <div id="contained">            <h1>Project</h1>

                <Link href={`/projects/${1}`}>
                    Link Test
                </Link>
            </div>


        </div>
    )
}