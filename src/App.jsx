import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer'
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext'


function App() {
  return (
    <>
            <CartContextProvider>
    <BrowserRouter >
    <NavBar />
    <Routes>
    <Route path="/" element ={<ItemListContainer/> } />
      <Route path="/category/:id" element ={<ItemListContainer />} />
      <Route path="/item/:id" element ={<ItemDetailContainer />} />
      <Route path="/cart" element = {<Cart />} />
    </Routes>
    <Footer />
    </BrowserRouter >
    </CartContextProvider>
  </>
  );
}

export default App;
