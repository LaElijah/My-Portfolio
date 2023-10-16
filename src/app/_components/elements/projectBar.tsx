


import styles from "@/app/_styles/elements/projectBar.module.scss"





export default function ProjectBar(props: ProjectItem) {

console.log(props)

    return (
        <section>
            <main>
                {props.title}



            </main>





            <footer>



            </footer>
        </section>
    )
}