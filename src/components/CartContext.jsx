import {useState, createContext} from 'react';

export const CartContext = createContext ();

const CartContextProvider = ({children}) =>{
    const [cartList, setCartList] = useState([]);

    const addItem = (product) => {
        setCartList([
            ...cartList,
            product,
        ])
    }

    const removeItem = (categoryId)  => setCartList(cartList.filter((item) => item.id !== categoryId))

    const clearProducts = () => {
        setCartList ([])
    }

    const isInCart = (categoryId) => {
        if (cartList.find(item => item.id === categoryId)){
            return true
        } else {
            return false
        }
    }


return (
    <CartContext.Provider value={{cartList, addItem, clearProducts, removeItem, isInCart}}>
        {children}
            </CartContext.Provider >
);
}

export default CartContextProvider;