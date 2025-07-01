"use client";

import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const animationStartDelay = 0.3;

const WhiteoutAnimation = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const Whiteout = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: white;

  animation: 0.5s ease ${animationStartDelay}s 1 paused both
    ${WhiteoutAnimation};
  transform-origin: center;

  &.loaded {
    animation-play-state: running;
  }
`;
