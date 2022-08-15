import styled from "@emotion/styled";
import Head from "next/head";
import React from "react";

import BlueprintLogo from "./blueprints/BlueprintLogo";
import BlueprintText from "./blueprints/BlueprintText";
import Box from "./Box";
import Container from "./Container";
import Flex from "./Flex";
import HorizontalLine from "./HorizontalLine";
import VerticalLine from "./VerticalLine";

const Header = styled.header`
  width: 100%;
  margin-top: 2rem;
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const HeaderContainer = styled(Flex)`
  align-self: center;
`;

const Body = styled.div`
  overflow: hidden;
`;

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
      <Container>
        <Header>
          <Box widths={[1, 1, 3 / 4, 3 / 5, 1 / 2]}>
            <HeaderContainer>
              <Box widths={[2 / 5, 2 / 5, 2 / 5, 2 / 5, 2 / 5]}>
                <BlueprintLogo />
              </Box>
              <Box widths={[1 / 5, 1 / 5, 1 / 5, 1 / 5, 1 / 5]}>
                <VerticalLine height={10} />
              </Box>
              <Box widths={[2 / 5, 2 / 5, 2 / 5, 2 / 5, 2 / 5]}>
                <BlueprintText text="nico hauser" viewBox="0 0 200 40" />
                <BlueprintText text="@tyratox" viewBox="0 0 200 40" />
              </Box>
            </HeaderContainer>
          </Box>
        </Header>
      </Container>
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
