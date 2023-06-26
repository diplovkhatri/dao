import React from "react";
import { Button, Container } from "react-bootstrap";
import Bidhistory from "./Bidhistory";

const Bid = () => {
  return (
    <Container
      fluid
      style={{
        zIndex: "1"
      }}
    >
      <span>JUJU #567</span>
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
        <div>right</div>
      </div>
    </Container>
  );
};

export default Bid;
