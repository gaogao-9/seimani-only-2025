"use client";

import Image from "next/image";
import styled from "@emotion/styled";
import { isMobile } from "react-device-detect";
import { ImageWrapper } from "./ImageWrapper";

export const originalTopImageSize = !isMobile
  ? ({
      w: 3200,
      h: 2266,
    } as const)
  : ({
      w: 1200,
      h: 850,
    } as const);

export const topImageSize = originalTopImageSize;

export const TopImageWrapper = styled(ImageWrapper)``;

export const TopImage = Image;
