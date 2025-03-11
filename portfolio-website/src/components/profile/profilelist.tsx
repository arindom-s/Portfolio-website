import styles from "./myProfile.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const leetcode_username = "heisenburger123";

export default function LeetGitProfile() {
  const [solved, setSolved] = useState<number | null>(null);
  const [solvedEasy, setSolvedEasy] = useState<number | null>(null);
  const [solvedMedium, setSolvedMedium] = useState<number | null>(null);
  const [solvedHard, setSolvedHard] = useState<number | null>(null);

  useEffect(() => {
    axios
      .get(`https://leetcode-stats-api.herokuapp.com/${leetcode_username}`)
      .then((response) => {
        setSolved(response.data.totalSolved);
        setSolvedEasy(response.data.easySolved);
        setSolvedMedium(response.data.mediumSolved);
        setSolvedHard(response.data.hardSolved);
      })
      .catch((error) =>
        console.error("Error fetching LeetCode details", error)
      );
  }, []);

  // const profileArr = [
  //   {
  //     name: "LeetCode",
  //     profilelink: `https://leetcode.com/u/${leetcode_username}/`,
  //     logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
  //     value:
  //       solved !== null
  //         ? `Total: ${solved} (Easy: ${solvedEasy}, Medium: ${solvedMedium}, Hard: ${solvedHard})`
  //         : "Loading...",
  //   },
  // ];

  // return (
  //   <div className={styles.ParentProfileclass}>
  //     <div className={styles.SolvedClass}>
  //         <div className={styles.ProfileCard}>
  //           <a href={`https://leetcode.com/u/${leetcode_username}/`} target="_blank">
  //             <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="Leetcode Logo" />
  //           </a>
  //         </div>
  //           Total Solved:{solved!==null? solved: "Loading.."}
  //           <div className={styles.SolvedBox} id={styles.easy}>
  //             <p>Easy:{solvedEasy!==null? solvedEasy: "Loading.."}</p>
  //           </div>
  //           <div className={styles.SolvedBox} id={styles.medium}>
  //            <p>Medium:{solvedMedium!==null? solvedMedium: "Loading.."}</p>
  //           </div>
  //       <div className={styles.SolvedBox} id={styles.hard}>
  //            <p>Hard:{solvedHard!==null? solvedHard:"Loading.."}</p>
  //           </div>
  //         </div>
  //   </div>
  // );
  return (
    <div className={styles.ParentProfileclass}>
      <div className={styles.SolvedBox} id={styles.total}>
        Total
        <div className={styles.HiddenCount}>{solved !== null ? solved : "Loading.."}</div>
      </div>

      <div className={styles.SolvedBox} id={styles.easy}>
        Easy
        <div className={styles.HiddenCount}>{solvedEasy !== null ? solvedEasy : "Loading.."}</div>
      </div>

      <div className={styles.SolvedBox} id={styles.medium}>
        Medium
        <div className={styles.HiddenCount}>{solvedMedium !== null ? solvedMedium : "Loading.."}</div>
      </div>

      <div className={styles.SolvedBox} id={styles.hard}>
        Hard
        <div className={styles.HiddenCount}>{solvedHard !== null ? solvedHard : "Loading.."}</div>
      </div>
    </div>
  );

  
}
