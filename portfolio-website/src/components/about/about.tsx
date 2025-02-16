import styles from "./about.module.scss"
import { Techstack } from "./techstack"

export default function About(){
    const languages=Techstack.filter((tech)=>(tech.type==="language"));
    const frameworkTools=Techstack.filter((tech)=>(tech.type==="frameworks&tools"));

    return(
        <>
        <div className={styles.aboutParent}>
            <p className={styles.aboutMeClass}>
                    Hello there! I am <span className={styles.myName}> Arindom Sarmah</span>, an engineering undergraduate from National Institute of Technology Silchar.
            </p>
            <p className={styles.aboutTextClass}>
                I am a C++ programmer passionate about solving a variety of problems in platforms like LeetCode & Codeforces.
                I am also a Full stack developer and really intrigued about the wonderful world of web!
                I am also an avid quizzer who likes to gulp in daily doses of knowledge
            </p>
            <button className={styles.contactMeBtn}>
                Contact me
            </button>
            <p style={{fontSize:"1.5rem"}}>#my-tech-stack<hr></hr></p>
            <div className={styles.techCategory}>Languages:</div>
                <div className={styles.myTechStack}>
                {languages.map((tech,index)=>(
                    <div key={index} className={styles.techItem}>
                        <a href={tech.docs} target="_blank">
                            <img src={tech.imgSrc} alt={tech.name} className={styles.techIcon}/>
                        </a>
                        <p className={styles.techName}>{tech.name}</p>
                    </div>
                ))}
                </div>
                <hr className={styles.newHr}></hr>
                <div className={styles.techCategory}>Frameworks & Tools:</div>
                <div className={styles.myTechStack}>
                    {frameworkTools.map((tech, index) => (
                        <div key={index} className={styles.techItem}>
                            <a href={tech.docs} target="_blank">
                                <img src={tech.imgSrc} alt={tech.name} className={styles.techIcon} />
                            </a>
                            <p className={styles.techName}>{tech.name}</p>
                        </div>
                    ))}
                </div>
                <hr>
                </hr>
        </div>
        </>
    )
}