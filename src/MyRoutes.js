import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";

import Discourse from "./pages/Discourse";
import About from "./pages/About";
import Index from "./pages/Dao";
import Vault from "./pages/Vault";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dao" element={<Index />} />
        <Route path="/vault" element={<Vault />} />
        <Route path="/docs" element={<About />} />
        <Route path="/discourse" element={<Discourse />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
