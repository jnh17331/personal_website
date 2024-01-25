import './index.scss';
import React, { useEffect, useState}  from 'react';
import { Link } from 'react-router-dom';
import ArrayDisplayer from '../ArrayDisplayer';
// import pfp from '../../assets/images/pfp.JPG';
// import ml_music from '../../assets/images/projects/ml_music.png';
// import pokedex from '../../assets/images/projects/pokedex.png';
// import movie_analysis from '../../assets/images/projects/movie_analysis.png';
// import eq_leaflet from '../../assets/images/projects/eq_leaflet.png';
// import mars_webscraping from '../../assets/images/projects/mars_webscraping.png';
// import website from '../../assets/images/projects/website_capture.png';

const Home = () => {
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

    
    const cubeprojectIDs = [2, 4, 3, 5, 6, 1];

    const cubeprojects = projectlist
        .filter((project) => cubeprojectIDs.includes(project.id))
        .map((project) => ({
            id: project.id,
            name: project.name,
            description: project.description,
        }))
        .sort((a, b) => cubeprojectIDs.indexOf(a.id) - cubeprojectIDs.indexOf(b.id));

    const itemTitles = cubeprojects.map((project) => project.name);
    const itemsDescriptions = cubeprojects.map((project) => project.description);

    console.log(itemTitles)

    return (
            <main className='page'>
                <div id="stars-container">
                    <div id='stars'></div>
                    <div id='stars2'></div>
                    <div id='stars3'></div>
                </div>
                <div className='introduction'>
                    <h1>Hello world,</h1>
                    <p>My name is Jesse and I am a Data Scientist.</p>
                    {/* <img  className='picture' src={pfp} alt='Me'/> */}
                </div>
                <div id="mirrored-stars-container">
                    <div id='mirrored-stars'></div>
                    <div id='mirrored-stars2'></div>
                    <div id='mirrored-stars3'></div>
                </div>
                {/* <div className='cube-container'>
                    <Link to='/projects'>
                        <div className='cube'>
                            <div className='face front'>
                                <img className='number-one' src={ml_music} alt='ml_music'/>
                            </div>
                            <div className='face back'>
                                <img className='number-two' src={pokedex} alt='pokedex'/>
                            </div>
                            <div className='face right'>
                                <img className='number-three' src={eq_leaflet} alt='eq_leaflet'/>
                            </div>
                            <div className='face left'>
                                <img className='number-four' src={movie_analysis} alt='movie_analysis'/>
                            </div>
                            <div className='face top'>
                                <img className='number-five' src={mars_webscraping} alt='mars_webscraping'/>
                            </div>
                            <div className='face bottom'>
                                <img className='number-six' src={website} alt='website'/>
                            </div>
                        </div>
                    </Link>
                </div> */}
                <div className='project-textzone'>
                    <h1><ArrayDisplayer items={itemTitles} /></h1>
                    <ArrayDisplayer items={itemsDescriptions} />
                </div>
            </main>
    );

}

export default Home;