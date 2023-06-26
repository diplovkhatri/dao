import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import abs from "./download.jpeg";
import Vault from "./Vault";
import Proposal from "./Proposal";

const Index = () => {
  const mystyle = {
    backgroundImage: `url(${abs})`,
    height: "60vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  };
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
