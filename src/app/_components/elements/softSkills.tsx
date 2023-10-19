import { IconBrandReact } from "@tabler/icons-react"
import Pill from "./pill"












export default function SoftSkills() {
    const logoFormat = {
        height: 24,
        width: 24,
    }
    const tools: Tool[] = [
        {
            label: "React",
            icon: <IconBrandReact />
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