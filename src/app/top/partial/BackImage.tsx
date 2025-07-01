"use client";

import Image from "next/image";
import styled from "@emotion/styled";
import { ImageWrapper } from "./ImageWrapper";

export const originalBackImageSize = {
  w: 3200,
  h: 2266,
} as const;

export const backImageSize = originalBackImageSize;

export const BackImageWrapper = styled(ImageWrapper)``;

export const BackImage = Image;
