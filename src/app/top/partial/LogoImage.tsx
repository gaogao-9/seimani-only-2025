"use client";

import Image from "next/image";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { isMobile } from "react-device-detect";
import { ImageWrapper } from "./ImageWrapper";

const animationStartDelay = 2.7;

const LogoInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

type LogoWrapperProps = {
  position: "right" | "top";
  offsetX: number;
  offsetY: number;
};

export const originalLogoImageSize = !isMobile
  ? ({
      w: 1500,
      h: 1064,
    } as const)
  : ({
      w: 750,
      h: 532,
    } as const);

const imageScale = 0.3;

export const logoImageSize = {
  w: originalLogoImageSize.w * imageScale,
  h: originalLogoImageSize.h * imageScale,
};

export const LogoImageWrapper = styled(ImageWrapper)`
  animation: 0.5s ease ${animationStartDelay}s 1 running both ${LogoInAnimation};
  transform-origin: center;
`;

export const LogoImage = Image;

export const createLogoWrapperTransformStyle = ({
  position,
  offsetX,
  offsetY,
}: LogoWrapperProps) =>
  `translate(${
    originalLogoImageSize.w * ((position === "top" ? 0.5 : 0.85) + offsetX) -
    logoImageSize.w / 2
  }px, ${
    originalLogoImageSize.h * ((position === "top" ? 0.18 : 0.29) + offsetY) -
    logoImageSize.h / 2
  }px)`;
