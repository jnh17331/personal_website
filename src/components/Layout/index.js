import './index.scss';
import Navbar from '../NavBar';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='App'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;
