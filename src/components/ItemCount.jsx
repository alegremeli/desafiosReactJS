import React from 'react';
import { useState } from 'react';

const ItemCount = ({ initial, stock }) => 
{
    const [Productos, setProductos] = useState(initial);

    function addProduct () {
        if (Productos < stock)
        setProductos(Productos + 1)
    }

    function deleteProduct () {
        if (Productos >= 1)
        setProductos(Productos - 1)
    }

    
    return (
        <>
        <div>
            <button onClick={deleteProduct}>-</button> {Productos}
            <button onClick={addProduct}>+</button> 
        </div>
            </>
    );
}


 
export default ItemCount;