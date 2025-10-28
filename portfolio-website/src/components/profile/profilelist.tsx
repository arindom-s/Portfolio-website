import styles from "./myProfile.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import {request, gql} from "graphql-request"
import { PieChart,Pie,Cell,Tooltip,Legend } from "recharts";

const graphQl_endpoint= "https://leetcode.com/graphql";

const leetcode_username = "heisenburger123";

export default function LeetGitProfile() {
  const [solved, setSolved] = useState<number | null>(null);
  const [solvedEasy, setSolvedEasy] = useState<number | null>(null);
  const [solvedMedium, setSolvedMedium] = useState<number | null>(null);
  const [solvedHard, setSolvedHard] = useState<number | null>(null);

  useEffect(()=>{
    const fetchLeetcodeData= async()=>{
      const query= gql`{matchedUser(username: "${leetcode_username}"){
       submitStatsGlobal{
       acSubmissionNum{
        difficulty
        count
       }
       }
      }
    }`;
    try{
      const response=await request(graphQl_endpoint, query);
      console.log("Leetcode API Response:", response);

      const submissions=response.matchedUser.submitStatsGlobal.acSubmissionNum;
      const easy= submissions.find((sub:any)=>sub.difficulty==="Easy")?.count||0;
      const med=submissions.find((sub:any)=>sub.difficulty==="Medium")?.count||0;
      const hard=submissions.find((sub:any)=>sub.difficulty==="Hard")?.count||0;

      setSolved(easy+med+hard);
      setSolvedEasy(easy);
      setSolvedMedium(med);
      setSolvedHard(hard);
    }
    catch{
      console.log("Error fetching details")
    }
    };
    fetchLeetcodeData();
  },[]);

  const data=[
    {name:"Easy",value: solvedEasy || 0, color:"#00C49F"},
    {name:"Medium", value: solvedMedium || 0, color: "#FFBB28"},
    {name:"Hard", value: solvedHard || 0, color: "##FF8042"}
  ];
  
  return (
     <>
     <div className={styles.ParentProfileClass}>
        <div className={styles.ProfileCard}>
          <a href={`https://leetcode.com/u/${leetcode_username}/`} target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="Leetcode Logo" />
          </a>
        </div>
        <div className={styles.ChartContainer}>
          <h2>Total solved: {solved!==null ? solved : "Loading.."} </h2>
          <PieChart width={300} height={300}>
            <Pie data={data} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value">
              {data.map((entry,index)=>(
                <Cell key={`cell-${index}`} fill={entry.color}></Cell>
              ))}
            </Pie>
            <Tooltip/>
            <Legend/>
          </PieChart>
        </div>
     </div>
     </>
  );

  
}
