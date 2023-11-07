import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {
    return (
        <div className="container-fluid mt-2">
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
        <img  src="/img/LogoSport78Favicon2.jpg" alt="" width={"80px"}/>
       <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
       <div className="navbar-nav">

      <button className="btn btn-warning " href="#">Inicio</button>
      <button className="btn btn-warning " href="#">Productos</button>
      <button className="btn btn-warning " href="#">Contactos</button>
    </div>
  </div>
  <CartWidget />
</nav>
</div>

    )
}