import './App.css';
import Home from "./views/Home/Home.jsx"
import Pokemones from "./views/Pokemones/Pokemones.jsx"
import Pokemon from "./views/Pokemon/Pokemon.jsx"
import Navbar from "./components/Navbar/Navbar.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Context from './context/context.js';

function App() {
  const [pokemones, setPokemones] = useState([]);
  const globalState = { pokemones }

  useEffect (() => {
    
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then((res) => res.json())
    .then((json) => setPokemones(json.results))
    .catch((e) => console.log(e))
    
  }, [])
  return (
    <div className="App">
      <Context.Provider value={ globalState }>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={ <Home/> }></Route>
            <Route path="/pokemones" element={ <Pokemones/> }></Route>
            <Route path="/pokemones/:name" element={ <Pokemon/> }></Route>
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
