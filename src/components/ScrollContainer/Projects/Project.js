import './Projects.css'

import WebLink from '../SVG/WebLink';
import Git from '../SVG/Git';
import Code from '../SVG/Code';

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
        window.open(url, "_blank" );
    };

    return (
        <div className="project-card">
            <div className='project-info'>

                <div className="project-text">
                    <h4>{title}</h4>
                    <h5><span className="project-url">
                        <a href={url} target="_blank" rel="noreferrer">{url}</a>
                        </span></h5>
                    <p>{description}</p>

                    <div className="tag-container">
                        {tags.map((tag, index) => (
                        <span className="tags" key={index}>{tag}</span>
                        ))}
                    </div>
                </div>
                
                <div className="link-buttons-container">

                    <button className="deploy-link" onClick={() => openLink(deployLink)} rel="noreferrer">
                        <div>
                            <WebLink title="Deployed Link"/>
                            <span>Visit Site</span>
                        </div>            
                    </button>

                    <button className="github-link" onClick={() => openLink(githubLink)} rel="noreferrer">
                        <div className='button-color'>
                            <Git title="GitHub Repository Link"/>
                            <span>View Repo</span>
                        </div>         
                    </button>

                    <button className="vscode-link" onClick={() => openLink(vscodeLink)} rel="noreferrer">
                        <div className='button-color'>
                            <Code title="Visual Studios Code Link"/>
                            <span>Browse Code</span>
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