import styles from "../styles/layout/navbar.module.scss"
import Avatar from "./avatar"
import Dropdown from "./dropdown"




export default function Navbar() {
    const arr = [
        {link: "Home", key: 0}, 
        {link: "Projects", key: 1}, 
        {link: "Blog", key: 2}
       ]
    return (
        <div className={styles.container} >
            <div className={styles.tag}>
            <Avatar />
            <h2>Elijah Allotey</h2>
            </div>

       
        <div className={styles.dropdown} >
            <Dropdown links={arr} />
            </div>
            <div className={styles.links}>
                <a><h4>Home</h4></a>
                <a><h4>Projects</h4></a>
                <a><h4>Blog</h4></a>

            </div>
        </div>
    )
}