import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../../components/Card/Card.jsx"

const Pokemon = () => {
    const { name } = useParams();
    const [ selected, setSelected ] = useState({});
    const [ loading, setLoading ] = useState(true);

    useEffect (() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => res.json())
        .then((json) =>{
            console.log(json)
            setSelected(json)
            setTimeout(() => {
                setLoading(false)
            }, 2000)
        } )
        .catch((e) => console.log(e))
    }, [])

    return (
        <main>
            { loading ? <img src="https://cdn-icons-png.flaticon.com/512/419/419467.png" alt="loading"></img> : <Card selected={ selected }></Card>
                  
                
            }
        </main>
    )
    
}

export default Pokemon