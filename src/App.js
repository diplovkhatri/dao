import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Carousel from "./Carousel/carousel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bid from "./components/Bid";
import Intro from "./components/Intro";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Bid />
      <Intro />
      <About />
      <Footer />
    </div>
  );
}

export default App;
