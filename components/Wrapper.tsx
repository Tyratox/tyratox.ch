import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Head from "next/head";
import React from "react";

import BlueprintLogo from "./blueprints/BlueprintLogo";
import BlueprintText from "./blueprints/BlueprintText";
import Box from "./Box";
import Container from "./Container";
import Flex from "./Flex";
import HideMediaQuery from "./HideMediaQuery";
import HorizontalLine from "./HorizontalLine";
import Sticky from "./Sticky";
import VerticalLine from "./VerticalLine";

const StickyHeader = styled(Sticky)`
  position: sticky;
  top: -1px;

  z-index: 99999;
`;

const swapVariables = css`
  & > * {
    --foreground-color: var(--background-color);
    & > * {
      --background-color: #fff;
    }
  }

  /*border-bottom: var(--background-color) 1px solid;*/
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;

const HeaderContainer = styled.div<{ negative?: boolean }>`
  ${({ negative }) => (negative ? swapVariables : "")}

  background-color: var(
    ${({ negative }) =>
    negative ? "--foreground-color" : "--background-color"}
  );
  color: var(
    ${({ negative }) =>
      negative ? "--background-color" : "--foreground-color"}
  );

  transition: all 0.3s ease-in-out;
`;

const Header = styled.header`
  position: relative;

  width: 100%;
  padding: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  transition: all 0.3s ease-in-out;
`;

const Body = styled.div`
  overflow: hidden;
`;

const AnimatedBox = styled(Box)<{ align: string }>`
  transition: all 0.3s ease-in-out;

  ${({ align }) =>
    align === "left" ? "left: 0;" : "left:50%;transform: translateX(-50%);"}
`;

interface IProps {
  stuck?: boolean;
}

const Name = ({ stuck }: IProps) => (
  <Flex>
    <Box widths={[1 / 3, 1 / 3, 1 / 3, 1 / 3, 1 / 3]}>
      <VerticalLine height={stuck ? 7.5 : 10} />
    </Box>
    <Box widths={[2 / 3, 2 / 3, 2 / 3, 2 / 3, 2 / 3]}>
      <BlueprintText text="nico hauser" viewBox="0 0 200 40" />
      <BlueprintText text="@tyratox" viewBox="0 0 200 40" />
    </Box>
  </Flex>
);

export default function Wrapper({ children }) {
  return (
    <div>
      <Head>
        {/*<link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
  <meta name="twitter:card" content="summary_large_image" />*/}
      </Head>
      <StickyHeader
        render={(stuck) => {
          const widthsLogo = stuck
            ? [1 / 4, 1 / 4, 1 / 2, 2 / 5, 1 / 3]
            : [1, 1, 3 / 4, 3 / 5, 1 / 2];

          const widthsMenu = stuck
            ? [3 / 4, 3 / 4, 1 / 2, 3 / 5, 2 / 3]
            : [0, 0, 0, 0, 0];

          return (
            <HeaderContainer negative={stuck}>
              <Container>
                <Header>
                  <AnimatedBox
                    widths={widthsLogo}
                    align={stuck ? "left" : "center"}
                  >
                    <Flex>
                      <Box
                        widths={
                          stuck
                            ? [1, 1, 1 / 3, 1 / 3, 1 / 3]
                            : [1 / 3, 2 / 5, 2 / 5, 2 / 5, 2 / 5]
                        }
                      >
                        <BlueprintLogo />
                      </Box>
                      <Box
                        widths={
                          stuck
                            ? [0, 0, 2 / 3, 2 / 3, 2 / 3]
                            : [2 / 3, 3 / 5, 3 / 5, 3 / 5, 3 / 5]
                        }
                      >
                        {stuck ? (
                          <HideMediaQuery md up>
                            <Name stuck={stuck} />
                          </HideMediaQuery>
                        ) : (
                          <Name stuck={stuck} />
                        )}
                      </Box>
                    </Flex>
                  </AnimatedBox>
                  {stuck && <Box widths={widthsMenu}>menu</Box>}
                </Header>
              </Container>
            </HeaderContainer>
          );
        }}
      ></StickyHeader>
      <Body>
        <Container>
          <HorizontalLine />
          <main>{children}</main>
          <HorizontalLine />
        </Container>
      </Body>
    </div>
  );
}
