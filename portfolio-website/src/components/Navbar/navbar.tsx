import React from 'react'
import styles from "../Navbar/navbar.module.scss"

const Navbar = () => {
  return (
    <div>
        <div className={styles.navbarparent}>
           <div id={styles.nameid}>Arindom</div>
           <div className={styles.sectionclass}>
             <div>#my-resume</div>
             <div>#tech-stack</div>
             <div>#my-projects</div>
           </div>
        </div>
    </div>
  )
}

export default Navbar