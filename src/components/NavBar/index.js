import { Link } from 'react-router-dom'
import './index.scss'
import pfp from '../../assets/images/pfp.JPG'

const Navbar = () => (
    <div className='container'>
        <div className='nav-bar'>
            <Link className='profile-pic' to='/'>
                <img src={pfp} alt='pfp' className='profile-image' />
            </Link>
        </div>
    </div>
);

export default Navbar;