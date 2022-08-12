import styled from "@emotion/styled";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { myName, siteTitle } from "../data/site";
import { Color } from "../styles/colors";
import Container from "./Container";
import HorizontalLine from "./HorizontalLine";
import VerticalLine from "./VerticalLine";

const Header = styled.header`
  margin-top: 5rem;
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const FlexGrow = styled.div<{ align: "left" | "right" }>`
  flex-grow: 1;

  display: flex;
  flex-direction: row;
  justify-content: ${({ align }) =>
    align === "left" ? "flex-start" : "flex-end"};

  position: relative;
`;

const Name = styled.div`
  h1 {
    margin: 0;
    font-weight: normal;
    line-height: 1.4;
  }
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
          <FlexGrow align="right">
            {/* 1rem = 18px, 18px * 12 = 216px = 12 rem*/}
            <Image src="/images/logo-white.svg" width="180" height="180" />
          </FlexGrow>
          <VerticalLine height={10} />
          <FlexGrow align="left">
            <Name>
              <h1>nico hauser</h1>
              <h1>@tyratox</h1>
            </Name>
          </FlexGrow>
        </Header>
        <HorizontalLine />
      </Container>
      <Container>
        <main>{children}</main>
      </Container>
    </div>
  );
}
