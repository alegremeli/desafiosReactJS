import React from 'react';
import { useEffect, useState } from 'react';
import ItemDetail from '../components/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/FirebaseConfig";

const ItemDetailContainer = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState (false)
    const {id} = useParams();
    useEffect(() => {
        setLoading(true)
        const docRef = doc(db, "Productos", id);
        getDoc(docRef)
        .then(result => setData({
            id: result.id,
            ...result.data() 
        }))
        .finally(() => setLoading(false))
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