import { useContext } from 'react';
import {CartContext} from './CartContext'

const Cart = () => {
    const {cartList, clearProducts, removeItem} = useContext(CartContext);
    return (
        <>
        <h1>Carrito c:</h1>
        <button onClick={clearProducts}>Eliminar todo</button>
        {
            cartList.map(item => <><div>{item.nombre} <button onClick={() => removeItem(item.id)}>Eliminar producto</button></div>
            <div></div>  </>)       
        }
        </>
    );
}

export default Cart;