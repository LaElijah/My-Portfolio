import { IconBrandReact } from "@tabler/icons-react"












export default function SoftSkills() {

    const tools: Tool[] = [
        {
            label: "React",
            icon: <IconBrandReact />
        }
    ]
    return (
        <>

            {tools.map(({ icon, label }: Tool) => (
                <div key={label}>{icon}</div>
            ))}

        </>
    )
}