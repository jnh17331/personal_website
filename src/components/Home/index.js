import './index.scss'
import pfp from '../../assets/images/pfp.JPG'

const Home = () => {

    return (
            <div className='page'>
                <div className='introduction'>
                    <span className='hello'>Hello,</span>
                    <br></br>
                    <span className='about-me'>My name is Jesse and I am a Data Analyst.</span>
                    <br></br>
                    <img  className='picture' src={pfp} alt='Me'/>
                </div>
                <div className='projects'>
                    <span>UNDER CONSTRUCTION</span>
                </div>
            </div>
    );

}

export default Home;