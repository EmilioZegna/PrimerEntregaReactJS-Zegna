import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebaseConfig";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
    const { category } = useParams()

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [setProduct] = useState(null)

    const getProductsDB = async (category) => {
        const myProducts = category
            ? query(collection(db, "productos"), where("category", "==", category))
            : query(collection(db, "productos"))
        const resp = await getDocs(myProducts)
        if (resp.size === 0) {
        }

        const productList = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        setProducts(productList)
        setIsLoading(false)
    }

    const getProductById = async (id) => {
        const productRef = doc(db, "productos", id)
        const resp = await getDoc(productRef)
        if (resp.exists()) {
            const prod = {
                id: resp.id,
                ...resp.data()
            }
            setProduct(prod)
        }
    }

    useEffect(() => {
        setIsLoading(true)
        getProductsDB(category)
        getProductById(" ")
    }, [category])

    return (
        <>
            {isLoading ? <div className="text-center"><img src="/public/img/loading.gif" alt="" /></div>: <ItemList products={products} />}
        </>
    );
}

