import './Projects.css'

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
                    <h5><a href={url} target="_blank">{url}</a></h5>
                    <p>{description}</p>

                    <div className="tag-container">
                        {tags.map((tag, index) => (
                        <span className="tags" key={index}>{tag}</span>
                        ))}
                    </div>
                </div>
                
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