import Head from "next/head";
import React from "react";

import HorizontalLine from "../components/HorizontalLine";
import SectionLinks from "../components/SectionLinks";
import Wrapper from "../components/Wrapper";
import { siteTitle } from "../data/site";

const Home = () => {
  return (
    <Wrapper>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <SectionLinks />
      <HorizontalLine />
      <div>Lorem Ipsum</div>
      <div>Lorem Ipsum</div>
      <div>Lorem Ipsum</div>
      <div>Lorem Ipsum</div>
      <div>Lorem Ipsum</div>
      <div>Lorem Ipsum</div>
      <div>Lorem Ipsum</div>
      <div>Lorem Ipsum</div>
      <div>Lorem Ipsum</div>
      <div>Lorem Ipsum</div>
      <div>Lorem Ipsum</div>
      <div>Lorem Ipsum</div>
    </Wrapper>
  );
};

export default Home;
