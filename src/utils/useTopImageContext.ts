import { isMobile } from "react-device-detect";
import { createImageContext } from "@/utils/useImageContext";

const imageNames = [
  "back.jpg",
  "rin.png",
  "puri.png",
  "front.png",
  "front_snack.png",
  "back_snack.png",
  "eye.png",
] as const;

const { ImageContext, useImageContext, useImageContextValue } =
  createImageContext(
    imageNames,
    (imageName) => `/assets/img/top/${isMobile ? "m_" : ""}${imageName}`,
  );

export {
  ImageContext as TopImageContext,
  useImageContext as useTopImageContext,
  useImageContextValue as useTopImageContextValue,
};
