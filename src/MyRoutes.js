import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Vault from "./pages/Vault/Vault";
import Dao from "./pages/Dao";
import Discourse from "./pages/Discourse";
import About from "./pages/About";
import Index from "./pages/Vault";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/vault" element={<Index />} />
        <Route path="/dao" element={<Dao />} />
        <Route path="/docs" element={<About />} />
        <Route path="/discourse" element={<Discourse />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
