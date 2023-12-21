import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from '../../utils/fireBaseConfiguration'
import { doc, getDoc } from "firebase/firestore";

function ItemDetailContainer() {

    const [producto, setProducto] = useState({});
    const {idItem} = useParams();

    useEffect(() => {
      async function asyncProblem(){
        try {
          const docRef = doc(db, "productos", idItem);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            setProducto({
              id: idItem,
              ...docSnap.data(),
            });     
          } else {
            console.log("NO HAY DOCUMENTO!")
          }
        } catch (error) {
          console.log(error)
        }
      }
      asyncProblem();
    }, [idItem]);

    return(
      <>
        <ItemDetail item={producto} />
      </>
    );
}

export default ItemDetailContainer;