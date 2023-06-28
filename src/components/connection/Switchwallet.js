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
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Switch Account
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* List of Wallets */}
        <a href="">aaaa</a>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
}
const Switchwallet = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div
      className="w-100 text-black"
      style={{
        border: "none"
      }}
      onClick={() => setModalShow(true)}
    >
      Switch
      <History show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default Switchwallet;
