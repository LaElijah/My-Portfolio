import styles from "../styles/elements/technology.module.scss"

export default function Technology(props: any) {

    return (

        <div className={styles.container}>
            <img src = {`../assets/${props.props.logo}.svg`}/>
            <div className={styles.technology}>
                <h2>{props.props.title}</h2>
                <h4>{props.props.description}</h4>
            </div>
        </div>
    )
}