import styles from "../styles/projects/project.module.scss"

export default function Project(props: any) {

    return (
        <div className={styles.container}>
            <img src={"../assets/blank.png"} />
       
        <div className={styles.details}>
            <h3>{props.props.title}</h3>
            <h5>{props.props.description}</h5>
            <div className={styles.buttonGroup}>
               <button><p>Live Demo</p></button>
               <button><p>Source Code</p></button>
            </div>
        </div>
        </div>
    )
}