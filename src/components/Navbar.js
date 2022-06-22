import {Link, NavLink } from 'react-router-dom';

const Navbar = () => {

  const navigate = () =>{
    let nav = document.getElementById("navbarNav");
    nav.classList.toggle("show")
 }

  return (
<nav className="navbar">
   <div className="container-fluid">
    <Link to="/">
      <img src={ require("../assets/shared/logo.svg").default } alt="" className='navbar-brand'/>
    </Link>
      
    <div className='strikethrough'></div>

<div className="navbarNav" id="navbarNav">
  <ul className="navbar-nav">
    <li className="nav-item me-5">
      <NavLink className="nav-link" aria-current="page" to="/" onClick={navigate}>
        <span className='linkNum'>00</span>
        <span className='linkName'>Home</span>
      </NavLink>
    </li>
    <li className="nav-item d-flex align-items-center me-5">
      <NavLink className="nav-link" to="/destination" onClick={navigate}>
        <span className='linkNum'>01</span>
        <span className='linkName'>Destination</span>
      </NavLink>
    </li>
    <li className="nav-item d-flex align-items-center me-5">
      <NavLink className="nav-link" to="/crew" onClick={navigate}>
        <span className='linkNum'>02</span>
        <span className='linkName'>Crew</span>
      </NavLink>
    </li>
    <li className="nav-item d-flex align-items-center me-0 me-lg-5">
      <NavLink className="nav-link" to="/technology" onClick={navigate}>
        <span className='linkNum'>03</span>
        <span className='linkName'>Technology</span>
      </NavLink>
    </li>
  </ul>
 
  <img src={ require("../assets/shared/icon-close.svg").default } alt="" className="close-icon" onClick={navigate}/>
 
</div>
 
  <img src={ require("../assets/shared/icon-hamburger.svg").default } alt="" className="navbar-toggler" onClick={navigate}/>

  </div>
</nav>
  )
}

export default Navbar
