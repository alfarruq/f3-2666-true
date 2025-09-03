

import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import './style.css'



function Header() {
    return (
        <header className='container' >

            <div className="header-top">
                <Link to={'/'} > <img src={logo} alt="" /></Link>
            </div>
            <ul>
                <li> <Link to="/brand" > о бренде </Link>   <a href="/brand"></a></li>
                <li> <Link to="/brand" > продукциИ</Link>   <a href="/brand"></a></li>
                <li> <Link to="/advantages" > преимущества </Link>   <a href="/brand"></a></li>
                <li> <Link to="/openclub" > открыть клуб </Link>   <a href="/brand"></a></li>
                <li> <Link to="/contact" > контакты </Link>   <a href="/brand"></a></li>
            </ul>
        </header>
    );
}

export default Header;





