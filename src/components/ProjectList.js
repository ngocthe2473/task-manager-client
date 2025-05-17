import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('/api/projects')
      .then(response => setProjects(response.data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div>
      <h3>Project List</h3>
      <ul>
        {projects.map(project => (
          <li key={project._id}>{project.name} - {project.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;