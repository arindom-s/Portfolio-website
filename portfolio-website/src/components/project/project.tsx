import styles from "./project.module.scss"

import { ProjectList } from "./projectLists"

const ProjectComp=()=>{
    return (
        <>
            #my-projects:
            <hr>
            </hr>
            <div className={styles.ProjectParentClass}>
            {ProjectList.map((project,index)=>(
                <div className={styles.ProjectCardDiv} key={index}>
                    <img src={project.imgSrc} className={styles.ProjectImg}/>
                    <hr></hr>
                    <span style={{ fontWeight: "bold", color: "#c778dd" }}>{project.name}</span>
                    <br></br>
                    <span>{project.stack}</span>
                    <p>{project.description}
                    </p>
                    <div className={styles.ProjectLink}>{project.link}</div>
                </div>
            ))}
            
        </div>
        </>
    )
}

export default ProjectComp