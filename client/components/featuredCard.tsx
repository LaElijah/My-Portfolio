import styles from "../styles/projects/featuredCard.module.scss"
import Technology from "./technology"
import List from "./data"


export default function FeaturedCard() {

    
    return (
        <div className={styles.container} > {/* Container */}



            <div className={styles.cardWrapper}> {/* Project Card Wrapper */}

                <div className={styles.cardLeft} > {/* Left Side */}
                    {/* <image></image> */}
                    
                        <div className={styles.featuredCard} >
                            <h2>Project Title</h2>
                            <h4>Project Description</h4>
                            <div className={styles.buttonGroup}>
                                <button>Live demo</button>
                                <button>Source code</button>
                            </div>
                            {/* Full Width in figma   */}
                        </div>
                    
                </div>




                <div className={styles.cardRight}> {/* Right Side */}
                <h3>Techology Used</h3>
                <div className={styles.techList}>

                    {List.map((data: any) => { return <Technology key={data.key} props={data}  /> })}

                </div>

              
                    <h4>See more technology used <span>here.</span></h4>
         


                </div>

            </div>
        </div>
    )
}