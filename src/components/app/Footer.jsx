import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="py-5 mt-5">
      <Container>
        <Row>
          <Col>footer</Col>
          <Col>information</Col>
        </Row>
      </Container>
    </footer>
  );
}
