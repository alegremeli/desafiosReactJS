import React from 'react';
import { useState } from 'react';

const ItemCount = ({ initial, stock, onAdd}) => 
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

    function agregarProducto() {
        if (Productos == 1) {
            alert("Agregaste un producto al carrito")
        } else {
            alert(`Agregaste ${Productos} productos al carrito`)
        }
        onAdd(Productos) // Cuando se agrega un producto, se cambia el estado de "contador", provocando que se quite el ItemCount y se coloque el Link
    }

    
    return (
        <>
        <div>
            <button className="botonCount" onClick={deleteProduct}>-</button>{Productos}
            <button className="botonCount" onClick={addProduct}>+</button> 
        </div>
        <button className='botonAdd' onClick={agregarProducto} disabled={Productos==0}>Añadir al carrito</button>
        </>
    );
}


 
export default ItemCount;