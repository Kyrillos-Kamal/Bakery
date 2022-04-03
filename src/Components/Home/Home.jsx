/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-scroll";

import "./Home.css";

export default function Home() {
  return (
    <section id="home">
      <div className=" position-relative w-100 vh-100 overlay d-flex justify-content-center align-items-center text-center">
        <div className="position-absolute text-center w-75 text-white">
          <h2 className="mb-3 fs-4">Welcome to</h2>
          <h1 className="mb-3 ">Family Bakery</h1>
          <p className="fs-4 mb-4">
            We're the biggest, best equipped and most advanced Bakery in the
            greater Los Angeles area.
          </p>
          <div className="mb-4">
            <Link   to="about"
            smooth={true}
            offset={0}
            duration={200} className="btn btn-brown py-2 mx-1">Learn More</Link>
            <Link
              to="contact"
              smooth={true}
              offset={0}
              duration={200}
              className="btn  btn-blue py-2 mx-1 "
            >
              Contact Us
            </Link>
          </div>
          <div className="position-relative mx-auto text-center ">
            <Link
              to="about"
              smooth={true}
              offset={0}
              duration={200}
              className="d-flex justify-content-center text-white"
            >
              <i className="fa-solid fa-angles-down position-absolute fs-1 text-center"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
