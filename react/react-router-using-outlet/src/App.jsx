
import './App.css'

import { Route, Routes } from 'react-router-dom'
import { Outlet } from 'react-router'

function App() {


  return (
    <>
      <Routes>

        <Route path="/" element={<> <header>logo</header><main><Outlet /> </main><footer></footer>   </>}>

          <Route path="hakkımda" element={<p>hakkımda</p>} />
          <Route path="ileitişim" element={<p>iletişim</p>} />
          <Route path="işlerim" element={<p>işlerim</p>} />
        </Route>



        <Route path="/admin" element={<> <header>admin logo</header><main><Outlet /> </main><footer></footer>   </>}>

          <Route path="dashboard" element={<p>dashboard</p>} />
          <Route path="settings" element={<p>settings</p>} />

        </Route>

      </Routes >
    </>
  )
}

export default App
