import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom'

const Item = ({ id, nombre, precio, stock, imagen }) => {
    const [contador, setContador] = useState(0);

    const onAdd = (qtyItems) => {
        setContador(qtyItems)
    }

    return (
        <div className ="bordeCards">
            <div   className='imagenes'>
                <h2>{nombre}</h2>
                <p>Stock disponible: {stock}</p>
                <p>{precio}</p>
                <div>
                    <img src={`/img/${imagen}`} />
                </div>
                <Link to={"/item/" + id}><button>Detalles</button></Link>
            </div>
        </div>
    );
}

export default Item;