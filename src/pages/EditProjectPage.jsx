import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com";

function EditProjectPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { projectId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/projects/${projectId}`)
      .then((response) => {
        const oneProject = response.data;
        setTitle(oneProject.title);
        setDescription(oneProject.description);
      })
      .catch((error) => console.log(error));
  }, [projectId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, description };

    axios.put(`${API_URL}/projects/${projectId}`, requestBody).then(() => {
      navigate(`/projects/${projectId}`);
    });
  };

  const deleteProject = () => {
    //  <== ADD
    // Make a DELETE request to delete the project
    axios
      .delete(`${API_URL}/projects/${projectId}`)
      .then(() => {
        // Once the delete request is resolved successfully
        // navigate back to the list of projects.
        navigate("/projects");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="EditProjectPage">
      <h3>Edit the Project</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Update Project</button>
      </form>

      {/*     ADD     */}
      <button onClick={deleteProject}>Delete Project</button>
    </div>
  );
}

export default EditProjectPage;
