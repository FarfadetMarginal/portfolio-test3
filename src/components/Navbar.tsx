import { Link } from "react-router-dom";
import '../styles/navbar.scss';
// import './styles/navbar.scss'

const Navbar = () => (
    <nav className="navbar">
        <Link to="/">Accueil</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
    </nav>
);
     
export default Navbar;