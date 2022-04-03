/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import bakeryLogo from "./bakery-light-1.png";
import { Link } from "react-scroll";
import $ from "jquery";
// import { Link } from "react-router-dom";

export default function Navbar() {
  let listener = null
  const [scrollState, setScrollState] = useState("top")

  useEffect(()=>{
    listener = document.addEventListener('scroll',e =>{
      var scrolled = document.scrollingElement.scrollTop;
      if(scrolled >= 380){
        $('nav').removeClass('bg-transparent').addClass('bg-nav');
      }else{
        $('nav').removeClass('bg-nav').addClass('bg-transparent');
      }
      console.log(scrolled);
    });
  },[]);
  return (
    <nav className="navbar navbar-expand-lg position-fixed shadow-lg pos-index navbar-light bg-transparent">
      <div className="container">
        <Link
          to="home"
          smooth={true}
          offset={0}
          duration={200}
          className="navbar-brand"
        >
          <div className="w-50">
            <img src={bakeryLogo} alt="Logo" className="w-75" />
          </div>
        </Link>
       
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={200}
                className="nav-link"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={200}
                className="nav-link"
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="blog"
                spy={true}
                smooth={true}
                offset={0}
                duration={200}
                className="nav-link"
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={200}
                className="nav-link"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
