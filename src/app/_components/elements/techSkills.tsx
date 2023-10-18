import { IconBrandReact } from "@tabler/icons-react"



export default function TechSkills() {

    const tools: Tool[] = [
        {
            label: "React",
            icon: <IconBrandReact />
        }
    ]
    return (
        <>

            {tools.map(({ icon, label }: Tool) => (
                <div key={label}>{label}{icon}</div>
            ))}

        </>
    )
}