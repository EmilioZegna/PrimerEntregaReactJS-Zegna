import { BsCart3 } from "react-icons/bs"
import { useCart } from "../../context/CartContext"
import "./CartWidget.css";

export const CartWidget = () => {
    const { totalQuantity } = useCart()

    return (
            <div className="d-flex">
                <BsCart3 color="black" size={25} />
                <span className="texto">({totalQuantity})</span>
            </div>
    )
}

export default CartWidget;