import React from "react";
import Container from "./container";
import InlineSVG from "./inlineSVG";

// <Anatomy src="/img/components/switch/anatomy.svg"></Anatomy>
const Anatomy = ({ src, caption }) => {
  return (
    <Container
      css={{
        height: 260,
      }}
      caption={caption}
    >
      <InlineSVG path={src} />
    </Container>
  );
};

export default Anatomy;
