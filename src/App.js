import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Carousel from "./Carousel/carousel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bid from "./components/Bid";
import Intro from "./components/Intro";
import About from "./components/About";
import Footer from "./components/Footer";
import Connect from "./components/connection/Connect";

function App() {
  return (
    <div className="">
      <div style={{ backgroundColor: "#E6DFEA" }}>
        <Navbar />
        <Carousel />
        <Bid />
        <Intro />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
