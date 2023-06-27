import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Dao from "./Dao";
import Proposal from "./Proposal";

const Index = () => {
  return (
    <div
      style={{
        backgroundColor: "#E6DFEA"
      }}
    >
      <Navbar />

      {/* info */}
      <Dao />
      <Proposal />
      <Footer />
    </div>
  );
};

export default Index;
