"use client";

import Image from "next/image";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { isMobile } from "react-device-detect";
import { ImageWrapper } from "./ImageWrapper";

const animationStartDelay = 1.9;

const PuriInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20%);
  }
  1% {
    opacity: 1;
    transform: translateY(-10%);
  }
  10% {
    opacity: 1;
    transform: translateY(-11%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

export const originalPuriImageSize = !isMobile
  ? ({
      w: 3200,
      h: 2266,
    } as const)
  : ({
      w: 1200,
      h: 850,
    } as const);

export const puriImageSize = originalPuriImageSize;

export const PuriImageWrapper = styled(ImageWrapper)`
  animation: 0.7s ease ${animationStartDelay}s 1 running both ${PuriInAnimation};
  transform-origin: center;
`;

export const PuriImage = Image;
