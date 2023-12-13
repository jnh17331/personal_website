import './index.scss';
import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [projectlist, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jesses-website-8e98c0911ba9.herokuapp.com/api/projects');
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
            <img src={`https://jesses-website-8e98c0911ba9.herokuapp.com${project.imageURL}`} alt={project.name} />
            <strong>{project.name}</strong><br /> 
            <i>{project.skills}</i><br /><br />
            <p className='project-description'>{project.description}</p> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
