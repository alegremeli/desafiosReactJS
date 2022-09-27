import {useState, createContext} from 'react';

export const CartContext = createContext ();

const CartContextProvider = ({children}) =>{
    const [cartList, setCartList] = useState([]); // El carrito originalmente está vacío

    const addItem = (product, cantidadItem) => {

         if (isInCart(product.id) == false) {
            product.cantidad = cantidadItem // Agregamos la propiedad cantidad, igual al número que agregamos al carrito
             setCartList(  [ ...cartList, product ]  )
         } else {
            product.cantidad += cantidadItem
        }
    }
    
    const isInCart = (idProduct) => { // Devuelve true si el producto con id "idProduct" ya está en el carrito
        return cartList.some(item => item.id === idProduct)
    }
    const removeItem = (categoryId)  => setCartList(cartList.filter((item) => item.id !== categoryId))

    const clearProducts = () => {
        setCartList ()
    }



return (
    <CartContext.Provider value={{cartList, addItem, clearProducts, removeItem, isInCart}}>
        {children}
            </CartContext.Provider >
);
}

export default CartContextProvider;