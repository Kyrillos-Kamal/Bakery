import React from "react";
import logo from "./bakery-light-1.png";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <section id="footer" className="brown w-100 py-5 text-white ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <h4 className="fw-light text-uppercase mb-2">About Us</h4>
              <p className="text-justify">
                I am text block. Click edit button to change this text. Lorem
                ipsum dolor sit amet, consectetur. I am text block. Click edit
                button to change this text. Lorem ipsum dolor sit amet,
                consectetur.
              </p>
              <p className="text-justify">
                We are the champions! We are the most amazing theme of all time,
                yeah.
              </p>
            </div>
            <div className="col-md-3">
              <h4 className="fw-light text-uppercase mb-2">
                Why We Are Special?
              </h4>
              <ul className="mx-0 px-0">
                <li className="mx-0 px-0 py-2  Footer-ul-li">
                  <i className="fa-solid fa-bowl-food"></i> Our magical recipe.
                </li>
                <li className="mx-0 px-0 py-2  Footer-ul-li">
                  {" "}
                  <i className="fa-solid fa-hand-holding-medical"></i> We care
                  about environment.
                </li>
                <li className="mx-0 px-0 py-2  Footer-ul-li">
                  <i className="fa-solid fa-martini-glass-citrus"></i> We are
                  trusted by hundreds of clients.
                </li>
                <li className="mx-0 px-0 py-2  Footer-ul-li">
                  <i className="fa-solid fa-hashtag"></i> Social media loves us!
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4 className="fw-light text-uppercase mb-2">Opening Hours</h4>
              <ul className="mx-0 px-0">
                <li className="mx-0 px-0 py-2  Footer-ul-li">
                  Monday 10AM - 9PM
                </li>
                <li className="mx-0 px-0 py-2  Footer-ul-li">
                  Tuesday 10AM - 9PM
                </li>
                <li className="mx-0 px-0 py-2  Footer-ul-li">
                  Wednesday 10AM - 9PM
                </li>
                <li className="mx-0 px-0 py-2  Footer-ul-li">
                  Thursday 10AM - 10PM
                </li>
                <li className="mx-0 px-0 py-2  Footer-ul-li">
                  Friday 10AM - 10PM
                </li>
                <li className="mx-0 px-0 py-2  Footer-ul-li">
                  Weekends 10AM - 11PM
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4 className="fw-light text-uppercase mb-2">Contact Details</h4>
              <ul className="mx-0 px-0">
                <li className="mx-0 px-0 py-2  Footer-ul-li">
                  123 Manchester St, Heywood OL10 1NL, UK
                </li>
                <li className="mx-0 px-0 py-2  Footer-ul-li">
                  +46 123 456 789
                </li>
                <li className="mx-0 px-0 py-2  Footer-ul-li">
                  +37 431 456 789
                </li>

                <li className="mx-0 px-0 py-2  Footer-ul-li">
                  http://www.sitename.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 special-color">
        <div className="container">
          <div className="w-50 text-center mx-auto ">
            <img src={logo} className="w-75 mb-4" alt="Logo" />
            <p className="text-white">
              Copyright 2022. All rights reserved to{" "}
              <span className="fw-bolder">Dusty</span>.
            </p>
            <div>
              <div className=" mx-auto text-center">
            
                <a target="_blank" href="mailto:kirllos1000@gmail.com" rel="noopener noreferrer">
                  <i className="fab fa-google mx-2 text-white"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/kyrillos-kamal/" rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in mx-2 text-white"></i>
                </a>
              
                <a
                  target="_blank"
                  href="https://kyrillos1993.github.io/Portfolio/" rel="noopener noreferrer"
                >
                  <i className="fas fa-code mx-2 text-white"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
