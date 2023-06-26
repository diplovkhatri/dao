import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function OffcanvasExample() {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-opacity-25 bg-white fixed-top text-dark"
        >
          <Container fluid>
            <Navbar.Brand href="#">JUJU</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  JUJU
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body style={{ color: "black", font: "bold" }}>
                <Nav className="justify-content-center flex-grow-1 pe-9 m-2 fw-bold fs-4">
                  <Nav.Link href="/vault" style={{ color: "black" }}>
                    Vault
                  </Nav.Link>
                  <Nav.Link href="/dao" style={{ color: "black" }}>
                    DAO
                  </Nav.Link>
                  <Nav.Link href="/docs" style={{ color: "black" }}>
                    DOCS
                  </Nav.Link>
                  <Nav.Link href="discourse" style={{ color: "black" }}>
                    Discourse
                  </Nav.Link>
                </Nav>
                <Button
                  className="ms-4 text-black fw-bold fs-3 h-25 "
                  style={{ backgroundColor: "#FFB801", border: "none" }}
                >
                  connect
                </Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
