import React from "react";
import { Button, Container } from "react-bootstrap";
import Bidhistory from "./Bidhistory";
import crt from "../components/juju111.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Bid = () => {
  return (
    <Container
      fluid
      style={{
        zIndex: "1"
      }}
    >
      <div className="row d-flex align-items-center h-auto">
        <div className="col-lg-1 col-md-1 col-sm-1 fs-1 px-1">
          <Button className="w-50 bg-transparent border-0 text-black fs-2">
            <FaArrowLeft />
          </Button>

          <Button className="w-50 bg-transparent border-0 text-black fs-2">
            <FaArrowRight />
          </Button>
        </div>
        <div className="col-lg-11 col-md-11 col-sm-11 fs-4 ">
          2nd march 2023
        </div>
      </div>
      <span className="fw-bold fs-1 ms-2">JUJU #567</span>
      <div className="d-flex">
        {/* first div */}
        <div className="flex w-50">
          {/* normal div */}
          <div className="w-100">
            {/* first div */}
            <div className="d-flex justify-content-evenly border border-3 border-black rounded-4 pt-3 pb-3">
              <div className="fs-4 fw-bold">
                <p>HIGHEST BID</p>
                <p>26.39 eth</p>
              </div>
              <div className="border border-2 border-black"></div>
              <div className="fs-4 fw-bold">
                <p>Time Remaining</p>
                <p>2h:3m:4s</p>
              </div>
            </div>
            {/* second div */}
            <div className="pt-3 pb-3 vh-auto">
              <div class="form-floating mb-3 d-flex justify-content-evenly">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput" className="ms-2">
                  Enter Eth
                </label>
                <Button
                  className="ms-4 px-4 text-black fw-bold fs-4"
                  style={{ backgroundColor: "#FFB801", border: "none" }}
                >
                  BID
                </Button>

                {/* history */}
              </div>
              <div className="flex">
                <div className="overflow-hidden">
                  <li className="d-flex justify-content-between fw-semibold">
                    <span>current bid address</span>
                    <span>26.31</span>
                  </li>
                  <hr />
                  <li className="d-flex justify-content-between fw-semibold">
                    <span>current bid address</span>
                    <span>26.31</span>
                  </li>
                  <hr />
                  <Bidhistory />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* second div */}
        <div className="w-50 d-flex justify-content-evenly">
          <img
            src={crt}
            alt=""
            style={{
              width: "400px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              height: "53.16vh",
              marginTop: "-90px"
            }}
          />
        </div>
      </div>
    </Container>
  );
};

export default Bid;
