// src/pages/ProjectDetailsPage.jsx

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProjectDetailsPage(props) {
  const [project, setProject] = useState(null);

  return (
    <div className="ProjectDetailsPage">
      {project && (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </>
      )}

      {project &&
        project.tasks.map((task) => (
          <li className="TaskCard card" key={task.id}>
            <h3>{task.title}</h3>
            <h4>Description:</h4>
            <p>{task.description}</p>
          </li>
        ))}

      <Link to="/projects">
        <button>Back to projects</button>
      </Link>
    </div>
  );
}

export default ProjectDetailsPage;
