import header_image from '../images/ghibli_logo.png';

import './Header.css';

function Header() {
    return <div className='header-image'>
            <img src={header_image} alt="Studio Ghibli Logo" />
        </div>
}

export default Header;