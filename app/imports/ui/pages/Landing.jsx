import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" fluid className="py-3">
    <Row className="align-middle text-center">
      {/* <Col xs={4}> */}
      {/*  <Image roundedCircle src="/images/meteor-logo.png" width="150px" /> */}
      {/* </Col> */}

      <Col className="d-flex flex-column justify-content-center">
        <h1>Passbots</h1>
        <p>Where we store your passwords</p>
      </Col>

    </Row>
  </Container>
);

export default Landing;
