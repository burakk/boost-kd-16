import './App.css';
import { FavoriteFamousHumans } from './components/FavoriteFamousHumans';

import { FavoriteFamousHumans2 } from './components/FavoriteFamousHumans2';

import { MovingCircles } from './components/MovingCircles';


function App() {


  return (
    <>
      <h2>Updating Arrays In State</h2>

      <FavoriteFamousHumans />
      <FavoriteFamousHumans2 />

      <MovingCircles/>
    </>
  )
}

export default App
