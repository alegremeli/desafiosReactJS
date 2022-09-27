import React from 'react';
import { useEffect, useState } from 'react';
import Fetch from '../utils/Fetch';
import Productos from '../containers/Productos';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState (false)
    const {id} = useParams();
    useEffect(() => {
        setLoading (true)
        if (id != undefined){
            Fetch(200, Productos.filter (item => item.categoryid == id))
            .then(result => setData(result))
            .catch(error => console.log(error)) 
            .finally(() =>  setLoading (false))
        }else {
            Fetch(200, Productos)
            .then(result => setData(result))
            .catch(error => console.log(error)) 
            .finally(() =>  setLoading (false))
        }  
    }, [id])

    if (loading == true) {
        return <p>Cargando</p>
    }

    return (
        <div >
        <ItemList items = {data}/>
        </div>
    )

}

export default ItemListContainer;