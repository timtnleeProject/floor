import * as React from "react";
import Header from "../components/app/Header";
import { Container } from "react-bootstrap";
import Banner from "../components/home/Banner";

// markup
const IndexPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Container>
        <h2>Title</h2>
        <p>test</p>
        <p>test</p>
      </Container>
    </>
  );
};

export default IndexPage;
