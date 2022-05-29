import React from "react";
//import {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";



const NavBarUser = () =>{

    // const[user, setUser]= useState({});
    // useEffect(() => {
    //    setInterval(() => {
    //      const userString =localStorage.getItem("loggedInUser");
    //      const user = JSON.parse(userString);
    //      setUser(user);
       
    //   }, 5000)
    // }, [])
    
    //   const logout = () => {
    //    return localStorage.removeItem("loggedInUser"); //is this needed or a event handler?
    //  }

    const SignoutSubmitHandler = () => {
      
      console.log('step 1');
          
      axios.get(`/`)
      
      .then((response) => {
          console.log('step 2');
          localStorage.clear()
          Navigate("/")
              
      }).catch((error) => {
      console.log(error);
      });
  }
    
    const Navigate = useNavigate()
    
    if(localStorage.getItem('loggedInUser')){
          return (
            <div className="container-fluid bg-dark">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand" href="/home">The Pet Stylist of Atlanta</a>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  
                  <li className="nav-item">
                    <a className="nav-link" href="/profile">Profile</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/profile/update">Update Profile</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/profile/dogs">Dogs</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/profile/dog/update">Update Dogs</a>
                  </li>
                </ul>
                  <button className="btn btn-outline-success my-2 my-sm-0" id="button"onClick={SignoutSubmitHandler}> Sign Out</button>
              </div>
              </nav>
                    </div>
                    );
    
                }else {   
          //orginal navbar component
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
    
        }
  
  
    }

  export default NavBarUser;


    