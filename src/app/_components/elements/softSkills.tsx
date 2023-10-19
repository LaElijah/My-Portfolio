import { 
IconUsersGroup,
IconAffiliate,
IconAddressBook,
 } from "@tabler/icons-react"
import Pill from "./pill"












export default function SoftSkills() {
    const logoFormat = {
        height: 24,
        width: 24,
    }

    const tools: Tool[] = [
        {
            label: "Analytical Thinking",
            icon: <IconAffiliate />
        },
        {
            label: "Great Cooperater",
            icon: <IconUsersGroup />
        },
        {
            label: "Customer Service",
            icon: <IconAddressBook />
        },
        {
            label: "Adaptable",
            icon: <IconAddressBook />
        },
        {
            label: "Project Managment",
            icon: <IconAddressBook />
        },
        {
            label: "Creative",
            icon: <IconAddressBook />
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