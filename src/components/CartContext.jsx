import React from 'react';
import { useState, createContext } from 'react';

export const CartContext = createContext ();

const CartContextProvider = ({ children }) =>{

    const [cartList, setCartList] = useState([]); // El carrito originalmente está vacío


    const addItem = (product, cantidadItem) => { //Función para agregar un producto al carrito

         if (isInCart(product.id) == false) {
            product.cantidad = cantidadItem // Agrego la propiedad cantidad, igual al número que agregamos al carrito
             setCartList(  [ ...cartList, product ]  )
         } else {
            product.cantidad += cantidadItem
        }
    }
    

    const isInCart = (idProduct) => { // Devuelve true si el producto con id "idProduct" ya está en el carrito
        return cartList.some(item => item.id === idProduct)
    }


    const removeItem = (categoryId)  => setCartList(cartList.filter((item) => item.id !== categoryId)) //Función para borrar un item en especifico


    const clearProducts = () => { //Elimina todos los items del carrito
        setCartList ([])
    }


    const totalCantidad = () => { //Devuelve la cantidad total de los productos
        return cartList.reduce ((valorAnterior, valorActual)=> valorAnterior + valorActual.cantidad, 0) 
    }


    const precioTotal = () => { //Devuelve el precio total entre todos los items
        return cartList.reduce ((valorAnterior, valorActual)=> valorAnterior + (valorActual.precio*valorActual.cantidad), 0) 
    }


const value = {
    cartList, 
    addItem, 
    clearProducts, 
    removeItem, 
    isInCart,
    totalCantidad,
    precioTotal

}

return (
    <CartContext.Provider value={value}>
        {children} 
    </CartContext.Provider >
);

}

export default CartContextProvider;