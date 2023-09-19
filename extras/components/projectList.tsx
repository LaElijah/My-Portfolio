import Project from "./project"
import styles from "../styles/projects/projectList.module.scss"


export default function ProjectList(props: any) {

    return (
        <div className={styles.container}>
            {props.data.map((data: any) => { return <Project key={data.key} props={data}/> })}
        </div>
    )
}