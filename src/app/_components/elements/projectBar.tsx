import styles from "@/app/_styles/elements/projectBar.module.scss";
import Image from "next/image"


export default function ProjectBar({
  className,
  alt,
  image,
  details,
  title,
  tools
}: ProjectItem) {

  return (
    
    <div className={`${className} ${styles.container}`}>

        <div>
          <h2>{title}</h2>
        <Image alt={alt} src={image} height={128} width={128} />
        </div>

       
        <div>
          {details}

          {tools.map(({icon, label}) => (
            <div key={label}>
              {icon}
              {label}
              </div>
          ))}
        </div>

    
    </div>
  );
}
