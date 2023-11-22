import { useState } from "react";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);
  
  const increment = () => {
    if (count < stock) {
      return setCount(count + 1);
    }
    setCount(count);
  };

  const decrement = () => {
    if (count === 0) {
      return setCount(0);
    }
    setCount(count - 1);
  };


  return (
    <div className="d-flex flex-column col-2  p-2">
      <div>
        <button className="btn btn-outline-dark mx-3" onClick={increment}>
          +
        </button>
        <strong>{count}</strong>
        <button className="btn btn-outline-dark mx-3" onClick={decrement}>
          -
        </button>
      </div>
      <button className="btn btn-outline-dark mt-3" onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};