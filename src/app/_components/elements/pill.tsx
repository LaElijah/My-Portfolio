



import styles from "@/app/_styles/elements/pill.module.scss";




export default function Pill({icon, label}: Tool) {


return (

<div className={styles.container} >
{icon}
{label}
</div>)

} 
