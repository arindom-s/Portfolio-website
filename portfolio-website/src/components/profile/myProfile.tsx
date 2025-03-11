import styles from "./myProfile.module.scss"
import LeetGitProfile from "./profilelist";

export default function Profile(){
    return(
        <>
        <div className={styles.ProfileParent}>
            <span style={{fontSize:"1.5rem"}}>#my-Leetcode:</span>
            <hr></hr>
            <LeetGitProfile/>
        </div>
        </>
    )
}
