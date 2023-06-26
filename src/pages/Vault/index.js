import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Vault from "./Vault";
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
      <Vault />
      <Proposal />
      <Footer />
    </div>
  );
};

export default Index;
