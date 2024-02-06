import { Link } from "react-router-dom";
import { useState } from 'react';
import ProjectDisplay from './ProjectDisplay'
import './index.css';

const projects = [
  {
    name: "Job board",
    repo_link: "github.com",
    demo_link: "jobly.com",
    description: "A job posting board that allows companies to post job listings, and users to search listings.",
    stack: "React and Express",
    other_tech_used: "Lorem ipsum"
  },
  {
    name: "Property rental app",
    repo_link: "github.com",
    demo_link: "sharebnb.com",
    description: "Allows property owners to post listings for rent",
    stack: "React and Flask",
    other_tech_used: "Lorem ipsum"
  },
  {
    name: "Test third project",
    repo_link: "github.com",
    demo_link: "sharebnb.com",
    description: "Allows you to test a new description",
    stack: "React and Flask",
    other_tech_used: "Lorem ipsum"
  },
];


function ProjectsPage({ projectList = projects }) {

  const [activeProject, setActiveProject] = useState(projects[0]);

  function projectSelect(evt) {
    console.log(evt.target);

    for (let project of projectList) {
      if (project.name === evt.target.id) setActiveProject(project);
    }
  }

  const projectsDisplayed = projectList.map(p => {
    return <button onClick={projectSelect}><h1 id={p.name}>{p.name}</h1></button>;
  });

  return (<>
  <div>
    {projectsDisplayed}
  </div>
  <div>
    <ProjectDisplay project={activeProject}/>
  </div>
  </>);
}

export default ProjectsPage;