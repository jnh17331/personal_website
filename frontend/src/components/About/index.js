import './index.scss'
import pfp from '../../assets/images/pfp.JPG'
import { Link } from 'react-router-dom';

const About = () => {

    return (
        
        <div className='container about-page'>
            <img  className='about-picture' src={pfp} alt='Me'/>
                <Link to='/contact' className='contactme-button'>
                    <button>Contact Me</button> 
                </Link>
            <div className='about-me'>
                <h2>
                    My name is Jesse,
                </h2>
                <p>
                As an aspiring Data Scientist/Analyst based in Hanover, Pennsylvania, my coding journey started in high school and was rekindled in 2023, leading to the recent acquisition of 
                my Data Science certificate through Rutgers Bootcamps. I am proficient in languages such as Python, Javascript, HTML, CSS, Git, CLI, React, and more. My passion for coding 
                stems from its ability to bring ideas to life and simplify various aspects of life which is a valuable creative outlet. Currently dedicated to crafting both visually appealing 
                and functional software, programs, and systems.
                </p>
            </div>
        </div>

    )

}

export default About;