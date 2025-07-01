"use client";

import Image from "next/image";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { ImageWrapper } from "./ImageWrapper";

const animationStartDelay = 2.7;

const EyeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const originalEyeImageSize = {
  w: 3200,
  h: 2266,
} as const;

export const eyeImageSize = originalEyeImageSize;

export const EyeImageWrapper = styled(ImageWrapper)`
  animation: 0.5s ease ${animationStartDelay + 0}s 1 running both
    ${EyeInAnimation};
  transform-origin: center;
`;

export const EyeImage = Image;
