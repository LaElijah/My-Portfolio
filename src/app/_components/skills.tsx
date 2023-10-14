
import styles from "@/app/_styles/components/skills.module.scss"
import {
    IconBrandReact,
    IconBrandNodejs,
    IconBrandSass,
    IconBrandNextjs,
    IconBrandMongodb,

} from "@tabler/icons-react"



export function PrimarySkill({ logo, label }: PrimarySkill) {

    return (
        <div
            key={label}
            className={styles.primarySkill}
        >
            {logo}
            <h3>{label}</h3>
        </div>
    )
}
export default function Skills(): JSX.Element {

    // const iconFormat = ( isMobile 
    //     ? {
    //     width: 64,
    //     height: 64
    // }
    // : {
    //     width: 128,
    //     height: 128

    // })

    const logoFormat = {
        width: 64,
        height: 64
    }


    const primarySkills: PrimarySkill[] = [

        {
            logo: <IconBrandReact {...logoFormat} />,
            label: "React"
        },

        {
            logo: <IconBrandSass {...logoFormat} />,
            label: "SCSS"
        },

        {
            logo: <IconBrandNextjs {...logoFormat}/>,
            label: "NextJS"
        },

        {
            logo: <IconBrandNodejs {...logoFormat}/>,
            label: "NodeJS / ExpressJS"
        },


        {
            logo: <IconBrandMongodb {...logoFormat}/>,
            label: "MongoDB"
        },
    ]

    

    return (
        <section className={styles.container}>

            <header className={styles.primarySkillsGroup} >
                {primarySkills.map((skill: PrimarySkill) => {
                    return <PrimarySkill {...skill} key={skill.label} />
                })}
            </header>

            <main className={styles.about}>
                <h3>Who </h3>

                <div>
                    about
                </div>

                <div>
                    skills
                </div>
            </main>



        </section>
    )
}