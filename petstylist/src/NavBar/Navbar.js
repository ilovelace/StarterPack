import React from "react";




const Navbar = () => {
    return (
<div className="container-fluid bg-dark">
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a className="navbar-brand" href="/">The Pet Stylist of Atlanta</a>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <a className="nav-link" href="/aboutus">AboutUs</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/services">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/signup">Book Appt</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/contactme">Contact Me</a>
      </li>
      <li className="nav-item1">
        <a className="nav-link" href="/login">Login</a>
      </li>
    </ul>
   
      <a className="btn btn-outline-success my-2 my-sm-0" href='/signup'>Book Appt</a>
  </div>
  </nav>
        </div>
        );

};
  
export default Navbar;