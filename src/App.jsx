import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
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
import EditarUsuarios from './pages/EditarUsuarios'; 
import LayoutNavAdmin from './layouts/LayoutNavAdmin';
import LayoutSideAdmin from './layouts/LayoutSideAdmin';
import Home from './pages/Home.jsx'
import Proyecto from './pages/Proyecto';

// const httplink = new createHttpLink({
//   uri: 'http://localhost:4000/graphql'
// })

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/registro' element={<CrearCuenta />} />

          <Route path='admin' element={<LayoutSideAdmin />}>
            <Route path='' element={<Home />} />
            <Route path='perfil' element={<Perfil />} />
            <Route path='editar/:_id' element={<EditarUsuarios />}/>
          </Route>
          <Route path='admin' element={<LayoutNavAdmin />}>
            <Route path='usuarios' element={<AdminUsuarios />} />
            <Route path='proyectos' element={<AdminProyectos />} />
            <Route path='proyecto/:_id' element={<Proyecto />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
