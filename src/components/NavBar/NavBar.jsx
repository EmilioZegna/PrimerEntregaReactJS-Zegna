import React from 'react';
import "./NavBar.css"
import logo from "../../assets/img/logo.jpg"
import menu from "../../assets/img/menu.png";
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom'

function NavBar () {
 return(
  <header className='navBar'>
    
      <Link to='/' className='logoTitle'>
      <img className='logo' src={logo} alt="logo"/>
      <h2 className='titleNavBar'>Emilio Shop</h2>
      </Link>

    <nav className='menu'>
      <input type="checkbox" id='check'/>
      <label for="check" className='checkBoton'>
        <i className='menuIcono'><img src={menu} alt=""/></i>
      </label>

      <ul>
        <Link to='/' className='a'>Home</Link>
        <Link to='/category/rugby' className='a'>Rugby</Link>
        <Link to='/category/futbol' className='a'>Futbol</Link>
        <Link to='/category/tenis' className='a'>Tenis</Link>
        <Link className="a" to="/nosotros">Nosotros</Link>
        <Link className="a" to="/contacto">Contacto</Link>

        <Link to='/cart'><li className='carrito'><a href='/cart'><CartWidget/></a></li></Link>
      </ul>
    </nav>
  </header>
 );
}

export default NavBar;