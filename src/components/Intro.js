import React from "react";
import { Container } from "react-bootstrap";

const Intro = () => {
  return (
    <Container fluid className="bg-info">
      <Container>
        <div className="d-flex justify-content-center py-5">
          <p className="w-75 fs-3 fw-semibold my-5 py-5 px-4 border border-2 rounded-4 bg-transparent ">
            See! An endless work of art! JUJU is community-owned DAO that has a
            good social impact through supporting initiatives and encouraging
            teamwork. JUJU is for everyone, from techies and nonprofit
            organizations to collectors and businesses.
          </p>
        </div>
      </Container>
    </Container>
  );
};

export default Intro;
