import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await axios.get('/api/projects');
      setProjects(res.data);
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <h2>Proyectos</h2>
      {projects.map(project => (
        <div key={project._id}>
          <h3>{project.name}</h3>
          <img src={project.image} alt={project.name} />
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;
