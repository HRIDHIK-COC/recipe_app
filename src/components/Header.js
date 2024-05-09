import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";


function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      className="bg-body-tertiary"
      // style={{
      //   height: "150px",
      //   display: "flex",
      //   justifyContent: "space-evenly",
      // }}
    >
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
         <Link to={'/'}>
              <img
                style={{ marginLeft: "20px" }}
                alt=""
                src="https://i.postimg.cc/xTkbBBym/soul-removebg-preview-1.png"
                width="150"
                height="100"
                className="w-100 d-inline-block align-top"
              />{" "}
          </Link>
          </Navbar.Brand>
          <Navbar.Toggle className="bg-body-secondary" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="me-auto"><Nav.Link></Nav.Link></Nav>
            
            <Nav className=" d-flex flex-lg-row flex-column align-items-start justify-content-center">
              <Nav.Link
              
                style={{ marginLeft: "20px" }}
                className="d1 align-self-center"
                href="#home"
              >
                Place An Order
              </Nav.Link>
              <Nav.Link
                style={{ marginLeft: "20px" }}
                className="d1 align-self-center"
                href="#link"
              >
                About Us
              </Nav.Link>
              <Nav.Link
                style={{ marginLeft: "20px" }}
                className="d1 align-self-center"
                href="#link"
              >
                Contact
              </Nav.Link>

              <Nav.Link
                style={{ marginLeft: "20px" }}
                className="d1 align-self-center"
                href="#link"
              >
              <button
        id="d2"
        onClick={handleShow}
        style={{
          
         padding:'5px 10px',
          borderRadius: "10px",
          
        }}

      >
        Sign In
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="d3">Sign in to your account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            style={{ width: "100%" }}
            type="email"
            name=""
            id=""
            className='form-control'
            placeholder="email"
          />
          <br />
          <input
            style={{ marginTop: "20px", width: "100%" }}
            type="password"
            className='form-control'
            placeholder="Password"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      

              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    {/* <i style={{marginTop:'55px'}} class="fa-solid fa-cart-shopping fa-2x"></i> */}
      {/* modal */}

    </div>
  );
}

export default Header;
