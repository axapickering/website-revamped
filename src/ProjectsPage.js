import {Link} from "react-router-dom";
import {useState} from 'react';

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
]


function ProjectsPage({ projects=projects}) {

  const [activeProject, setActiveProject] = useState(projects[0]);

  function projectSelect(name) {
      let activeProject;
      for (let project of projects) {
        if (project.name === name) activeProject = project;
      }
      setActiveProject(activeProject);
  }



  return (<> </>);
}

export default ProjectsPage;