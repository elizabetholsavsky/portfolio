import './Projects.css'

const Project = ({
    title, 
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
            <div className='project-text'>
                <h4>{title}</h4>
                <p>{description}</p>
                
                {tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                ))}
                <div className="link-buttons">
                    <button className="deploy-link" onClick={() => openLink(deployLink)}>Visit Site</button>
                    <button className="github-link" onClick={() => openLink(githubLink)}>View Repo</button>
                    <button className="vscode-link" onClick={() => openLink(vscodeLink)}>Explore Code</button>
                </div>
            </div>

            <div className='project-img-container'>
                <img src={img} alt={title}/>
            </div>
            
        </div>
    )
}
export default Project