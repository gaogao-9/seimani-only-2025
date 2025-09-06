"use client";

import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { AspectRatio, Flex, Image } from "@chakra-ui/react";
import { Card } from "@/components/Card";
import { AnchorLink } from "@/components/AnchorLink";

const TextFadeIn = keyframes`
  0% {
    transform: translateY(20%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`;

const animationStartDelay = 0.6;

const StyledCardSection = styled(Card.Section)<{ delay: number }>`
  animation: 0.5s ease calc(${({ delay }) => delay}s + ${animationStartDelay}s)
    1 running both ${TextFadeIn};
  transform-origin: center;
`;

const Page: React.FC = () => {
  const [transitionEnded, setTransitionEnded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      window.sessionStorage.setItem("navigationStatus", "navigationEnd");
    }, 100);
    setTimeout(() => {
      setTransitionEnded(true);
    }, 200);
  }, []);

  let delayCount = 0;

  return (
    <>
      <Flex
        maxW="1200px"
        marginX="auto"
        flexDirection="column"
        align="center"
        justify="center"
      >
        <Card
          title={
            <Card.Title
              className={
                !transitionEnded ? "menuHeaderTransition event" : undefined
              }
            >
              イベント情報
            </Card.Title>
          }
        >
          <StyledCardSection delay={delayCount++ / 10} title="色紙大募集">
            今回も全国の皆さんから色紙を募集します！
            <br />
            会場を政霊たちのイラストで華やかに飾りましょう！
            <br />
            当日どうしても参加できない総理もぜひご参加ください。
            <br />
            <br />
            <AspectRatio maxW="80%" my={6} mx="auto" ratio={2480 / 3508}>
              <AnchorLink href="/assets/img/event/shikishi_info.jpg">
                <Image
                  alt="色紙募集要項"
                  src="/assets/img/event/shikishi_info.jpg"
                />
              </AnchorLink>
            </AspectRatio>
            <AspectRatio maxW="80%" my={6} mx="auto" ratio={1092 / 616}>
              <AnchorLink href="/assets/img/event/shikishi_invoice.jpg">
                <Image
                  src="/assets/img/event/shikishi_invoice.jpg"
                  alt="色紙発送用伝票"
                />
              </AnchorLink>
            </AspectRatio>
          </StyledCardSection>
          <StyledCardSection delay={delayCount++ / 10} title="ホワイトボード">
            こちらも毎回恒例のホワイトボード！
            <br />
            来場の記念に総理の皆さんからヒトコト～クダサイ～オネガイ～
          </StyledCardSection>
        </Card>
        <Card title={<Card.Title>アフターイベント</Card.Title>}>
          <StyledCardSection delay={delayCount++ / 10} title="政マニ川柳大賞">
            政マニと言えば、ネーミングを始めとした数々の言葉遊び。
            <br />
            そこで今回は、政マニならではの言葉遊びを絡めた川柳を大募集！
            <br />
            川柳は会場に掲示、参加者投票を実施して、最多得票のものを政マニ川柳大賞に！
            <br />
            大賞の川柳を詠んだ総理には景品をプレゼントします。集え、くすりと笑える政マニ川柳！
          </StyledCardSection>
          <StyledCardSection delay={delayCount++ / 10} title="政霊ビンゴ">
            同人イベントのアフターと言えば定番はビンゴ？&nbsp;ソクバイ海のビンゴはただのビンゴじゃない！
            <br />
            数字の代わりに政霊の名前でビンゴ大会を行います。
            <br />
            配布される空欄のビンゴカードに政霊の名前を思い出したり調べたりして書き込み、自分だけのビンゴカードで最速ビンゴを目指しましょう！
          </StyledCardSection>
        </Card>
      </Flex>
    </>
  );
};

export default Page;
