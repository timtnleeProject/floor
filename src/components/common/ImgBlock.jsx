import { css } from "@emotion/react";
import React from "react";

const bgSlideStyle = css`
  width: 100%;
  height: 0;
  padding: 30% 0;
  background-repeat: no-repeat;
  background-clip: padding-box;
  background-size: cover;
`;

export default function ImageBlock({ src, ...rest }) {
  return (
    <div
      css={css`
        ${bgSlideStyle}
        background-image: url(${src});
      `}
      {...rest}
    ></div>
  );
}
