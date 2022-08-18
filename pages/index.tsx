import styled from "@emotion/styled";
import Head from "next/head";
import React, { useEffect, useState } from "react";

import BlueprintBegriffen from "../components/blueprints/BlueprintBegriffen";
import BlueprintHFAG from "../components/blueprints/BlueprintHFAG";
import BlueprintNKSA from "../components/blueprints/BlueprintNKSA";
import Box from "../components/Box";
import Container from "../components/Container";
import Education from "../components/Education";
import Flex from "../components/Flex";
import HideMediaQuery from "../components/HideMediaQuery";
import HorizontalLine from "../components/HorizontalLine";
import Profile from "../components/Profile";
import Project from "../components/projects/Project";
import ProjectBox from "../components/projects/ProjectBox";
import SectionLinks from "../components/SectionLinks";
import WireSeperator from "../components/wires/WireSeperator";
import WireSeperatorMirrored from "../components/wires/WireSeperatorMirrored";
import Wrapper from "../components/Wrapper";
import { siteTitle } from "../data/site";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const Grow = () => {
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const header = document.querySelector(".sticky-header");
    const contentAboveFold = document.querySelector("#above-fold");

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
      <Container>
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
        <WireSeperatorMirrored />
        <div id="projects" />
        <Project mirrored>
          <ProjectContainer>
            <Box widths={[1 / 4, 1 / 5, 1 / 5, 1 / 8, 1 / 8]} paddingRight={2}>
              <BlueprintNKSA />
            </Box>
            <Box widths={[1, 1, 4 / 5, 7 / 8, 7 / 8]}>
              <p>
                In 2014, one year after starting at NKSA, I swapped out the CMS
                of the schools website together with Dario Breitenstein, David
                Schmid. To do so, we rebuilt the entire frontend (the design
                should stay the same). This signifanctly simplified the content
                managment, brought compatibility with the whole WordPress plugin
                ecosystem and came with custom features.
              </p>
              <p>
                A few years ago, they finally decided to redesign the website as
                well so our version is no longer online.
              </p>
            </Box>
          </ProjectContainer>
        </Project>
        <WireSeperator />
        <Project>
          <ProjectContainer>
            <Box widths={[2 / 3, 2 / 3, 0, 0, 0]}>
              <HideMediaQuery md down>
                <BlueprintBegriffen />
              </HideMediaQuery>
            </Box>
            <Box widths={[1, 1, 7 / 8, 29 / 32, 15 / 16]}>
              <p>
                In the same year (2014) my german teacher Beat Knaus told me
                about his sideproject "begriffen", an e-learning platform he was
                working on with a previous student, Michael Ziörjen. This marked
                the start of several years working on "begriffen" and its
                successor "wit".
              </p>
              <p>
                (Since the end of 2019 I have not contributed code to either.)
              </p>
              <p>
                In the next few years I collaborated several times with Michael
                Ziörjen to create websites for customers.
              </p>
            </Box>
            <Box widths={[0, 0, 1 / 8, 3 / 32, 1 / 16]}>
              <HideMediaQuery md up>
                <BlueprintBegriffen vertical />
              </HideMediaQuery>
            </Box>
          </ProjectContainer>
          <Flex marginX flexWrap="wrap">
            <ProjectBox
              title="begriffen"
              subtitle="webapp"
              href="https://begriffen.ch/"
            />
            <ProjectBox title="wit" subtitle="webapp" href="https://wit.app/" />
            <ProjectBox
              title="kindernetzwerk buchs"
              subtitle="website"
              href="https://kindernetzwerk-buchs.ch/"
            />
            <ProjectBox
              title="zahnarztpraxis suhr"
              subtitle="website"
              href="https://zahnarztpraxis-suhr.ch/"
            />
            <ProjectBox
              title="futsal masters"
              subtitle="website"
              href="https://futsal-masters.ch/"
            />
          </Flex>
        </Project>
        <WireSeperatorMirrored />
        <Project mirrored>
          <Box widths={[1 / 2, 1 / 3, 1 / 3, 1 / 4, 1 / 4]} paddingBottom={2}>
            <BlueprintHFAG />
          </Box>
          <p>
            In 2015 I redesigned the website of my father's company, the Hauser
            Feuerschutz AG. After another, in 2016 we also decided to create a
            custom website for the online shop. Up to this point, a shop system
            provided by a supplier was used. Custom interfaces were added for
            easier integration into the existing infrastructure. Initially the
            shop was run on WordPress with the WooCommerce and WPML plugins. In
            several steps, the shop was then transitioned to a Next.js / vendure
            system. By leveraging Next.js's static site generation as well as
            Elasticsearch, it was possible to make the website blazingly fast.
          </p>
        </Project>
        <WireSeperator />
        <Project>
          <h2>Bachelor's Thesis</h2>
          <p>
            In 2021 I finished my Bachelor's degree at ETHZ with my Bachelor's
            thesis called "Safe evaluation of MFOTL dual temporal operators". In
            short I extended VeriMon, a formally verified runtime monitor with
            two additional operators.
          </p>
          <a href="/documents/ba-thesis.pdf" target="_blank">
            Read thesis
          </a>
        </Project>
        <WireSeperatorMirrored />
        <Project mirrored>
          <h2>Semester Project</h2>
          <p>
            During spring of 2022 I worked on the "Proof of Personhood" semester
            project at the DEDIS lab at EPFL. It was a project started in an
            ealier semester by previous students and the goal is to demonstrate
            use cases of a proof of personhood. I was part of the e-voting team
            whose primary goal was to add support for secret ballot elections.
            In addition I started overhauling the user interface to make the
            application easier to use.
          </p>
        </Project>
        <WireSeperator />
        <Project>
          <h2>Other Projects</h2>
          <Flex flexWrap="wrap" marginX>
            <ProjectBox
              title="ec emmen"
              subtitle="website"
              href="https://ec-emmenbruecke.ch"
            />
            <ProjectBox
              title="taiji aarau"
              subtitle="website"
              href="https://taiji-aarau.ch/"
            />
            <ProjectBox
              title="keck coaching"
              subtitle="website"
              href="https://keckcoaching.ch/"
            />
            <ProjectBox
              title="inmusic"
              subtitle="website"
              href="https://inmusic.ch/"
            />
            <ProjectBox
              title="ciao"
              subtitle="mobile app"
              href="https://github.com/Tyratox/corona-contact-scan"
            />
            <ProjectBox
              title="words"
              subtitle="mobile app"
              href="https://github.com/Tyratox/words"
            />
            <ProjectBox
              title="bombug"
              subtitle="mobile game"
              href="https://github.com/Tyratox/bombug"
            />
            <ProjectBox
              title="sn4ke"
              subtitle="mobile game"
              href="https://github.com/Tyratox/sn4ke"
            />
            <ProjectBox
              title="and more ..."
              subtitle="my github repos"
              href="https://github.com/Tyratox?tab=repositories"
            />
            <ProjectBox
              title="and even more ..."
              subtitle="hexcode github repos"
              href="https://github.com/orgs/hexcodech/repositories?type=all"
            />
          </Flex>
        </Project>
        <HorizontalLine />
      </Container>
    </Wrapper>
  );
};

export default Home;
