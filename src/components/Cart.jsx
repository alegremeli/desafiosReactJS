import { useContext } from 'react';
import {CartContext} from './CartContext'

const Cart = () => {
    const {cartList, clearProducts, removeItem} = useContext(CartContext);
    return (
        <>
        <h1>Carrito c:</h1>
        <button onClick={clearProducts}>Eliminar todo</button>
        {
            cartList.map( item => 
            <div key={item.id}>
                <img src={`/img/${item.imagen}`} alt="" />    
                <p>{item.nombre}</p>
                <p>${item.precio}</p>
                <p>Cantidad: {item.cantidad}</p>
                <button  onClick={() => removeItem(item.id)}>Eliminar producto</button>
            </div>
            )       
        }
        </>
    );
}

export default Cart;