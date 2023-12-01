
import { Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Login } from "./pages/Login";
import { Layout } from "./pages/Layout";
import { Protected } from './pages/admin/Protected';
import { Dashboard } from './pages/admin/Dashboard';
import { Products as AdminProducts } from './pages/admin/Products';


function App() {

  return (

    <Routes>
      <Route path="/admin" element={<Protected />} >
        <Route path="" element={<Dashboard />} />
        <Route path="ürünler" element={<AdminProducts />} />
      </Route>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="ürünler" element={<Products />} />
        <Route path="giriş" element={<Login />} />
      </Route>

      <Route path="*" element={<h3>Sayfa bulunamadı. Ooops! </h3>} />
    </Routes>

  );
}

export default App;
