import styles from "../styles/projects/project.module.scss"

export default function Project(props: any) {

    return (
        <div className={styles.container}>
            <h3>{props.title}</h3>
            <h5>{props.description}</h5>
            <div className={styles.buttonGroup}>
               <button>Live Demo</button>
               <button>Source Code</button>
            </div>
        </div>
    )
}