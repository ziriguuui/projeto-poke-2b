import './Home.css';
import Pokeflex from "./PokeFlex";
import PokeGrid from "./PokeGrid";


const Home = () => {
    return (
        <div className="Home">
            <Menu />
           <h1>Home</h1>
            <Pokeflex />
            <PokeGrid />

        </div>
    )
}

export default Home