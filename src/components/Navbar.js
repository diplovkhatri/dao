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
          className="bg-opacity-75 bg-white my-2 fixed-top text-dark"
          style={{
            height: "47px",
            paddingBottom: "20px"
          }}
        >
          <div className="container">
            <Navbar.Brand href="#">JUJU</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <p
                    style={{
                      backgroundColor: "red"
                    }}
                  >
                    JUJU
                  </p>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body style={{ color: "black", font: "bold" }}>
                <Nav
                  style={{
                    marginTop: "10px"
                  }}
                  className="justify-content-center flex-grow-1 pe-9 fw-bold fs-5"
                >
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
                {/* connect button */}
                <Button
                  className="ms-4 text-black fw-bold fs-4 "
                  style={{
                    backgroundColor: "#FFB801",
                    border: "none",
                    marginTop: "12px"
                  }}
                >
                  connect
                </Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
