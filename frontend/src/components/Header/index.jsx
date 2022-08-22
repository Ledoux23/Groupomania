import { Link } from 'react-router-dom'
// // import Login from '../../pages/Login';
 
function Header() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/login">Connexion</Link>
        </nav>
    )
}

export default Header