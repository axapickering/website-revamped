import NavButton from "./NavButton";
import { Link } from 'react-router-dom';

function ProjectDisplay({ project }) {
  const { name,
    description,
    stack,
    other_tech_used,
    repo_link,
    demo_link
  } = project;

  return (
  <div className="project-display-area">
    <h1>{name}</h1>
    <p>{description}</p>
    <p>Stack used: {stack}</p>
    <a href={repo_link}>Github repo</a>
    <br/>
    <a href={demo_link}>Live demo</a>
  </div>
  );
}

export default ProjectDisplay;