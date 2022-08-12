import styled from "@emotion/styled";
import Head from "next/head";
import Image from "next/image";
import React from "react";

import HoverBackground from "../components/HoverBackground";
import Wrapper from "../components/Wrapper";
import { siteTitle } from "../data/site";

const Sections = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 8rem 0;
`;

const SectionImage = styled.div`
  position: relative;
  width: 180px;
  height: 180px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionLink = styled.div`
  &:hover > div > svg {
    opacity: 1;
  }
`;

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Sections>
        <SectionLink>
          <SectionImage>
            <HoverBackground />
            <Image src="/images/index/laptop.svg" width={227} height={194} />
          </SectionImage>
        </SectionLink>
        <SectionLink>
          <SectionImage>
            <HoverBackground />
            <Image src="/images/index/book.svg" width={159} height={204} />
          </SectionImage>
        </SectionLink>
        <SectionLink>
          <SectionImage>
            <HoverBackground />
            <Image src="/images/index/contact.svg" width={174} height={216} />
          </SectionImage>
        </SectionLink>
      </Sections>
    </Wrapper>
  );
}
