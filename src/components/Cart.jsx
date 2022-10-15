import { useContext } from 'react';
import {CartContext} from './CartContext'
import { Link } from 'react-router-dom'
import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../utils/FirebaseConfig"

const Cart = () => {
    const {cartList, clearProducts, removeItem, precioTotal} = useContext(CartContext);
    async function createOrder (){
        let itemsForDB = cartList.map(item => ({
            id: item.id,
            price: item.precio,
            title: item.nombre,
            quantity: item.cantidad
        }))

        let order = {
            buyer: {
                name: "Meli Alegre",
                email: "melifeliz@gmail.com",
                phone: "12347777"
            },
            date: serverTimestamp (),
            items: itemsForDB,
            total: precioTotal()
        }

        const newOrderRef = doc(collection(db, "orders"))
        await setDoc(newOrderRef, order);
        cartList.forEach(async (item) => {
            const itemRef = doc(db, "Productos", item.id)
            await updateDoc(itemRef, {
                stock: increment(-item.cantidad)
            })
        });
        clearProducts()
        alert(`Tu orden fue creada ID: ${newOrderRef.id}`)
    }
    return (
        <>
        <h1>Carrito c:</h1>
        {
            cartList.length === 0 ?
            <div>
                <h2>Tu carrito esta vacío :c</h2>
                <Link className='linkInicio' to="/">Ir a la página principal</Link>
            </div>
            :
            cartList.map( item => 
            <div key={item.id}>
                <img className='imagenesCart' src={`/img/${item.imagen}`} alt="" />    
                <p>{item.nombre}</p>
                <p>${item.precio}</p>
                <p>Cantidad: {item.cantidad}</p>
                <div>
                <button className='botonEliminar' onClick={() => removeItem(item.id)}>Eliminar producto</button>
                <button className='botonEliminarTodo' onClick={clearProducts}>Eliminar todo</button>
                <p>Total: ${precioTotal()}</p>
                <button className='botonFinalizar' onClick={createOrder}>Finalizar compra</button>
                </div>
            </div>
            )       
        }
        </>
    );
}

export default Cart;