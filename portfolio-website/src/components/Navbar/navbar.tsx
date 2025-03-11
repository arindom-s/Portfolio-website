import React from 'react'
import styles from "../Navbar/navbar.module.scss"

const Navbar = () => {
  return (
    <div>
        <div className={styles.navbarparent}>
           <div id={styles.nameid}>Arindom</div>
           <div className={styles.sectionclass}>
          <div>
            <a href='https://drive.google.com/file/d/1KiK2QpDEaBK06Uuezjic2ZMYvTdSpWHE/view?usp=sharing' target='_blank'>
            #my-resume</a>
          </div>
           </div>
        </div>
    </div>
  )
}

export default Navbar