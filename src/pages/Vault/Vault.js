import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import images from "./image1.png";
import { LinearGradient } from "react-text-gradients";

const Vault = () => {
  const mystyle = {
    height: "60vh",
    width: "auto",
    backgroundImage: `url(${images})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  };
  return (
    <div style={mystyle} className="overflow-hidden">
      {/* info */}
      <div
        className=""
        style={{
          marginTop: "120px",
          marginLeft: "60px",
          marginRight: "60px",
          paddingBottom: "20px"
        }}
      >
        {/* sort desc */}
        <div className="row">
          <div className="col-sm-12 d-flex flex-column justify-content-center mt-5">
            <span className="fw-bold fs-1">
              <LinearGradient
                gradient={["to right", "#F800D0 ,#FFA800"]}
                fallbackColor="black"
              >
                JUJU DAO
              </LinearGradient>
            </span>
            <p>
              The vault of JUJU DAO is for the JUJU NFT holders for the long
              term growth od the project
            </p>
          </div>
          {/* vault */}
          <div
            className="row d-flex justify-content-evenly mt-5 pb-5"
            style={{ height: "250px" }}
          >
            <div
              className="col-md-5 rounded-4 p-4 bg-white bg-opacity-50"
              style={{ width: "400px" }}
            >
              <div className="row">
                <div className="col-md-2 fw-bold fs-4 opacity-75">VAULT</div>
                <div className="col-md-10 d-flex justify-content-center">
                  <div className="fw-bold fs-3 pt-3">
                    <span>ETH</span>
                    <p>22,22,287</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-5 bg-white p-4 bg-opacity-50 ms-4 rounded-4 d-flex justify-content-center"
              style={{ width: "400px" }}
            >
              <div className="fw-bold fs-3 pt-3">
                <span>$ USD</span>
                <p>2222222222222</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vault;
