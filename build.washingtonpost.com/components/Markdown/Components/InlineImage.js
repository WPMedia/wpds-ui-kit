import React from "react";
import { styled, css } from "@washingtonpost/wpds-ui-kit";
import Image from "next/legacy/image";

export default function InlineImage({
  maxWidth,
  alt,
  width,
  height,
  src,
  cushion,
  ...rest
}) {
  const ImageContainer = styled("div", {
    maxWidth: `${maxWidth}px`,
    padding: "$100",
    variants: {
      cushion: {
        none: {
          padding: 0,
        },
      },
    },
  });

  const inlineImageCSS = css({
    aspectRatio: `${width}/${height}`,
  });
  return (
    <ImageContainer cushion={cushion}>
      <Image
        className={inlineImageCSS()}
        {...rest}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </ImageContainer>
  );
}
