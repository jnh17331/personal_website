import './index.scss'
import { Link } from 'react-router-dom';
import pfp from '../../assets/images/pfp.JPG'
import ml_music from '../../assets/images/projects/ml_music.png'
import pokedex from '../../assets/images/projects/pokedex.png'
import movie_analysis from '../../assets/images/projects/movie_analysis.png'
import eq_leaflet from '../../assets/images/projects/eq_leaflet.png'
import mars_webscraping from '../../assets/images/projects/mars_webscraping.png'
import website from '../../assets/images/projects/website_capture.png'

const Home = () => {


    return (
            <main className='page'>
                <div id="stars-container">
                    <div id='stars'></div>
                    <div id='stars2'></div>
                    <div id='stars3'></div>
                </div>
                <div className='introduction'>
                    <h1>Hello world,</h1>
                    <br />
                    <p>My name is Jesse and I am a Data Scientist.</p>
                    <br />
                    <img  className='picture' src={pfp} alt='Me'/>
                </div>
                <div id="mirrored-stars-container">
                    <div id='mirrored-stars'></div>
                    <div id='mirrored-stars2'></div>
                    <div id='mirrored-stars3'></div>
                </div>
                
                <div className='cube-container'>
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
                </div>
                
            </main>
    );

}

export default Home;