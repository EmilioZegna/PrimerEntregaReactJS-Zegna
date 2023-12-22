import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";

export const Cart = () => {
    const navigate = useNavigate()
    const { cartItems, totalCartItems, removeItem, updateItemQuantity, clearCartItems } = useContext(CartContext)

    const handleConfirmOrder = () => {
        if (cartItems.length === 0) {
            Swal.fire({
                title: "Carrito vacio",
                text: "Por favor, añada productos",
                icon: "error"
            })

        } else {
            navigate("/confirmar-compra")
        }
    }

    const handleEmptyCart = () => {
        clearCartItems()
    }

    return (
        <div className="card mx-auto text-center mt-4 border border-4" style={{ width: "50%" }}>
            <h2 className="text-primary"></h2>
            
                {cartItems.map((item) => (
                    <div key={item.id} className="border p-3 mb-3">
                        <p className="mb-1 fw-bold">Nombre: {item.name}</p>
                        <p className="mb-1">Precio por unidad: ${item.price}</p>
                        <p className="mb-1">Cantidad: {item.quantity}</p>
                        <p className="mb-1">Subtotal: ${item.subTotal}</p>
                        <div className="mb-2">
                            <button className="btn btn-danger m-2" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>Quitar</button>
                            <button className="btn btn-success m-2" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>Añadir</button>
                        </div>
                        <button className="btn btn-outline-danger m-2" onClick={() => removeItem(item.id)}>
                            Eliminar
                        </button>
                    </div>
                ))}
            
            <h3 className="m-2">Total ${totalCartItems}</h3>
            <button className="btn btn-warning mx-auto m-2" style={{ width: "20%" }} onClick={handleConfirmOrder}>Confirmar</button>

            <button className="btn btn-warning mx-auto m-2" style={{ width: "20%" }} onClick={handleEmptyCart}>
                    Eliminar productos
                </button>
        </div>
    )
}