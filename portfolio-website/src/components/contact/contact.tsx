import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiMobile1 } from "react-icons/ci";
import {forwardRef} from "react";

import styles from "./contact.module.scss"
 const Contact=forwardRef<HTMLDivElement,{}>((_,ref)=>(
        <div ref={ref} className={styles.parentContact}>
                <p>#contact-me<hr/></p>
            <div className={styles.contactClass}>
               <div>
                    <CiMail />
                    arindom956@gmail.com
               </div>
               <div>
                     <FaInstagram/>
                     arindom_956
               </div>
               <div>
                <CiMobile1/>9101324239
               </div>
            </div>
        </div>
    )
)

export default Contact