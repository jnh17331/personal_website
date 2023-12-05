import './index.scss';
import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [projectlist, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/projects');
        const data = await response.json();

        setProjects(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='projects-page'>
      <h2>Projects</h2>
      <ul>
        {projectlist.map((project) => ( 
          <li key={project.id}>
            <strong>{project.name}</strong>: {project.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
