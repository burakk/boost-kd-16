
import './App.css'

import { Routes, Route } from 'react-router-dom'
import { PageAbout } from './pages/PageAbout'
import { PageContact } from './pages/PageContact'
import { PageHome } from './pages/PageHome'
import { PageNotFound } from './pages/PageNotFound'
import { NavLink } from 'react-router-dom'

import { Dashboard } from './pages/admin/DashBoard'
import { Settings } from './pages/admin/Settings'

function App() {


  return (
    <>
      <header>
        <h1>Kd-16 React router ile react</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Anasayfa</NavLink>
            </li>
            <li>
              <NavLink to="/hakkımda">Hakkımda</NavLink>
            </li>
            <li>
              <NavLink to="/iletişim">İletişim</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/admin">
            <Route path="" element={<Dashboard />} />
            <Route path="settings" element={<Settings />} />
          </Route>


          <Route path="/" element={<PageHome />} />
          <Route path="/hakkımda" element={<PageAbout />} />
          <Route path="/iletişim" element={<PageContact />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <footer>
        kd-16 frontend 2023
      </footer>
    </>
  )
}

export default App
