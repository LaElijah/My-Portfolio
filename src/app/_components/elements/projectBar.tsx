import styles from "@/app/_styles/elements/projectBar.module.scss";
import Image from "next/image"
import Pill from "./pill";
import Link from "next/link";


export default function ProjectBar({
  className,
  alt,
  image,
  details,
  title,
  tools
}: ProjectItem) {

  return (
    <>
    <h2>{title}</h2>
    

    <div className={`${styles.container} ${className} `}>
           

      <div>
        <Image alt={alt} src={image} height={200} width={300} />
      </div>


      <div className={styles.description}>

        <section >
          {details}
        </section>

        <section>
          {tools.map((tool: Tool) => (
            <Pill key={tool.label} {...tool} />
          ))}

        </section>

        <section>
          {/*TODO: Add an if statement if live link exists in object */}
          <Link href="/">Live Link</Link>
          <Link href="/">Source Code</Link>

        </section>

      </div>


    </div>
    </>
  );
}
