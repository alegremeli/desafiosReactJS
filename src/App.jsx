import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer'
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter >
    <NavBar />
    <Routes>
      <Route path="/" element ={<ItemListContainer/> }/>
      <Route path="/category/:id" element ={<ItemListContainer />}/>
      <Route path="/item/:id" element ={<ItemDetailContainer />}/>
    </Routes>
    <Footer />
    </BrowserRouter >
  </>
  );
}

export default App;
