import "./Home.css"
import { NavLink } from "react-router-dom";
const Home = () => {
    return (
        <main>
            <div className="home-container">
           
            
            <NavLink className="button-link" to="/pokemones">¡ A buscar pokemones!</NavLink>
            
            </div>
        </main>
    )
}

export default Home