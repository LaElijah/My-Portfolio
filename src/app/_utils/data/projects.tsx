

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


export const projects: ProjectItem[] = [
    {
        favorite: true,
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
        favorite: true,
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
        favorite: true,
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
