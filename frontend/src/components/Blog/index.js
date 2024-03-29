import './index.scss'
import React, { useEffect, useState } from 'react';

const Blog = () => {
    const [bloglist, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('https://jesses-website-8e98c0911ba9.herokuapp.com/api/blogs');
            const data = await response.json();

            setProjects(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

    fetchData();
  }, []);

  return (
    <div className='blog-page'>
      <h2>Blog Timeline</h2>
      <div className='blog-container'>
        {bloglist
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((blog) => ( 
            <div key={blog.id} className='blog-card'>
              <strong>{blog.blog_title}</strong><br /> 
              <i>{blog.date}</i><br /><br />
              <p className='project-description'>{blog.blog_message}</p> 
            </div>
          ))}
      </div>
    </div>
  );

}

export default Blog;