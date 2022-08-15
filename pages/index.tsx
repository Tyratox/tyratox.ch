import styled from "@emotion/styled";
import Head from "next/head";
import React from "react";

import BlueprintBook from "../components/blueprints/BlueprintBook";
import BlueprintContact from "../components/blueprints/BlueprintContact";
import BlueprintLaptop from "../components/blueprints/BlueprintLaptop";
import Box from "../components/Box";
import Flex from "../components/Flex";
import HoverBackground from "../components/HoverBackground";
import Textbox from "../components/Textbox";
import Wrapper from "../components/Wrapper";
import { siteTitle } from "../data/site";

const Sections = styled(Flex)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SectionImage = styled.div`
  position: relative;
  margin: 0 3rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionLink = styled(Box)`
  padding: 4rem 0;

  & > div:first-of-type {
    position: absolute;
    top: 2rem;
    left: 50%;

    transform: translateX(-50%);

    opacity: 0;
    transition: opacity 1s ease-in-out, top 1s ease-in-out;
  }

  &:hover {
    /*& > div:first-of-type {
      top: 0rem;
      opacity: 1;
    }*/

    & > div > svg {
      display: block;
    }
  }
`;

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Sections flexWrap="wrap">
        <SectionLink widths={[1, 1 / 2, 1 / 2, 1 / 3, 1 / 3]}>
          <Textbox>On what projects do I</Textbox>
          <SectionImage>
            <HoverBackground />
            <BlueprintLaptop />
          </SectionImage>
        </SectionLink>
        <SectionLink widths={[1, 1 / 2, 1 / 2, 1 / 3, 1 / 3]}>
          <Textbox>What did I</Textbox>
          <SectionImage>
            <HoverBackground />
            <BlueprintBook />
          </SectionImage>
        </SectionLink>
        <SectionLink widths={[1, 1 / 2, 1 / 2, 1 / 3, 1 / 3]}>
          <Textbox>How to get in</Textbox>
          <SectionImage>
            <HoverBackground />
            <BlueprintContact />
          </SectionImage>
        </SectionLink>
      </Sections>
    </Wrapper>
  );
}
