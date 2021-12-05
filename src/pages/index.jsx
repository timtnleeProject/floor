import * as React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Head from "../components/app/Head";
import Banner from "../components/home/Banner";
import withPageLayout from "../hoc/withPageLayout";

const DemoCard = ({ img }) => (
  <Card className="h-100">
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </Card.Text>
    </Card.Body>
  </Card>
);

// markup
const IndexPage = () => {
  return (
    <main>
      <Head
        title="Demo"
        description="Jeff, Jeff, Jeff"
        image="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
      <Banner />
      <Container className="mt-3">
        <div className="text-center my-5">
          <h1 className="py-3">Floor</h1>
          <div>Best xxx, aaaa and bbb.</div>
        </div>
        <Row>
          <Col md={4} sm={12}>
            <DemoCard img="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          </Col>
          <Col md={4} sm={12}>
            <DemoCard img="https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          </Col>
          <Col md={4} sm={12}>
            <DemoCard img="https://images.pexels.com/photos/6492397/pexels-photo-6492397.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default withPageLayout(IndexPage);
