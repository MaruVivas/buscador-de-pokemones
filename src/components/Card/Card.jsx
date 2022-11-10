import "./Card.css"

const Card = ({selected}) => {
    return (
<div className ="card">
    <h3>{ selected.name }</h3>
    
    <div className="info">               
        
            <img src={ selected.sprites.front_default } alt={selected.name}></img>
            <div classNames="types">
                {
                    selected.types.map((type) => {
                        return(
                            <p key= {type.type.name}>{type.type.name}</p>
                            )
                        })
                }
            </div>
        
        
        <div className="stats">
            {
                selected.stats.map((stat) => {
                    return (
                        <p key={ stat.stat.name }>{ stat.stat.name } : <span>{ stat.base_stat }</span></p>
                         )
                    })
             }
        </div>
        </div> 
 
</div> )}

export default Card