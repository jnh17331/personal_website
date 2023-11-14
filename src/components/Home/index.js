import './index.scss'
import pfp from '../../assets/images/pfp.JPG'


const Home = () => {

    return (
            <div className='page'>
                <div id="stars-container">
                    <div id='stars'></div>
                    <div id='stars2'></div>
                    <div id='stars3'></div>
                </div>
                <div className='introduction'>
                    <h1>Hello,</h1>
                    <br></br>
                    <p>My name is Jesse and I am a Data Analyst.</p>
                    <br></br>
                    <img  className='picture' src={pfp} alt='Me'/>
                </div>
            </div>
    );

}

export default Home;