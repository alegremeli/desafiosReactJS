import React from 'react';
import ItemCount from './ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from './CartContext'

const ItemDetail = ({item}) => {
    const [contador, setContador] = useState(0); // Inicialmente, contador es 0
    const {addItem}  = useContext(CartContext);

    const onAdd = (qtyItems) => {
        setContador(qtyItems)
        addItem(item, qtyItems)
    }
    return (
<div>
   <> 
        <h1>{item.nombre}</h1>
        <p>Stock disponible: {item.stock}</p>
        <p>{item.precio}</p>
        <img src={`/img/${item.imagen}`} />
        <div className='botones'>
        {
            (contador == 0)
            ? <ItemCount stock={item.stock} initial={0} onAdd={onAdd}/>
            : <Link to="/cart"> <button>Ir al carrito</button> </Link>
            }

        </div>
        </>
</div>
    );
}

    export default ItemDetail;
            