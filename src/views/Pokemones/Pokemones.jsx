import Context from "../../context/context.js";
import "./Pokemones.css"
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Pokemones = () => {

    const navigate = useNavigate();
    const { pokemones } = useContext(Context);
    const [seleccionado, setSeleccionado] = useState("");

    const verPokemon = () => {
        navigate(`/pokemones/${ seleccionado }`)
    }

    return (
        
        <main>
            <h1>Selecciona un Pokemon</h1>
            <div className="pokemones-container">
                <select className="pokemon-list" onChange={(e) => setSeleccionado(e.target.value) }>
                    <option value="0">Seleccionar Pokemon</option>
                    {
                        pokemones.map((pokemon) => {
                            return (
                                <option key={ pokemon.name } value={ pokemon.name }>{ pokemon.name }</option>
                            )
                        }
    

                        )
                    }
                </select>
                <button className="button-link" onClick={() => verPokemon()}>Ver Pokemon</button>
            </div>
        </main>
       
    )
}

export default Pokemones
