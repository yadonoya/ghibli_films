import header_image from '../images/ghibli_logo.png';
import { Link } from "react-router-dom";


import './Header.css';

function Header() {
    return <div className='header-image-container'>
            <Link to={'/'} className='header-image'>
                <img src={header_image} alt="Studio Ghibli Logo" />
            </Link>
        </div>
}

export default Header;