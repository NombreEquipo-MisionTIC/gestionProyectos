import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Index from './pages/Index.jsx'
import CrearCuenta from './pages/CrearCuenta';
import AdminUsuarios from './pages/AdminUsuarios';
import AdminProyectos from './pages/AdminProyectos';
import Perfil from './pages/Perfil';
import LayoutNavAdmin from './layouts/LayoutNavAdmin';
import LayoutSideAdmin from './layouts/LayoutSideAdmin';
import Home from './pages/Home.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/registro' element={<CrearCuenta/>} />
          
          <Route path='admin' element={<LayoutSideAdmin />}>
            <Route path='' element={<Home/>} />
            <Route path='perfil' element={<Perfil/>} />
          </Route>
          <Route path='admin' element={<LayoutNavAdmin/>}>
            <Route path='usuarios' element={<AdminUsuarios/>} />
            <Route path='proyectos' element={<AdminProyectos/>} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
