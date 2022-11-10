import "./Navbar.css"
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const setActive = ({ isActive }) => isActive ? 'active' : 'unactive';

    return (
        <header className="navbar-header">
            <div className="logo">
                <img src="https://cdn-icons-png.flaticon.com/512/419/419467.png" alt="logo-pokebola"></img>
            </div>
            <div className="links-container">
                <NavLink to="/" className={ setActive } end>Home</NavLink>
                <NavLink to="/pokemones" className={ setActive }>Pokemones</NavLink>
            </div>
        </header>
    )
}
export default Navbar