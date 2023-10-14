import Project from "./elements/project";
import styles from "@/app/_styles/components/projects.module.scss";
import { IconBrandReact } from "@tabler/icons-react";

type Tool = {
  label: string;
  icon: JSX.Element;
};

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
          icon: <IconBrandReact />,
        },
      ],
    },
    {
      title: "Kens Driving",
      image: "/assets/avatar.png",
      details: "Here are some details about kens driving",
      alt: "Kens driving cover image",
      tools: [
        {
          label: "react",
          icon: <IconBrandReact />,
        },
      ],
    },
    {
      title: "Is It Really Warmer This Winter? (IIRWTW)",
      image: "/assets/avatar.png",
      details: "Here are some details about kens driving",
      alt: "IIRWTW cover image",
      tools: [
        {
          label: "react",
          icon: <IconBrandReact />,
        },
      ],
    },
  ];
  return (
    <>
      <h2 className="label">My projects_</h2>
      <section className={styles.container}>
        {projects.map((project) => (
          <Project {...project} key={project.title} />
        ))}
      </section>
    </>
  );
}
