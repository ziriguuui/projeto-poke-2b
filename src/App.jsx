import {Routes, Route} from 'react-router-dom';
import Home from './Home.jsx';
import Menu from './Menu';
import PokeFlex from './PokeFlex.jsx';
import PokeGrid from './PokeGrid.jsx';

const App = () => {

  return(
    <Routes>
      <Route index element={<Menu />} />
      <Route path="home" element={<Home />} />
      <Route path="pokeflex" element={<PokeFlex />} />
      <Route path="pokegrid" element={<PokeGrid />} />
    </Routes>
  )
}

export default App
