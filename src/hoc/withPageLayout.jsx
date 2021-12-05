import React from "react";
import Header from "../components/app/Header";
import Footer from "../components/app/Footer";

const withPageLayout = (Component) => (props) =>
  (
    <>
      <Header />
      <Component {...props} />
      <Footer />
    </>
  );

export default withPageLayout;
