import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Form } from "../Form/Form";
import "./Order.css";

    export const Order = () => {
        const { cartItems, totalCartItems } = useContext(CartContext)

    const [userData, setUserData] = useState({
        name: "",
        surname: "",
        phone: "",
        email: "",
    })

    const handleFormChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div>
            <h2 className="datos">Ingrese sus datos</h2>

            <Form
                userData={userData}
                onFormChange={handleFormChange}
                cartItems={cartItems}
                total={totalCartItems}
            />
        </div>
    )
}