import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <nav className="d-flex justify-content-around mt-2">
      <Link to={"/"}>
       <img src="/public/img/LogoSport78Favicon2.jpg" alt="" width={"50px"} height={"50px"} />
      </Link>
      <div>
        <Link to="/">
          <button className="btn btn-danger mx-2">Inicio</button>
        </Link>
        <Link to="/category/rugby">
          <button className="btn btn-danger mx-2">Rugby</button>
        </Link>
        <Link to="/category/futbol">
          <button className="btn btn-danger mx-2">Futbol</button>
        </Link>
      </div>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </nav>
  );
};