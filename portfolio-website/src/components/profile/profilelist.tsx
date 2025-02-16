import styles from "./myProfile.module.scss"
import { useEffect, useState } from "react";
import axios from "axios";

const github_username="arindom-s";
const leetcode_username="heisenburger123";

export default function LeetGitProfile() {
    const [solved, setSolved] = useState<number | null>(null);
    const [contributions, setContributions]=useState<number|null> (null);

    useEffect(()=>{
        axios.get(`https://leetcode-stats-api.herokuapp.com/${leetcode_username}`)
        .then(response=>setSolved(response.data.totalSolved))
        .catch(error=>console.error("Error fetching Leetcode details",error));
    },[]);

   


const profileArr=[
  {
    name:"LeetCode",
    profilelink:"https://leetcode.com/u/heisenburger123/",
    logo:"https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
    value: solved!=null? `No. of problems solved:${solved}`:"Loading...",
  },
  {
    name:"GitHub",
    profilelink:"https://github.com/arindom-s",
    logo:"https://res.cloudinary.com/dl0knguhb/image/upload/v1739629216/GitHub_q0i5eh.png",
    value: contributions!=null? `${contributions}`:"Loading..."
  }
]

  return(
    <>
    <div className={styles.ParentProfileclass}>
      {profileArr.map((profile,index)=>(
        <div key={index} className={styles.ProfileCard}>
          <a href={profile.profilelink} target="_blank">
          <img src={profile.logo}/>
          </a>
          <p>{profile.value}</p>
        </div>
      ))}
    </div>
    </>
  )
}