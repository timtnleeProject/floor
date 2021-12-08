import React from "react";
import { Carousel, Container } from "react-bootstrap";
import ImageBlock from "../common/ImgBlock";

const imgLinks = [
  "https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/6480211/pexels-photo-6480211.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/5997967/pexels-photo-5997967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

export default function Banner() {
  return (
    <Container>
      <Carousel interval={2500} pause={false}>
        {imgLinks.map((link, i) => (
          <Carousel.Item key={i}>
            <ImageBlock src={link} />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}
