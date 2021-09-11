import React,{useContext} from 'react'
import '../styles/NavBar.css'
import {Link} from 'react-router-dom';
import { orderContext } from "../components/CartContext";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"></link>;


function NavBar(props) {
  const order = useContext(orderContext);

  const disabled = {
    width: order <= 0 ? '0px': '45px'
  }

const ocultar= {
  color: order <=0 ? '#FFFFFF': '#000000'
}

//const color = {
  //color : 'white',
//}

const acumulador = order.reduce((acu,element)=>acu + element.cantidad,0)

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"> 
        <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
        <Nav className='mobile-brand'><Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand></Nav>
        <Navbar.Collapse className='navbar-one' id="responsive-navbar-nav">
          <Nav>
            {/* <Link class="navbar-brand"><img className="nav-img" src="https://image.flaticon.com/icons/png/128/1532/1532495.png"></img></Link> */}
            <Link exact to="/">Inicio</Link>
            <Link to="/Products">Productos</Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav className='desktop-brand'><Navbar.Brand><Link exact to="/">React-Bootstrap</Link></Navbar.Brand></Nav>
          <Nav>
            <Link><span class="navbar-text"><li style={ocultar}>{acumulador}</li></span></Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


      {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/"><img className="nav-img" src="https://image.flaticon.com/icons/png/128/1532/1532495.png"></img></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto nav__links">
            <li class="nav-item active">
              <Link exact to="/">Inicio</Link>
            </li>
            <li class="nav-item">
              <Link to="/Products">Productos</Link>
            </li>
          </ul>
          <span class="navbar-text">
            <Link to="/Carrito" ><img src="https://image.flaticon.com/icons/png/512/711/711979.png" alt="carrito" className="img" style={disabled}></img></Link>
          </span>
          <span class="navbar-text">
            <li style={ocultar}>{acumulador}</li>
          </span>
        </div>
      </nav> */}
    </header>
  )
}

export default NavBar
