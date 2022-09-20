import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {
    return (
<div>
   <> 
        <h1>{item.nombre}</h1>
        <p>{item.stock}</p>
        <p>{item.precio}</p>
        <img src={`/img/${item.imagen}`} />
        <div>
            <ItemCount stock={5} initial={0}/> 
        </div>
        </>
</div>
    );
}

    export default ItemDetail;
            