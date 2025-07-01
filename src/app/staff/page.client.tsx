"use client";

import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Flex, Center, Avatar } from "@chakra-ui/react";
import { AnchorLink } from "@/components/AnchorLink";
import { Card } from "@/components/Card";
import { staffs, keyVisualStaffs } from "@/foundation/staffs";

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

const StyledIconWrapper = styled.div<{ delay: number }>`
  animation: 0.5s ease calc(${({ delay }) => delay}s + ${animationStartDelay}s)
    1 running both ${TextFadeIn};
  transform-origin: center;
`;

const StyledAvatar = styled(Avatar.Root)`
  --avatar-size: var(--chakra-sizes-xl);
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
                !transitionEnded ? "menuHeaderTransition staff" : undefined
              }
            >
              スタッフ一覧
            </Card.Title>
          }
        >
          <Card.Section title="運営スタッフ">
            <Center flexWrap="wrap">
              {staffs.map((staff) => (
                <StyledIconWrapper delay={delayCount++ * 0.1} key={staff.name}>
                  {!staff.disabled ? (
                    <AnchorLink href={`https://twitter.com/${staff.name}`}>
                      <StyledAvatar m="3">
                        <Avatar.Fallback name={staff.nickname} />
                        <Avatar.Image
                          src={`/assets/img/staff/${staff.name}.${staff.ext}`}
                        />
                      </StyledAvatar>
                    </AnchorLink>
                  ) : (
                    <StyledAvatar m="3">
                      <Avatar.Fallback name={staff.nickname} />
                      <Avatar.Image
                        src={`/assets/img/staff/${staff.name}.${staff.ext}`}
                      />
                    </StyledAvatar>
                  )}
                </StyledIconWrapper>
              ))}
            </Center>
          </Card.Section>
          <Card.Section title="キービジュアル">
            <Center flexWrap="wrap">
              {keyVisualStaffs.map((staff) => (
                <StyledIconWrapper delay={delayCount++ * 0.1} key={staff.name}>
                  {!staff.disabled ? (
                    <AnchorLink href={`https://twitter.com/${staff.name}`}>
                      <StyledAvatar m="3">
                        <Avatar.Fallback name={staff.nickname} />
                        <Avatar.Image
                          src={`/assets/img/staff/${staff.name}.${staff.ext}`}
                        />
                      </StyledAvatar>
                    </AnchorLink>
                  ) : (
                    <StyledAvatar m="3">
                      <Avatar.Fallback name={staff.nickname} />
                      <Avatar.Image
                        src={`/assets/img/staff/${staff.name}.${staff.ext}`}
                      />
                    </StyledAvatar>
                  )}
                </StyledIconWrapper>
              ))}
            </Center>
          </Card.Section>
        </Card>
      </Flex>
    </>
  );
};

export default Page;
