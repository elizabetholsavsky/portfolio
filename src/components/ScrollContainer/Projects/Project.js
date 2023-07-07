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
            <h4>{title}</h4>
            <p>{description}</p>
            
            {tags.map((tag, index) => (
                <span key={index}>{tag}</span>
            ))}

            <button onClick={() => openLink(deployLink)}>Visit Site</button>
            <button onClick={() => openLink(githubLink)}>View Repo</button>
            <button onClick={() => openLink(vscodeLink)}>Explore Code</button>
            
            <img src={img} alt={title}/>
        </div>
    )
}
export default Project