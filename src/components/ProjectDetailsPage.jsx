// src/pages/ProjectDetailsPage.jsx
// ... previous imports stay unchanged

import TaskCard from "../components/TaskCard"; //  <== IMPORT
import AddTask from "../components/AddTask"; //  <== IMPORT
import { useState, useEffect } from "react"; //  <== ADD
import { useParams } from "react-router-dom"; //  <== ADD
import { Link } from "react-router-dom"; //  <== ADD
import axios from "axios"; //  <== ADD

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com";

function ProjectDetailsPage() {
  const [project, setProject] = useState(null);
  const { projectId } = useParams();

  const getProject = () => {
    axios
      .get(`${API_URL}/projects/${projectId}?_embed=tasks`)
      .then((response) => {
        const oneProject = response.data;
        setProject(oneProject);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <div className="ProjectDetailsPage">
      {project && (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </>
      )}

      <AddTask refreshProject={getProject} projectId={projectId} />

      {project &&
        project.tasks.map((task) => (
          <TaskCard key={task.id} {...task} /> /* UPDATE */
        ))}

      <Link to="/projects">
        <button>Back to projects</button>
      </Link>

      <Link to={`/projects/edit/${projectId}`}>
        <button>Edit Project</button>
      </Link>
    </div>
  );
}

export default ProjectDetailsPage;
