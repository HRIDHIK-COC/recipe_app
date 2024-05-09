import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Footer.css";


function Footer() {
  return (
    <div style={{ backgroundColor: "#664f3c" }}>
      <Row className="w-100 d-flex justify-content-center">
        <Col lg={3} xs={12} sm={4}
          className="text-white"
          style={{ paddingLeft: "50px", paddingTop: "50px" }}
        >
          <img src="https://i.postimg.cc/BZjJJ3Zy/footer.png" alt="" /> <br />
          <p style={{ marginTop: "20px" }}>Follow Us on</p>
          <i class="fa-brands fa-twitter fa-2x"></i>
          <i
            style={{ marginLeft: "10px" }}
            class="fa-brands fa-instagram fa-2x"
          ></i>
          <i
            style={{ marginLeft: "10px" }}
            class="fa-brands fa-facebook-f fa-2x"
          ></i>
        </Col>
        <Col lg={3} xs={12} sm={4} style={{paddingLeft: "50px", paddingTop:'50px'}} >
          <p id="f1">Packages</p>
          <p id="f1">Events</p>
          <p id="f1">Corporate</p>
        </Col>
        <Col lg={3} xs={12} sm={4}  style={{paddingLeft: "50px",paddingTop:'50px'}} >
          <p id="f1">Contact</p>
          <p id="f1">Sign In</p>
          <p id="f1">Terms & Condition</p>
        </Col >
        <Col lg={3}>
        <img
          id="f2"
          className="w-100"
          style={{
           
            height: "30x",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain ",
          }}
          src="https://i.postimg.cc/ydwsmDGr/f2-removebg-preview.png"
          alt=""
        />
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
