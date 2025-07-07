"use client";

import Image from "next/image";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { isMobile } from "react-device-detect";
import { ImageWrapper } from "./ImageWrapper";

const animationStartDelay = 0.7;

const BackSnackInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

export const originalBackSnackImageSize = !isMobile
  ? ({
      w: 3200,
      h: 2266,
    } as const)
  : ({
      w: 1200,
      h: 850,
    } as const);

export const backSnackImageSize = originalBackSnackImageSize;

export const BackSnackImageWrapper = styled(ImageWrapper)`
  animation: 0.3s ease ${animationStartDelay}s 1 running both
    ${BackSnackInAnimation};
  transform-origin: center;
`;

export const BackSnackImage = Image;
