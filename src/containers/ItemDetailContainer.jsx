import React from 'react';
import { useEffect, useState } from 'react';
import Fetch from '../utils/Fetch';
import Productos from '../containers/Productos';
import ItemDetail from '../components/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState (false)
    const {id} = useParams();
    useEffect(() => {
        setLoading (true)
        Fetch(2000, Productos.find(item => item.id == id))
        .then(result => setData(result))
        .catch(error => console.log(error))
        .finally(() =>  setLoading (false))
    }, [])

    
    if (loading == true) {
        return <p>Cargando</p>
    }

    return (
        <div>
         <ItemDetail item = {data}/>
        </div>
    )
}

export default ItemDetailContainer;