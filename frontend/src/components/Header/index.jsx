import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <nav>
            <Link to="/log">S'identifier</Link>
            <Link to="/">Accueil</Link>
        </nav>
    )
}

export default Header