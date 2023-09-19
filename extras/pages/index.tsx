// import styles from '../globals.scss'

import About from "../components/about"
import Contact from "../components/contact"
import FeaturedCard from "../components/featuredCard"
import Hook from "../components/hook"
import ProjectList from "../components/projectList"
import List from "../components/data"
import Dropdown from "../components/dropdown"
import styles from "../styles/pages/index.module.scss"

export default function Home() {
  
  return (
    <div className={styles.page}>
      
        <Hook />
        {/* <FeaturedCard /> */}
        {/* <ProjectList data={List} /> */}
        {/* <div><h4>Want to see more? Check out the rest of my projects <span>here.</span></h4></div> */}
        {/* <About /> */}
        {/* <Contact /> */}
     </div>
  )
}