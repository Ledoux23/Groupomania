import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/icon-left-font.png';

const HomeLogo = styled.img`
    height: 200px;
`

const NavContainer = styled.nav`
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

function Header() {
    return (    
        <NavContainer>
            <Link to="/">
                <HomeLogo src={Logo} />
            </Link>
            <div>
                <Link to="/">Accueil</Link>
                <Link to="/profil">S'identifier</Link>
            </div>
        </NavContainer>
    )
}

export default Header