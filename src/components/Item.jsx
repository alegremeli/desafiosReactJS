import React from 'react';
import {Link} from 'react-router-dom'

const Item = ({ id, nombre, precio, imagen }) => {

    return (
        <div className ="bordeCards">
            <div   className='imagenes'>
                <h2>{nombre}</h2>
                <p>${precio}</p>
                <div>
                    <img src={`/img/${imagen}`} />
                </div>
                <Link to={"/item/" + id}><button>Detalles</button></Link>
            </div>
        </div>
    );
}

export default Item;