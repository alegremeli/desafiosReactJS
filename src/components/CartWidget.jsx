import React from 'react';
import { Cart4 } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import {useContext} from 'react';
import {CartContext} from './CartContext'

const CartWidjet = () => {

const {totalCantidad} = useContext (CartContext)

  return (
    <>  
  <div className='carrito'>
        <Link to="/cart"><Cart4 />{totalCantidad()}</Link>
  </div>
  </> 
  )
}

export default CartWidjet;