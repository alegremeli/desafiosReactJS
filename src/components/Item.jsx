import React from 'react';
import ItemCount from './ItemCount';
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
                <ItemCount stock={5} initial={0}/> 
                {
                (contador == 0)
                ? <ItemCount stock={stock} initial={0} onAdd={onAdd}/>
                : <Link to="/cart"> <button>Ir al carrito</button> </Link>
                }

            </div>
        </div>
    );
}

export default Item;