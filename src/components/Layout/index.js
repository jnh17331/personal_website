import './index.scss';
import Navbar from '../NavBar'
import Footer from '../Footer'
import pfp from '../../assets/images/pfp.JPG'

const Layout = () => {
    return(
    <div className='App'>
        <><Navbar /></>
        <div className='Page'>
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
        <><Footer /></>
    </div>
    );
}

export default Layout;
