import React from 'react';
import {Link} from 'react-router-dom'

const Item = ({ id, nombre, precio, imagen }) => {

    return (
        <div className ="bordeCards">
            <div>
                <h2>{nombre}</h2>
                <p>${precio}</p>
                <div>
                    <img className='imagenes' src={`/img/${imagen}`} />
                </div>
                <Link to={"/item/" + id}><button className='botonDetalles'>Detalles</button></Link>
            </div>
        </div>
    );
}

export default Item;