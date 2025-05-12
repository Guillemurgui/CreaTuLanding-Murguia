// src/App.jsx
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a MiTienda, descubre nuestras ofertas!" />
    </>
  );
}

export default App;
