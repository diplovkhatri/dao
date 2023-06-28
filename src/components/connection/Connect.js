import React, { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import Switchwallet from "./Switchwallet";

const Connect = () => {
  const [connect, setConnect] = useState(true);
  const toggle = () => {
    setConnect(!connect);
  };
  return (
    <>
      {connect ? (
        <Button
          onClick={toggle}
          className="text-black fw-bold fs-4 "
          style={{
            backgroundColor: "#FFB801",
            border: "none",
            marginTop: "13px",
            height: "40px",
            paddingTop: "2px",
            width: "160px"
          }}
        >
          connect
        </Button>
      ) : (
        <Dropdown>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            className="text-black fw-bold fs-4 "
            style={{
              backgroundColor: "#FFB801",
              border: "none",
              marginTop: "13px",
              height: "40px",
              paddingTop: "2px",
              width: "160px"
            }}
          >
            address
          </Dropdown.Toggle>

          <Dropdown.Menu
            className="fs-5"
            style={{
              fontWeight: "bolder"
            }}
          >
            <Dropdown.Item href="#/action-1" className="bg-transparent">
              <Switchwallet />
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="/" className="bg-transparent" onClick={toggle}>
              sign out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )}
    </>
  );
};

export default Connect;
