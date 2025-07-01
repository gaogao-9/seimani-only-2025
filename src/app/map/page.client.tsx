"use client";

import { Flex, Icon, List, Wrap, WrapItem } from "@chakra-ui/react";
import { FaTrain, FaCompass, FaClock } from "react-icons/fa";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Card } from "@/components/Card";
import { useEffect, useState } from "react";

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

const StyledListItem = styled(List.Item)<{ delay: number }>`
  animation: 0.5s ease calc(${({ delay }) => delay}s + ${animationStartDelay}s)
    1 running both ${TextFadeIn};
  transform-origin: center;
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 620px;
  border: 0;
  padding: 10px;
`;

const Map: React.FC = () => {
  return (
    <StyledIframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.143738208653!2d139.7181995152606!3d35.74727168017894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018929b169ebdf9%3A0x1de184c377047485!2z44OP44Kk44Op44Kk44OV44OX44Op44K244GE44Gf44Gw44GX!5e0!3m2!1sja!2sjp!4v1687789303455!5m2!1sja!2sjp"
      allowFullScreen
    />
  );
};

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
                !transitionEnded ? "menuHeaderTransition map" : undefined
              }
            >
              会場情報
            </Card.Title>
          }
        >
          <Wrap justify="center" align="center">
            <WrapItem
              width={{
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "calc(100% - 295px - 4px * 4)",
              }}
            >
              <Map />
            </WrapItem>
            <WrapItem width="295px">
              <List.Root marginY={4}>
                <StyledListItem delay={delayCount++ / 10}>
                  <Icon verticalAlign="middle" color="telegram.500">
                    <FaCompass />
                  </Icon>
                  <span style={{ verticalAlign: "middle" }}>
                    会場: ハイライフプラザいたばし
                  </span>
                </StyledListItem>
                <StyledListItem delay={delayCount++ / 10}>
                  <Icon verticalAlign="middle" color="telegram.500">
                    <FaClock />
                  </Icon>
                  <span style={{ verticalAlign: "middle" }}>
                    日程: 2025/09/14 (日)
                  </span>
                </StyledListItem>
                <List.Item>&nbsp;</List.Item>
                <StyledListItem delay={delayCount++ / 10}>
                  <Icon verticalAlign="middle" color="green.500">
                    <FaTrain />
                  </Icon>
                  <span style={{ verticalAlign: "middle" }}>
                    JR埼京線 板橋駅 徒歩1分
                  </span>
                </StyledListItem>
                <StyledListItem delay={delayCount++ / 10}>
                  <Icon verticalAlign="middle" color="cyan.500">
                    <FaTrain />
                  </Icon>
                  <span style={{ verticalAlign: "middle" }}>
                    都営三田線 新板橋駅 徒歩3分
                  </span>
                </StyledListItem>
                <StyledListItem delay={delayCount++ / 10}>
                  <Icon verticalAlign="middle" color="orange.500">
                    <FaTrain />
                  </Icon>
                  <span style={{ verticalAlign: "middle" }}>
                    東武東上線 下板橋駅 徒歩7分
                  </span>
                </StyledListItem>
              </List.Root>
            </WrapItem>
          </Wrap>
        </Card>
        {/*
        <Card title={<Card.Title>会場地図</Card.Title>}>
          <Card.Section title="">
            <AnchorLink href="/assets/img/map.png">
              <Image alt="会場地図" src="/assets/img/map.png" />
            </AnchorLink>
          </Card.Section>
        </Card>
        <Card title={<Card.Title>サークルリスト</Card.Title>}>
          <Card.Section title="">
            <AnchorLink href="/assets/img/circlelist.png">
              <Image alt="サークルリスト" src="/assets/img/circlelist.png" />
            </AnchorLink>
          </Card.Section>
        </Card>
        */}
      </Flex>
    </>
  );
};

export default Page;
