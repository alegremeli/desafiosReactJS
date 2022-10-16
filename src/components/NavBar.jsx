import React from "react";
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <Link to="/">Flowers</Link>
      <nav>
        <ul>
          <li>
          <Link to="/category/1">Tazas</Link>
          </li>
          <li>
          <Link to="/category/2">Platos</Link>
          </li>

          <li>
          <Link to="/category/3">Tazas irregulares</Link>
          </li>
        </ul>
      </nav>
      <CartWidget/>
    </header>
  );
};

export default NavBar;
