import styles from "../styles/elements/technology.module.scss"

export default function Technology(props: any) {
    return (

        <div className={styles.container}>
            {/* <svg>{props.logo}</svg> */}
            <div className={styles.technology}>
                <h2>{props.title}</h2>
                <h4>{props.description}</h4>
            </div>
        </div>
    )
}