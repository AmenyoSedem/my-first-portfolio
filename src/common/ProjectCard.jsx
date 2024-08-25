

function ProjectCard({src, link, header, paragraph}) {
  return (
    <a href={link} target='blank'>
        <img className='hover' src={src} alt={`${header} logo`} />
        <h3>{header}</h3>
        <p>{paragraph}</p>
    </a>
  )
}

export default ProjectCard;
