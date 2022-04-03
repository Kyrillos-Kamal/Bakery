import React from "react";
import superiorBreads from "./ben-garratt-134774-600x500.jpg";
import Bagels from "./stas-ovsky-123540-600x500.jpg";
import Cookies from "./clem-onojeghuo-206832-600x500.jpg";

import "./Blog.css";
export default function Offers() {
  return (
    <>
      <section id="blog" className="py-5 justify-content-center align-items-center">
        <h1 className="text-center text-uppercase   mb-4">Our Baking</h1>
        <p className="text-center mb-5">
          Learn more about them. We have worked truly hard to make them perfect
          for every use.
        </p>
        <div className="row justify-content-around">
          <div className="col-md-4 text-center">
            <img
              src={superiorBreads}
              className="mb-4 img-transform-left  rounded-circle circle shadow-lg"
              alt="Superior Breads"
            />
            <h2>Superior Breads</h2>
            <p className="px-5 text-center">
              Proin interdum, ante ut sollicitudin commodo, tellus quam sagittis
              libero, at semper mauris velit a velit. Phasellus commodo turpis
              et lacinia posuere
            </p>
          </div>
          <div className="col-md-4 text-center ">
            <img
              src={Bagels}
              className="mb-4 img-transform-clock  rounded-circle circle shadow-lg"
              alt="Bagels"
            />
            <h2>Bagels</h2>
            <p className="px-5 text-center">
              Proin interdum, ante ut sollicitudin commodo, tellus quam sagittis
              libero, at semper mauris velit a velit. Phasellus commodo turpis
              et lacinia posuere
            </p>
          </div>
          <div className="col-md-4 text-center">
            <img
              src={Cookies}
              className=" mb-4 img-transform  rounded-circle circle shadow-lg"
              alt="Cookies"
            />
            <h2>Cookies</h2>
            <p className="px-5 text-center">
              Proin interdum, ante ut sollicitudin commodo, tellus quam sagittis
              libero, at semper mauris velit a velit. Phasellus commodo turpis
              et lacinia posuere
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
