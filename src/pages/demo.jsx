import React from "react";
import Header from "../components/app/Header";
import { Col, Container, Row } from "react-bootstrap";
import { css } from "@emotion/react";

const Grid = () => {
  return (
    <Col lg={3} md={6} sm={12} className="mb-3">
      <div
        css={css`
          width: 100%;
          height: 0;
          padding-bottom: 100%;
          background: rgba(66, 66, 66, 1);
        `}
      ></div>
    </Col>
  );
};

const DemoPage = () => (
  <>
    <Header />
    <Container as="main">
      <Row>
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
      </Row>
    </Container>
  </>
);

export default DemoPage;
