import { IconBrandReact } from "@tabler/icons-react";
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
        }
    ]
    return (
        <>

            {tools.map((tool: Tool) => (
                <Pill key={tool.label} {...tool} />
            ))}

        </>
    )
}
