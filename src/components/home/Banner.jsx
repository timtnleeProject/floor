import { css } from "@emotion/react";
import React from "react";
import { Carousel, Container } from "react-bootstrap";

const bgSlideStyle = css`
  width: 100%;
  height: 0;
  padding: 30% 0;
  background-repeat: no-repeat;
  background-clip: padding-box;
  background-size: cover;
`;

export default function Banner() {
  return (
    <Container>
      <Carousel interval={2500} pause={false}>
        <Carousel.Item>
          <div
            css={css`
              ${bgSlideStyle}
              background-image: url("https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_960_720.jpg");
            `}
          ></div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            css={css`
              ${bgSlideStyle}
              background-image: url("https://cdn.pixabay.com/photo/2018/06/13/18/20/waves-3473335_960_720.jpg");
            `}
          ></div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            css={css`
              ${bgSlideStyle}
              background-image: url("https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_960_720.jpg");
            `}
          ></div>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
