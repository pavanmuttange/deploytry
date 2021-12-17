import React from "react";
import { NavLink } from "react-router-dom";

const Nav= () =>{
    return(
        <div>
        <div className="container-fluid nav-bg">
        <div className="row">
        <div className="col-10 mx-auto">
       
        <nav className="navbar navbar-expand-lg navbar-light bg-#fff">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto" />
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/services">Services</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
     
  </div>
</nav>
</div>
</div>
</div>
        </div>
    );
}
export default Nav;