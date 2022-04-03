import React from "react";
import "./About.css";
import alexander from "./alexandru-stavrica-170390-800x760.jpg";
import chief from "./full-2-800x640.jpg";
export default function About() {
  return (
    <>
      <section id="about" className="py-5 my-5">
        <div className="row mb-5">
          <div className="col-md-5">
            <img
              src={alexander}
              className="w-100 p-5 img-transform-left"
              alt="description"
            />
          </div>
          <div className="col-md-6 text-center d-flex flex-column justify-content-center">
            <h2 className="mb-5">Who We Are?</h2>
            <p className="text-justify px-3 ">
              We have been operating for over 30 years and are Members of The
              Federation of Master Builders. We work on projects big and small
              from small residential extensions to full house. We are so happy
              with this theme. Everyday it make our lives better.
            </p>
            <ul className="fa-ul text-start px-2">
              <li>
                <span className="fa-li">
                  <i className="fa-solid fa-heart  me-5"></i>
                </span>
                We care about environment.
              </li>
              <li>
                <span className="fa-li">
                  <i className="fa-solid fa-arrow-trend-up me-5"></i>
                </span>
                We are trusted by hundreds of clients.
              </li>
              <li>
                <span className="fa-li">
                  <i className="fa-solid fa-thumbs-up me-5"></i>
                </span>
                Social media loves us.
              </li>
              <li>
                <span className="fa-li">
                  <i className="fa-solid fa-plus me-5"></i>
                </span>
                This list is super easy to create.
              </li>
            </ul>
          </div>
        </div>
        <div className="row special-bg">
          <div className="col-md-6 text-center d-flex flex-column justify-content-center align-items-center">
            <h2 className="mb-5">Our Location</h2>
            <p className="text-justify  px-5 ">
              We have been operating for over 30 years and are Members of The
              Federation of Master Builders. We work on projects big and small
              from small residential extensions to full house. We are so happy
              with this theme. Everyday it make our lives better.
            </p>
            <p className="text-justify px-5 ">
              Story on projects big and small from small residential extensions
              to full house. We are so happy with this theme. Everyday it make
              our lives better
            </p>
          </div>
          <div className="col-md-5">
            <img
              src={chief}
              className="w-100 p-5 img-transform"
              alt="description"
            />
          </div>
        </div>
      </section>
    </>
  );
}
