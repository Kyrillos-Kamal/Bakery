/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

export default function Contact() {
  return (
    <>
      <section id="contact" className="py-5 special-bg row  ">
        <div className="col-md-6 px-5 py-5">
          <h2 className="text-center text-uppercase  mb-3">
            Contact Information
          </h2>
          <p className="text-justify mx-auto mb-4">
            I am text block. Click edit button to change this text. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
            nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <h3 className="fw-light ms-4 text-uppercase">Our Contact Details</h3>
          <ul className="text-start">
            <li className=" text-start mb-3">
                <i className="fa-solid fa-location-dot ms-0 me-2"></i>
              123 Manchester St, Heywood OL10 1NL, UK
            </li>
            <li className=" text-start mb-3">
                <i className="fa-solid fa-phone ms-0 me-2"></i>
              +46 123 456 789
            </li>
            <li className="mx-0 text-start mb-3">
                <i className="fa-solid fa-phone ms-0 me-2"></i>
              +37 431 456 789
            </li>
            <li className="mx-0 text-start mb-3">
                <i className="fa-solid fa-envelope ms-0 me-2"></i>
              hello@sitename.com
            </li>
          </ul>
        </div>
        <div className="col-md-5 text-center">
          <iframe
            className="w-100 h-100 shadow-lg "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2368.1748645454504!2d-2.2142129487452604!3d53.59034146401031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bbbac47d7ce5b%3A0xf2ff58c111bb4f21!2s123%20Manchester%20St%2C%20Heywood%20OL10%201NL%2C%20UK!5e0!3m2!1sen!2seg!4v1648931562243!5m2!1sen!2seg"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
