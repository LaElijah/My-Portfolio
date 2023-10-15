import Project from "./elements/project";
import styles from "@/app/_styles/components/projects.module.scss";
import {
  IconBrandAws,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandNodejs,
  IconPlugConnected,
  IconBrandSass,
} from "@tabler/icons-react";
import { DiRedis } from "react-icons/di";

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
      image: "/assets/covers/Logo_Full_Background.jpg",
      details:
        "JoinIt is a website built to facilitate resource redistribution and organization. Features include live messaging, authorized profiles, role assignation etc.",
      alt: "Join it cver image",
      tools: [
        {
          label: "NextJS",
          icon: <IconBrandNextjs />,
        },
        {
          label: "MongoDB",
          icon: <IconBrandMongodb />,
        },
        {
          label: "AWS",
          icon: <IconBrandAws />,
        },
        {
          label: "NodeJS",
          icon: <IconBrandNodejs />,
        },
        {
          label: "Websocket",
          icon: <IconPlugConnected />,
        },
        {
          label: "SCSS",
          icon: <IconBrandSass />,
        },
      ],
    },
    {
      title: "Kens Driving",
      image: "/assets/covers/Logo_Full_Background.jpg",
      details:
        "This website is a revamped version of a local businesses older website with additional features like an admin background, and submission managment.",
      alt: "Kens driving cover image",
      tools: [
        {
          label: "NextJS",
          icon: <IconBrandNextjs />,
        },
        {
          label: "MongoDB",
          icon: <IconBrandMongodb />,
        },
        {
          label: "SCSS",
          icon: <IconBrandSass />,
        },
      ],
    },
    {
      title: "Is It Really Warmer This Winter? (IIRWTW)",
      image: "/assets/covers/Logo_Full_Background.jpg",
      details:
        "IIRWTW is a website built to demonstrate the active change in climate across the globe.",
      alt: "IIRWTW cover image",
      tools: [
        {
          label: "React",
          icon: <IconBrandReact />,
        },
        {
          label: "Redis",
          icon: <DiRedis />,
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
