import styled from "@emotion/styled";
import Head from "next/head";
import React, { useEffect, useState } from "react";

import Education from "../components/Education";
import HorizontalLine from "../components/HorizontalLine";
import Profile from "../components/Profile";
import SectionLinks from "../components/SectionLinks";
import Wrapper from "../components/Wrapper";
import { siteTitle } from "../data/site";

const Grow = () => {
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const header = document.querySelector(".sticky-header");
    const contentAboveFold = document.querySelector("#above-fold");

    console.log(header);
    console.log(contentAboveFold);

    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );

    setHeight(
      (vh -
        header.clientHeight -
        contentAboveFold.clientHeight -
        80) /* margin below horizontal line*/ /
        2
    );
  }, []);

  return <div style={{ height }} />;
};

const Home = () => {
  return (
    <Wrapper>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div id="above-fold">
        <HorizontalLine />
        <Grow />
        <SectionLinks />
        <Grow />
        <HorizontalLine />
      </div>
      <Profile />
      <HorizontalLine />
      <Education />
      <HorizontalLine />
    </Wrapper>
  );
};

export default Home;
