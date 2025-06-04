import poke from "./assets/pokeapi_256.png"
import eevee from './assets/eevee.jpg'
import './Home.css'
import Pokeflex from "./Pokeflex"
import PokeGrid from "./PokeGrid"


const Home = () => {
    return (
        <div className="Home">
            
            <Pokeflex />
            <PokeGrid />
        
        </div>
    )
}

export default Home