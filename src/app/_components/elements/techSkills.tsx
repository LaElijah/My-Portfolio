import {
    IconBrandReact,
    IconBrandNodejs,
    IconBrandSass,
    IconBrandTypescript,
    IconBrandNextjs,
    IconBrandMongodb,
    IconBrandFigma
} from "@tabler/icons-react";
import Pill from "@/app/_components/elements/pill";


export default function TechSkills() {


    const logoFormat = {
        height: 24,
        width: 24,
    }


    const tools: Tool[] = [
        {
            label: "React",
            icon: <IconBrandReact {...logoFormat} />
        },
        {
            label: "NextJS",
            icon: <IconBrandNextjs />
        },
        {
            label: "NodeJS",
            icon: <IconBrandNodejs />
        },
        {
            label: "SCSS",
            icon: <IconBrandSass />
        },
        {
            label: "MongoDB",
            icon: <IconBrandMongodb />
        },
        {
            label: "Figma",
            icon: <IconBrandFigma />
        },
        {
            label: "TypeScript",
            icon: <IconBrandTypescript />
        }
    ]
    return (
        <section>

            {tools.map((tool: Tool) => (
                <Pill key={tool.label} {...tool} />
            ))}

        </section>
    )
}
