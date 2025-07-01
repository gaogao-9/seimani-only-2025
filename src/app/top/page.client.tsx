"use client";

import styled from "@emotion/styled";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { originalTopImageSize } from "./partial/TopImage";
import {
  EyeImage,
  eyeImageSize,
  EyeImageWrapper,
  originalEyeImageSize,
} from "./partial/EyeImage";
import { Whiteout } from "./partial/Whiteout";
import { useTopImageContext } from "@/utils/useTopImageContext";
import {
  BackImage,
  backImageSize,
  BackImageWrapper,
  originalBackImageSize,
} from "./partial/BackImage";
import {
  BackSnackImage,
  backSnackImageSize,
  BackSnackImageWrapper,
  originalBackSnackImageSize,
} from "./partial/BackSnackImage";
import {
  FrontSnackImage,
  frontSnackImageSize,
  FrontSnackImageWrapper,
  originalFrontSnackImageSize,
} from "./partial/FrontSnackImage";
import {
  originalRinImageSize,
  RinImage,
  rinImageSize,
  RinImageWrapper,
} from "./partial/RinImage";
import {
  originalPuriImageSize,
  PuriImage,
  puriImageSize,
  PuriImageWrapper,
} from "./partial/PuriImage";
import {
  FrontImage,
  frontImageSize,
  FrontImageWrapper,
  originalFrontImageSize,
} from "./partial/FrontImage";

const ActorArea = styled.div`
  display: grid;

  [data-grid-area] {
    grid-area: 1/1;
  }
`;

const Page: React.FC = () => {
  const topImageContext = useTopImageContext();

  return (
    <>
      <ActorArea>
        <ResponsiveImage
          rectWidth="100%"
          rectHeight={["calc(100vh - 60px)", "calc(100dvh - 60px)"]}
          landscapePositionX="center"
          landscapePositionY={0.42}
          portraitPositionX={0.32}
          portraitPositionY="center"
          imageWidth={originalTopImageSize.w}
          imageHeight={originalTopImageSize.h}
          minimumHeightThretholdRate={800 / 100}
          minimumWidthThretholdRate={40 / 100}
          data-grid-area="character"
        >
          {topImageContext.loaded && (
            <>
              <BackImageWrapper
                width={originalBackImageSize.w}
                height={originalBackImageSize.h}
              >
                <BackImage
                  src={topImageContext.images["back.jpg"]}
                  width={backImageSize.w}
                  height={backImageSize.h}
                  alt="背景画像"
                />
              </BackImageWrapper>
              <PuriImageWrapper
                width={originalPuriImageSize.w}
                height={originalPuriImageSize.h}
              >
                <PuriImage
                  src={topImageContext.images["puri.png"]}
                  width={puriImageSize.w}
                  height={puriImageSize.h}
                  alt="プリミュラ"
                />
              </PuriImageWrapper>
              <BackSnackImageWrapper
                width={originalBackSnackImageSize.w}
                height={originalBackSnackImageSize.h}
              >
                <BackSnackImage
                  src={topImageContext.images["back_snack.png"]}
                  width={backSnackImageSize.w}
                  height={backSnackImageSize.h}
                  alt="背面お菓子画像"
                />
              </BackSnackImageWrapper>
              <RinImageWrapper
                width={originalRinImageSize.w}
                height={originalRinImageSize.h}
              >
                <RinImage
                  src={topImageContext.images["rin.png"]}
                  width={rinImageSize.w}
                  height={rinImageSize.h}
                  alt="リン"
                />
              </RinImageWrapper>
              <FrontSnackImageWrapper
                width={originalFrontSnackImageSize.w}
                height={originalFrontSnackImageSize.h}
              >
                <FrontSnackImage
                  src={topImageContext.images["front_snack.png"]}
                  width={frontSnackImageSize.w}
                  height={frontSnackImageSize.h}
                  alt="前面お菓子画像"
                />
              </FrontSnackImageWrapper>
              <EyeImageWrapper
                width={originalEyeImageSize.w}
                height={originalEyeImageSize.h}
              >
                <EyeImage
                  src={topImageContext.images["eye.png"]}
                  width={eyeImageSize.w}
                  height={eyeImageSize.h}
                  alt="目差分"
                />
              </EyeImageWrapper>
              <FrontImageWrapper
                width={originalFrontImageSize.w}
                height={originalFrontImageSize.h}
              >
                <FrontImage
                  src={topImageContext.images["front.png"]}
                  width={frontImageSize.w}
                  height={frontImageSize.h}
                  alt="最前面オブジェクト"
                />
              </FrontImageWrapper>
            </>
          )}
        </ResponsiveImage>
        <Whiteout className={topImageContext.loaded ? "loaded" : ""} />
      </ActorArea>
    </>
  );
};

export default Page;
