import { Link } from "react-router-dom";
// import './Navbar.scss'

const Navbar = () => (
    <nav className="navbar">
        <Link to="/">Accueil</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
    </nav>
);
     
export default Navbar;