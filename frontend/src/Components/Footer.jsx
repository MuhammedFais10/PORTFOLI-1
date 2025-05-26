import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../asset/img/nav-icon1.svg";
import navIcon2 from "../asset/img/nav-icon2.svg";
import navIcon3 from "../asset/img/nav-icon3.svg";
import MailChimpForm from './MailChimpForm';


function Footer() {
  return (
    <footer className="footer">
    <Container>
      <Row className="align-items-center">
        <MailChimpForm />
        <Col size={12} sm={6}>
          <img src="/logo.svg" alt="Logo" />
        </Col>
        <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
            <a href="#"><img src={navIcon1} alt="Icon" /></a>
            <a href="#"><img src={navIcon2} alt="Icon" /></a>
            <a href="#"><img src={navIcon3} alt="Icon" /></a>
          </div>
          <p>Copyright 2025. All Rights Reserved</p>
        </Col>
      </Row>
    </Container>
  </footer>

  )
}

export default Footer