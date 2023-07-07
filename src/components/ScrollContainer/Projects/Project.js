import './Projects.css'

import webLink from '../images/icons/web-link.svg';
import git from '../images/icons/git.svg';
import visualStudio from '../images/icons/visual-studio-code.svg';

const Project = ({
    title, 
    url,
    description,
    tags,
    deployLink,
    githubLink,
    vscodeLink,
    img
}) => {

    const openLink = (url) => {
        window.open(url, "_blank");
    };

    return (
        <div className="project-card">
            <div className='project-info'>

                <div className="project-text">
                    <h4>{title}</h4>
                    <h5><span className="project-url">
                        <a href={url} target="_blank">{url}</a>
                        </span></h5>
                    <p>{description}</p>

                    <div className="tag-container">
                        {tags.map((tag, index) => (
                        <span className="tags" key={index}>{tag}</span>
                        ))}
                    </div>
                </div>
                
                <div className="link-buttons-container">

                    <button className="deploy-link" onClick={() => openLink(deployLink)}>
                        <div>
                            <img className="project-button-icon" src= {webLink} alt="Deployed Link"/>
                            <span>Visit Site</span>
                        </div>            
                    </button>

                    <button className="github-link" onClick={() => openLink(githubLink)}>
                        <div>
                            <img className="project-button-icon" src= {git} alt="GitHub Repository Link"/>
                            <span>View Repo</span>
                        </div>         
                    </button>

                    <button className="vscode-link" onClick={() => openLink(vscodeLink)}>
                        <div>
                            <img className="project-button-icon" src= {visualStudio} alt="Visual Studios Code Link"/>
                            <span>Explore Code</span>
                        </div> 
                    </button>

                </div>
            </div>

            <div className='project-img-container'>
                <img src={img} alt={title}/>
            </div>
            
        </div>
    )
}
export default Project