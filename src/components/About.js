import React from "react";
import { Accordion, useAccordionButton, Card } from "react-bootstrap";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <p
      type="button"
      style={{ backgroundColor: "transparent" }}
      onClick={decoratedOnClick}
      className="fw-bold fs-3 my-2"
    >
      {children}
    </p>
  );
}
const About = () => {
  return (
    <div className="container-fluid">
      {/* {data.map((item) => ({}))} */}
      <Accordion className="">
        <Card className=" border-0">
          <Card.Header className="bg-transparent border-0">
            <CustomToggle eventKey="0">JUJU</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="border-0">
          <Card.Header className="bg-transparent border-0">
            <CustomToggle eventKey="1">Auction</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className=" border-0">
          <Card.Header className="bg-transparent border-0">
            <CustomToggle eventKey="2">JUJU DAO</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className=" border-0">
          <Card.Header className="bg-transparent border-0">
            <CustomToggle eventKey="3">NFTs</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default About;
