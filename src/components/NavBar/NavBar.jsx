import { CartWidget } from "../CartWidget/CartWidget.jsx"
import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark justify-content-between p-3"> 
            <img src="/public/img/logo.jpg" alt="Hola buenas tardes" style={{ width: "130px" }} />
            <div>
                <Link to= "/">
                <button className= "btn btn-outline-warning mx-2">Inicio</button>
                </Link >
                <Link to="/category/futbol">
                <button className= "btn btn-outline-warning mx-2">Futbol</button>
                </Link>
                <Link to="/category/rugby"> 
                <button className= "btn btn-outline-warning mx-2">Rugby</button>
                </Link>
                <Link to="/category/tenis">
                <button className= "btn btn-outline-warning mx-2">Tenis</button>
                </Link>
            </div>
            <Link to="/cart">
            <CartWidget/>
            </Link>
        </nav>
    );
};