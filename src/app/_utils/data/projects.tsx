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
import styles from "@/app/_styles/components/projectStack.module.scss"

const logoFormat = {
  width: 24,
  height: 24
}
export const projects: ProjectItem[] = [
  {
    className: styles.joinIt,
    favorite: true,
    title: "JoinIt",
    image: "/assets/covers/Logo_Full_Background.jpg",
    details:
      "JoinIt is a website built to facilitate resource redistribution and organization. Features include live messaging, authorized profiles, role assignation etc.",
    alt: "Join it cover image",
    tools: [
      {
        label: "NextJS",
        icon: <IconBrandNextjs {...logoFormat} />,
      },
      {
        label: "MongoDB",
        icon: <IconBrandMongodb {...logoFormat} />,
      },
      {
        label: "AWS",
        icon: <IconBrandAws {...logoFormat} />,
      },
      {
        label: "NodeJS",
        icon: <IconBrandNodejs {...logoFormat} />,
      },
      {
        label: "Websocket",
        icon: <IconPlugConnected {...logoFormat} />,
      },
      {
        label: "SCSS",
        icon: <IconBrandSass {...logoFormat} />,
      },
    ],
  },
  {
    className: styles.kensDriving,
    favorite: true,
    title: "Kens Driving",
    image: "/assets/covers/Logo_Full_Background.jpg",
    details:
      "This website is a revamped version of a local businesses older website with additional features like an admin background, and submission managment.",
    alt: "Kens driving cover image",
    tools: [
      {
        label: "NextJS",
        icon: <IconBrandNextjs {...logoFormat} />,
      },
      {
        label: "MongoDB",
        icon: <IconBrandMongodb {...logoFormat} />,
      },
      {
        label: "SCSS",
        icon: <IconBrandSass {...logoFormat} />,
      },
    ],
  },
  {
    className: styles.iirwtw,
    favorite: true,
    title: "Is It Really Warmer This Winter? (IIRWTW)",
    image: "/assets/covers/Logo_Full_Background.jpg",
    details:
      "IIRWTW is a website built to demonstrate the active change in climate across the globe.",
    alt: "IIRWTW cover image",
    tools: [
      {
        label: "React",
        icon: <IconBrandReact {...logoFormat} />,
      },
      {
        label: "Redis",
        icon:<DiRedis style={{ width: 24, height: 24}} {...logoFormat} />,
      },
    ],
  },
];
