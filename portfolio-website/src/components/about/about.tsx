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
                A MERN stack fanboy who writes in Typescript cause why not type-safety.
                Been learning Go lately and it has been cool as well. When it comes to programming, my loyalty goes out to C++, my first love.
                Hobbies? Many.Quizzing is the one I am the most proud of. You might see me reading random articles on the net just because it seemed fun or maybe there is a quiz tomorrow.
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
                <p>
                </p>
        </div>
        </>
    )
}