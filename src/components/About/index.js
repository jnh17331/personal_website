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
                    I am a Data Scientist/Analyst and am currently located in Hanover, Pennsylvania. My journey in coding began in high school and was reignited in 2020, 
                    culminating in the recent acquisition of my Data Science certificate through Rutgers Bootcamps. The programming languages I am most proficient in are Python, 
                    Javascript, HTML, CSS, Git, and CLI. I am passionate about coding because it empowers me to make any idea come to life or make anything in life easier, which is
                    valuable creative outlet. Outside of coding I have my dog, Marshall, that I love taking on walks, hikes, or playing a game of tug of war with. I am also an 
                    avid music fan with a love of many genres such as Hip-hop, Jazz, Rock, or Indie to name a few. 
                </p>
            </div>
        </div>

    )

}

export default About;