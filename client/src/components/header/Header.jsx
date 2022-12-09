
import { AppBar, Toolbar, styled, Button } from '@mui/material'; 
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import './Header.css';

// const Component = styled(AppBar)`
//     background: #FFFFFF;
//     color: black;
// `;

// const Container = styled(Toolbar)`
//     justify-content: center;
//     & > a {
//         padding: 20px;
//         color: #000;
//         text-decoration: none;
//     }
// `

const Header = () => {

    const navigate = useNavigate();

    const logout = async () => navigate('/account');
        
    return (
        <nav className="navbar fixed-top shadow border-5 border-top border-danger navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <a class="navbar-brand" href="#">
                <img src="https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png" alt="" width="50" height="24" class="d-inline-block mx-3 align-text-top" />
                {/* Bootstrap */}
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className='nav-link active text-white' to='/'>HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/about'>ABOUT</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/contact'>CONTACT</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/account'>LOGOUT</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;