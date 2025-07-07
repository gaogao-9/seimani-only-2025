"use client";

import Image from "next/image";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { isMobile } from "react-device-detect";
import { ImageWrapper } from "./ImageWrapper";

const animationStartDelay = 1.5;

const RinInAnimation = keyframes`
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

export const originalRinImageSize = !isMobile
  ? ({
      w: 3200,
      h: 2266,
    } as const)
  : ({
      w: 1200,
      h: 850,
    } as const);

export const rinImageSize = originalRinImageSize;

export const RinImageWrapper = styled(ImageWrapper)`
  animation: 0.7s ease ${animationStartDelay}s 1 running both ${RinInAnimation};
  transform-origin: center;
`;

export const RinImage = Image;
