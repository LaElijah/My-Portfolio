import styles from "../styles/elements/dropdown.module.scss"
import { useState } from "react"

export default function Dropdown(props: any) {
    const [active, setActive] = useState(false)
    const [selected, setSelected] = useState("Home")



    return (
        <div className={styles.container}>
            <div className={styles.mainTab} onClick={() => { setActive(!active) }}>
                {selected}
                <img className={(active === false) ? "" : styles.hide} src={"../assets/chevron-right.svg"} />
                <img className={(active === false) ? styles.hide : "" } src={"../assets/chevron-down.svg"} />
            </div>

            <div className={(active === true) ? styles.showDropdown : styles.hideDropdown}>

                {props.links.map((data: any) => {
                    return (
                        <div className={(data.link === selected) ? styles.activeLink : styles.link} key={data.key} onClick={() => { setSelected(data.link) }}>
                            <a className={styles.links}>
                                <h3> {data.link} </h3>
                            </a>
                        </div>
                    )
                }
                )}
            </div>

        </div>
    )
}