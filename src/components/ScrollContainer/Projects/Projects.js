import {projectInfo} from './projectInfo.js';
import Project from './Project.js';

const Projects = () => {
    return (
        <section id="projects">
            <div className="content-container">

                <div className="content-text">
                    <h2> Projects </h2>
                </div>

                <div className="projects">
                    {projectInfo.map( (projectInfo, index) => {
                    const {
                        title, 
                        url,
                        description,
                        tags,
                        deployLink,
                        githubLink,
                        vscodeLink,
                        img, id} = projectInfo
                    return <Project {...projectInfo} key={projectInfo.id} />
                    })} 
                </div>

            </div>
        </section>
        )
}
export default Projects