import React from 'react';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../utils/FirebaseConfig';
import Loader from './Loader';

const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState (false)
    const {id} = useParams();
    useEffect(() => {
        setLoading (true)
        async function consultaFirestore(){
            let q
            if (id){
                q = query(collection(db, "Productos"), where('categoryid', '==', parseInt(id)))
            }else {
                q = query(collection(db, "Productos"))
            }

        const querySnapshot = await getDocs(q);
        const dataFromFirestore = querySnapshot.docs.map(document => ({
            id: document.id,
            ...document.data()
        }))
        setLoading(false)
        return dataFromFirestore
    }
    consultaFirestore()
    .then(result => setData(result))
    }, [id])

    if (loading == true) {
        return <Loader></Loader>
    }

    return (
        <div>
        <ItemList items = { data }/>
        </div>
    )

}

export default ItemListContainer;