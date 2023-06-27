import React from "react";
import { Button } from "react-bootstrap";

const Proposal = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between mt-4">
        <span className="fw-bold fs-3 mt-2">PROPOSALS</span>
        <div className="d-flex w-100 justify-content-end">
          <p className="me-3 mt-3 opacity-50">
            connect wallet to make a Proposal
          </p>
          <Button className="bg-white text-black opacity-50 border-white fw-bold">
            submit proposal
          </Button>
        </div>
      </div>
      {/* proposals */}
      <div className="mt-3">
        <div className="p-3 bg-secondary bg-opacity-25 rounded-3">
          <div className="d-flex justify-content-between">
            <div className="m-1 fs-4 fw-semibold">
              <span className="mt-1">3. </span>
              <span className="">JUJU Proposal 3</span>
            </div>
            <div>
              <Button
                className="text-black fw-semibold fs-5 m-1 border-0"
                style={{ backgroundColor: "#A2A9A1" }}
              >
                pending
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="p-3 bg-secondary bg-opacity-25 rounded-3">
          <div className="d-flex justify-content-between">
            <div className="m-1 fs-4 fw-semibold">
              <span className="mt-1">3. </span>
              <span className="">JUJU Proposal 3</span>
            </div>
            <div>
              <Button
                className="text-black fw-semibold fs-5 m-1 border-0"
                style={{ backgroundColor: "#A2A9A1" }}
              >
                pending
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="p-3 bg-secondary bg-opacity-25 rounded-3">
          <div className="d-flex justify-content-between">
            <div className="m-1 fs-4 fw-semibold">
              <span className="mt-1">3. </span>
              <span className="">JUJU Proposal 3</span>
            </div>
            <div>
              <Button
                className="text-black fw-semibold fs-5 m-1 border-0"
                style={{ backgroundColor: "#A2A9A1" }}
              >
                pending
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="p-3 bg-secondary bg-opacity-25 rounded-3">
          <div className="d-flex justify-content-between">
            <div className="m-1 fs-4 fw-semibold">
              <span className="mt-1">3. </span>
              <span className="">JUJU Proposal 3</span>
            </div>
            <div>
              <Button
                className="text-black fw-semibold fs-5 m-1 border-0"
                style={{ backgroundColor: "#A2A9A1" }}
              >
                pending
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proposal;
