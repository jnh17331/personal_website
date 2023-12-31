import { NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import githublogo from '../../assets/images/githublogo.png'
import instalogo from '../../assets/images/instalogo.png'
import linkedinlogo from '../../assets/images/linkedinlogo.png'
import spotifylogo from '../../assets/images/spotifylogo.png'


const Footer = () => {
    return (
        <div className='container'>
            <footer className='footer'>
                <div className='footer-container'>
                    <ul>
                        <li>
                            <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/jesse-heaton-b777511b9/'>
                                <img src={linkedinlogo} alt="LinkedIn"/>
                            </a>
                            <a target="_blank" rel="noreferrer" href='https://github.com/jnh17331'>
                                <img src={githublogo} alt="Github Logo"/>
                            </a>
                            <NavLink className='contact-link' to='/contact'>
                                <FontAwesomeIcon icon={faEnvelope}/>
                            </NavLink>
                            <a target="_blank" rel="noreferrer" href='https://www.instagram.com/_jesse_heaton_/'>
                                <img src={instalogo} alt="Instagram"/>
                            </a>
                            <a target="_blank" rel="noreferrer" href='https://open.spotify.com/user/cornyquotient15?si=dc5898e873f1481c&nd=1'>
                                <img src={spotifylogo} alt="Spotify"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;