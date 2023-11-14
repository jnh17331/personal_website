import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faSitemap, faGlobe } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react';

const Navbar = () => {

    const [isSticky, setSticky] = useState(false);

  
    const handleScroll = () => {
        if (window.scrollY > 0) {
        setSticky(true);
        } else {
        setSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
            <div className='container'>
                <div className={`nav-bar ${isSticky ? 'sticky' : ''}`}>
                    <Link className='profile-pic' to='/'>
                        {/*<img src={pfp} alt='pfp' className='profile-image' />*/}
                    </Link>
                    <nav>
                        <ul>
                            <NavLink exact="true" activeclassname='active' className='about-link' to='/about'>
                                <FontAwesomeIcon icon={faUser} color='1f1f1f' />
                            </NavLink>
                            <NavLink exact="true" activeclassname='active' className='projects' to='/projects'>
                                <FontAwesomeIcon icon={faSitemap} color='1f1f1f' />
                            </NavLink>
                            <NavLink exact="true" activeclassname='active' className='home' to='/'>
                                <FontAwesomeIcon icon={faHome} color='1f1f1f' />
                            </NavLink>
                            <NavLink exact="true" activeclassname='active' className='blog' to='/blog'>
                                <FontAwesomeIcon icon={faGlobe} color='1f1f1f' />
                            </NavLink>
                            <NavLink exact="true" activeclassname='active' className='contact-link' to='/contact'>
                                <FontAwesomeIcon icon={faEnvelope} color='1f1f1f' />
                            </NavLink>
                        </ul>
                    </nav>
                </div>
            </div>
    );
};

export default Navbar;