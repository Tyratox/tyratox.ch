import styled from "@emotion/styled";
import Head from "next/head";
import React from "react";

import BlueprintBook from "../components/blueprints/BlueprintBook";
import BlueprintContact from "../components/blueprints/BlueprintContact";
import BlueprintLaptop from "../components/blueprints/BlueprintLaptop";
import Box from "../components/Box";
import Flex from "../components/Flex";
import HoverBackground from "../components/HoverBackground";
import Wrapper from "../components/Wrapper";
import { siteTitle } from "../data/site";

const Sections = styled(Flex)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 4rem 0;
`;

const SectionImage = styled.div`
  position: relative;
  margin: 0 3rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionLink = styled(Box)`
  &:hover > div > svg {
    display: block;
  }
`;

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Sections flexWrap="wrap">
        <SectionLink widths={[1, 1 / 2, 1 / 3, 1 / 3, 1 / 3]}>
          <SectionImage>
            <HoverBackground />
            <BlueprintLaptop />
          </SectionImage>
        </SectionLink>
        <SectionLink widths={[1, 1 / 2, 1 / 3, 1 / 3, 1 / 3]}>
          <SectionImage>
            <HoverBackground />
            <BlueprintBook />
          </SectionImage>
        </SectionLink>
        <SectionLink widths={[1, 1 / 2, 1 / 3, 1 / 3, 1 / 3]}>
          <SectionImage>
            <HoverBackground />
            <BlueprintContact />
          </SectionImage>
        </SectionLink>
      </Sections>
    </Wrapper>
  );
}
