import React from 'react';
import ItemCount from './ItemCount';
import {Link} from 'react-router-dom'

const Item = ({ id, nombre, precio, stock, imagen }) => {

    return (
        <div className ="bordeCards">
            <div>
                <h2>{nombre}</h2>
                <p>{stock}</p>
                <p>{precio}</p>
                <div>
                    <img src={`/img/${imagen}`} />
                </div>
                <Link to={"/item/" + id}><button>Detalles</button></Link>
                <ItemCount stock={5} initial={0}/> 
            </div>
        </div>
    );
}

export default Item;