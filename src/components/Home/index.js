import './index.scss'
import pfp from '../../assets/images/pfp.JPG'
import one from '../../assets/testing/one.jpg'
import two from '../../assets/testing/two.jpg'
import three from '../../assets/testing/three.png'
import four from '../../assets/testing/four.png'
import five from '../../assets/testing/five.jpg'
import six from '../../assets/testing/six.png'



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
                    <p>My name is Jesse and I am a Data Scientist.</p>
                    <br></br>
                    <img  className='picture' src={pfp} alt='Me'/>
                </div>
                <div id="mirrored-stars-container">
                    <div id='mirrored-stars'></div>
                    <div id='mirrored-stars2'></div>
                    <div id='mirrored-stars3'></div>
                </div>
                <div className='cube-container'>
                    <div className='cubespinner'>
                        <div className='face face1'>
                            <img className='number-one' src={one} alt='one'/>
                        </div>
                        <div className='face face2'>
                            <img className='number-two' src={two} alt='two'/>
                        </div>
                        <div className='face face3'>
                            <img className='number-three' src={three} alt='three'/>
                        </div>
                        <div className='face face4'>
                            <img className='number-four' src={four} alt='four'/>
                        </div>
                        <div className='face face5'>
                            <img className='number-five' src={five} alt='five'/>
                        </div>
                        <div className='face face6'>
                            <img className='number-six' src={six} alt='six'/>
                        </div>
                    </div>
                </div>
            </div>
    );

}

export default Home;