import Project from "./elements/project";

type Tool = {
    label: string;
    icon: JSX.Element;
}

interface ProjectItem {
    title: string;
    image: string;
    details: string;
    alt: string;
    tools: Tool[];

}


export default function ProjectGrid() {

    const projects: ProjectItem[] = [
        {
            title: "JoinIt",
            image: "/assets/avatar.png",
            details: "here are some details about this project",
            alt: "Join it ocver image",
            tools: [
                {
                    label: "react",
                    icon: <>d</>
                }
            ]
        }
    ]
    return (
        <section>
            {projects.map(project => <Project {...project} />) }
        </section>
    )
}