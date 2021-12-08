import React, { useState, useCallback } from "react";
import { Col, Container, Row, Button, Offcanvas } from "react-bootstrap";
import { css } from "@emotion/react";
import withPageLayout from "../hoc/withPageLayout";
import ImageBlock from "../components/common/ImgBlock";

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

const ImgSelect = ({ src, onSelect, active }) => (
  <div>
    <ImageBlock
      onClick={onSelect}
      css={css`
        opacity: ${active ? "1" : "0.5"};
        cursor: pointer;
      `}
      src={src}
    />
  </div>
);

const DemoPage = () => {
  const [show, setShow] = useState(false);
  const [displayImg, setDisplayImg] = useState("");
  const open = useCallback(() => {
    setShow(true);
    setDisplayImg(
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    );
  }, []);
  const close = useCallback(() => {
    setShow(false);
  }, []);
  return (
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
          height: auto !important;
          max-height: 80vh !important;
        `}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title as={Container} className="fs-4">
            名稱
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body as={Container}>
          <Row>
            <Col md={6} sm={12}>
              <div className="mb-3">
                <ImageBlock src={displayImg}></ImageBlock>
              </div>
              <div
                css={css`
                  display: flex;
                  width: 100%;
                  flex-wrap: nowrap;
                  background-color: black;
                  > div {
                    flex-grow: 1;
                    img {
                      width: 100%;
                    }
                  }
                `}
              >
                {[
                  "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                  "https://images.pexels.com/photos/6480211/pexels-photo-6480211.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                  "https://images.pexels.com/photos/6492397/pexels-photo-6492397.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                ].map((src, i) => (
                  <ImgSelect
                    key={i}
                    src={src}
                    onSelect={() => {
                      setDisplayImg(src);
                    }}
                    active={src === displayImg}
                  />
                ))}
              </div>
            </Col>
            <Col md={6} sm={12}>
              <p>簡介</p>
              <p>描述描述描述描述描述描述，描述描述描述描述</p>
            </Col>
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  );
};

export default withPageLayout(DemoPage);
