import Image from "next/image"

type Tool = {
    label: string;
    icon: JSX.Element;
}

interface ProjectItem {
    title: string;
    image: string;
    details: string;
    alt: string;
    tools: Tool[];

}


export default function Project({
    title,
    image,
    details,
    tools,
    alt
}: ProjectItem) {


    return (
        <div>
            <h2>{title}</h2>

            <Image 
            alt={alt} 
            width={64} 
            height={64} 
            src={image} 
            />

            <h3>{details}</h3>

            {tools.map(({label, icon}): Tool => {
                return (
                    <div>
                        {label}
                        {icon}
                        </div>
                )
            })}

        </div>
    )
}