"use client";

import Image from "next/image";
import styled from "@emotion/styled";
import { ImageWrapper } from "./ImageWrapper";

export const originalTopImageSize = {
  w: 3200,
  h: 2266,
} as const;

export const topImageSize = originalTopImageSize;

export const TopImageWrapper = styled(ImageWrapper)``;

export const TopImage = Image;
