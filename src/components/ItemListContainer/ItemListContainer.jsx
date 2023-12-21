import React from 'react'
import "./ItemListContainer.css";
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { db } from '../../utils/fireBaseConfiguration'
import { collection, getDocs} from "firebase/firestore";

function ItemListContainer() {
  const [productos, setProductos] = useState([])
  const {idCategory} = useParams();

  useEffect(() => {
    async function asyncProblem() {
      try {
        const querySnapshot = await getDocs(collection(db, "productos"));
        const dataFromFirestore = querySnapshot.docs.map(item => ({
          id: item.id,
          ...item.data()
        }))
        setProductos(dataFromFirestore)

        if (idCategory) {
          setProductos(
            dataFromFirestore.filter((producto) => producto.categoryId === idCategory)
          );
        } else {
          setProductos(dataFromFirestore);
        }
      } catch (error) {
        console.error(error) 
      }
    };
    asyncProblem();
  }, [idCategory])

  return( 
    <>
    <ItemList items={productos} />
    </>
  );
}

export default ItemListContainer;