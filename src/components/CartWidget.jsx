import React from 'react';
import { Cart4 } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const CartWidjet = () => {
  return (
  <div className='carrito'>
        <Link to="/cart"><Cart4 /></Link>
  </div>
  )
}

export default CartWidjet;