import styles from "./project.module.scss"

import { ProjectList } from "./projectLists"

const ProjectComp=()=>{
    return (
        <>
            <span style={{fontSize:"1.5rem"}}>#my-projects:</span>
            <hr>
            </hr>
            <div className={styles.ProjectParentClass}>
            {ProjectList.map((project,index)=>(
                <div className={styles.ProjectCardDiv} key={index}>
                    <img src={project.imgSrc} className={styles.ProjectImg}/>
                    <hr></hr>
                    <span style={{ fontWeight: "bold", color: "#c778dd" }}>{project.name}</span>
                    <br></br>
                    <span className={styles.stackClass}>{project.stack}</span>
                    <p>{project.description}
                    </p>
                    <a target="_blank" href={project.link}><button className={styles.Viewbtn}>Visit site!</button></a>
                </div>
            ))}
            
        </div>
        </>
    )
}

export default ProjectComp