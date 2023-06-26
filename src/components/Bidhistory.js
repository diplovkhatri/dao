import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function History(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{
        zIndex: "1000000"
      }}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className="d-flex justify-content-start">
            <div className="">
              <img
                src=""
                alt=""
                style={{
                  width: "70px",
                  height: "70px"
                }}
              />
            </div>
            <div className="fs-5 d-flex flex-column ms-3">
              <span className="fs-5">Bid history</span>
              <p className="fs-6">JUJU #567</p>
            </div>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Bid address with Bid value */}
        <div
          className="d-flex justify-content-between pt-2 rounded-3 px-2 m-2"
          style={{
            height: "45px",
            backgroundColor: "#E9E9E9"
          }}
        >
          <div className="d-flex">
            <img
              src=""
              alt=""
              className="rounded-circle me-3"
              style={{
                width: "30px",
                height: "30px",
                border: "1px solid gray"
              }}
            />
            <p className="mt-1">Bid address</p>
          </div>
          <p className="mt-1">Bid value</p>
        </div>
        <div
          className="d-flex justify-content-between pt-2 rounded-3 px-2 m-2"
          style={{
            height: "45px",
            backgroundColor: "#E9E9E9"
          }}
        >
          <div className="d-flex">
            <img
              src=""
              alt=""
              className="rounded-circle me-3"
              style={{
                width: "30px",
                height: "30px",
                border: "1px solid gray"
              }}
            />
            <p className="mt-1">Bid address</p>
          </div>
          <p className="mt-1">Bid value</p>
        </div>
        <div
          className="d-flex justify-content-between pt-2 rounded-3 px-2 m-2"
          style={{
            height: "45px",
            backgroundColor: "#E9E9E9"
          }}
        >
          <div className="d-flex">
            <img
              src=""
              alt=""
              className="rounded-circle me-3"
              style={{
                width: "30px",
                height: "30px",
                border: "1px solid gray"
              }}
            />
            <p className="mt-1">Bid address</p>
          </div>
          <p className="mt-1">Bid value</p>
        </div>
      </Modal.Body>
    </Modal>
  );
}
const Bidhistory = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Button
        className="w-100 px-4 text-black fw-bold fs-4 rounded-1 text-white"
        style={{
          backgroundColor: "#7000FF",
          border: "none"
        }}
        onClick={() => setModalShow(true)}
      >
        BID HISTORY
      </Button>
      <History show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default Bidhistory;
