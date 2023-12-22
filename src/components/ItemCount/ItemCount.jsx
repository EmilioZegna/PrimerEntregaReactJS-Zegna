import { useState } from "react"

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < stock) {
            return setCount(count + 1)
        }
        setCount(count)
    }

    const decrement = () => {
        if (count === 0) {
            return setCount(0)
        }
        setCount(count - 1)
    }

    return (
        <div>
            <div>
                <button className="btn btn-outline-dark m-2" onClick={decrement}>
                    -
                </button>
                <strong>{count}</strong>
                <button className="btn btn-outline-dark m-2" onClick={increment}>
                    +
                </button>
            </div>
            <button className="btn btn-outline-danger" onClick={() => onAdd(count)}>Agregar producto</button>
        </div>
    )
}
   
