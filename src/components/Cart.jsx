import { useContext } from 'react';
import {CartContext} from './CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cartList, clearProducts, removeItem, precioTotal} = useContext(CartContext);
    return (
        <>
        <h1>Carrito c:</h1>
        {
            cartList.length === 0 ?
            <div>
                <p>Tu carrito esta vacío :c</p>
                <Link className='linkInicio' to="/">Ir al inicio</Link>
            </div>
            :
            cartList.map( item => 
            <div key={item.id}>
                <img src={`/img/${item.imagen}`} alt="" />    
                <p>{item.nombre}</p>
                <p>${item.precio}</p>
                <p>Cantidad: {item.cantidad}</p>
                <div>
                <button  onClick={() => removeItem(item.id)}>Eliminar producto</button>
                <button onClick={clearProducts}>Eliminar todo</button>
                <p>Total: ${precioTotal()}</p>
                </div>
            </div>
            )       
        }
        </>
    );
}

export default Cart;