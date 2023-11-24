
import './App.css'
import { MousePositionBox } from './components/MousePositionBox';

import { MovingDot } from './components/MovingDot';
import { UserForm, UserForm2, UserForm3 } from './components/UserForm';

function App() {


  return (
    <>
      <h1>Updating Objects In State</h1>
      <MousePositionBox />


      <MovingDot />

      <UserForm />
      <UserForm2 />

      <UserForm3 />
    </>
  )
}





export default App
