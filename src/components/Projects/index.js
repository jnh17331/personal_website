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
      <div className='card-container'>
        {projectlist.map((project) => ( 
          <div key={project.id} className='project-card'>
            <img src={`http://localhost:8000${project.imageURL}`} alt={project.name} />
            <strong>{project.name}</strong><br /> 
            <i>{project.skills}</i><br /><br />
            {project.description} 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
