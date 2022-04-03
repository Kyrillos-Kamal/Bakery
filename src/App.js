import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import React from "react";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
