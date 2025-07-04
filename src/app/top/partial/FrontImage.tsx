"use client";

import Image from "next/image";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { ImageWrapper } from "./ImageWrapper";

const animationStartDelay = 1;

const FrontInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const originalFrontImageSize = {
  w: 3200,
  h: 2266,
} as const;

export const frontImageSize = originalFrontImageSize;

export const FrontImageWrapper = styled(ImageWrapper)`
  animation: 0.5s ease ${animationStartDelay + 0}s 1 running both
    ${FrontInAnimation};
  transform-origin: center;
`;

export const FrontImage = Image;
