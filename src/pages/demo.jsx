import React, { useState, useCallback } from "react";
import Header from "../components/app/Header";
import { Col, Container, Row, Button, Offcanvas } from "react-bootstrap";
import { css } from "@emotion/react";

const Grid = ({ handleClick }) => {
  const openDetail = () => {
    // TODO: pass id?
    handleClick();
  };
  return (
    <Col lg={3} md={6} sm={12} className="mb-3">
      <div
        className="mb-2"
        css={css`
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 100%;
          background: rgba(66, 66, 66, 1);
          cursor: pointer;
          &:hover {
            .name {
              opacity: 1;
            }
          }
        `}
        onClick={openDetail}
      >
        <div
          className="p-3 name"
          css={css`
            position: absolute;
            width: 100%;
            bottom: 0;
            background-color: rgba(255, 255, 255, 0.5);
            text-align: center;
            opacity: 0;
            transition: opacity 0.3s;
          `}
        >
          詳細規格
        </div>
      </div>
      <div>
        <h4>名稱</h4>
        <div>項目一</div>
        <div>項目二</div>
        <Button variant="link" className="px-0" onClick={openDetail}>
          詳細規格
        </Button>
      </div>
    </Col>
  );
};

const DemoPage = () => {
  const [show, setShow] = useState(false);
  const open = useCallback(() => {
    setShow(true);
  }, []);
  const close = useCallback(() => {
    setShow(false);
  }, []);
  return (
    <>
      <Header />
      <Container as="main">
        <Row>
          <Grid handleClick={open} />
          <Grid handleClick={open} />
          <Grid handleClick={open} />
          <Grid handleClick={open} />
          <Grid handleClick={open} />
          <Grid handleClick={open} />
          <Grid handleClick={open} />
          <Grid handleClick={open} />
        </Row>
        <Offcanvas
          show={show}
          onHide={close}
          placement="bottom"
          css={css`
            height: auto;
            max-height: 70vh;
          `}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>名稱</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Row>
              <Col>
                <img
                  className="w-100"
                  src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt=""
                />
              </Col>
              <Col>
                <p>簡介</p>
                <p>描述描述描述描述描述描述，描述描述描述描述</p>
              </Col>
            </Row>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </>
  );
};

export default DemoPage;
