// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import Logo from '../../assets/icon-left-font.png';
// import colors from '../../utils/style/colors';

// const NavContainer = styled.nav`
//     padding: 30px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
// `

function Header() {
    return (    
        <div className="bg-light">
            <div className="container">
                <div className="row">
                    <nav className="col navbar navbar-expand-lg navbar-dark bg-danger px-3">
                        <a className="navbar-brand" href="/">
                            <img src={Logo} width="100"  height="80" alt="Groupomania logo" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/login">Se connecter</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/signup">S'inscrire</a>
                                </li> 
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header