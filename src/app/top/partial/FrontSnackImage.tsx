"use client";

import Image from "next/image";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { ImageWrapper } from "./ImageWrapper";

const animationStartDelay = 0.6;

const FrontSnackInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

export const originalFrontSnackImageSize = {
  w: 3200,
  h: 2266,
} as const;

export const frontSnackImageSize = originalFrontSnackImageSize;

export const FrontSnackImageWrapper = styled(ImageWrapper)`
  animation: 0.3s ease ${animationStartDelay}s 1 running both
    ${FrontSnackInAnimation};
  transform-origin: center;
`;

export const FrontSnackImage = Image;
