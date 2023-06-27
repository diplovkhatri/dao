import React from "react";
import { Container } from "react-bootstrap";
import images from "./image1.png";

const Intro = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${images})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain"
      }}
    >
      <Container>
        <div className="d-flex justify-content-center py-5">
          <p className="w-75 fs-3 fw-semibold my-5 py-5 px-4 border border-2 rounded-4 bg-white bg-opacity-50 ">
            See! An endless work of art! JUJU is community-owned DAO that has a
            good social impact through supporting initiatives and encouraging
            teamwork. JUJU is for everyone, from techies and nonprofit
            organizations to collectors and businesses.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Intro;
