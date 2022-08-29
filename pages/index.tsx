import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { FaGithub, FaKeybase, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Parallax } from "react-scroll-parallax";

import BlueprintBegriffen from "../components/blueprints/BlueprintBegriffen";
import BlueprintHexcode from "../components/blueprints/BlueprintHexcode";
import BlueprintHFAG from "../components/blueprints/BlueprintHFAG";
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
import SocialLink from "../components/SocialLink";
import SocialLinks from "../components/SocialLinks";
import WireSeperator from "../components/wires/WireSeperator";
import WireSeperatorMirrored from "../components/wires/WireSeperatorMirrored";
import Wrapper from "../components/Wrapper";

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
              <Parallax speed={10}>
                <BlueprintHexcode />
              </Parallax>
            </Box>
            <Box widths={[1, 1, 4 / 5, 7 / 8, 7 / 8]}>
              <p>
                In 2013 I started the gymnasium at{" "}
                <a href="https://nksa.ch" target="_blank" rel="noreferrer">
                  NKSA
                </a>{" "}
                with the "akzentfach"{" "}
                <a
                  href="https://www.nksa.ch/gymnasium/bildungsweg/#infcom-ch"
                  target="_blank"
                  rel="noreferrer"
                >
                  infcom
                </a>{" "}
                which consisted of IT / communication modules. More specifically
                programming, design and movie making.
              </p>
              <p>
                I quickly met{" "}
                <a
                  href="https://www.imakethings.ch/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Dario Breitenstein
                </a>{" "}
                and David Schmid and we started to create small java
                applications whose purpose was to, for example, synchronously
                play songs from multiple devices, to offer similar functionality
                to Apple's Airdrop, to enable chatting within the local network
                or to send encrypted emails (We definitely did not know how to
                properly use crypto libraries at that time..) in our spare time.
              </p>
              <p>
                Rather quickly we also started to design websites. Under the
                name{" "}
                <a href="https://hexcode.ch/" target="_blank" rel="noreferrer">
                  hexcode
                </a>{" "}
                we realized multiple projects for family, teachers and could
                even take care of the school's website and the internal digital
                signage system. In addition we created web applications with
                purposes such as sharing music files between friends or
                collecting school grades and showing related statistics. At some
                point we got to know{" "}
                <a href="https://echolot.io/" target="_blank" rel="noreferrer">
                  Marc Berchtold
                </a>
                , also a classmate, a bit better and when Dario got into the
                adventure room business, we four worked on several adventure
                room related it projects.
              </p>
              <p>
                This all was during our middle school time (2013-2017). We still
                work on side projects together from time to time and sometimes
                we participate in hackathons. (I was part of the team the first
                time in 2019 when we won the swisscom challenge and a second
                time in 2020 when we were among the finalists.)
              </p>
              <Flex marginX flexWrap="wrap">
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
                  title="usgang"
                  subtitle="devpost"
                  href="https://devpost.com/software/swissup"
                />
                <ProjectBox
                  title="foo(d)bar"
                  subtitle="devpost"
                  href="https://devpost.com/software/foo-d-bar"
                />
                <ProjectBox
                  title="jboxxle"
                  subtitle="sokoban game"
                  href="https://github.com/Tyratox/JBoxxle"
                />
                <ProjectBox
                  title="and more ..."
                  subtitle="hexcode github repos"
                  href="https://github.com/orgs/hexcodech/repositories?type=all"
                />
              </Flex>
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
                In 2014, a year after I started middle school, my german teacher
                Beat Knaus told me about his side project "begriffen", an
                e-learning platform he was working on with a previous student,{" "}
                <a
                  href="https://mzioerjen.ch/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Michael Ziörjen
                </a>
                . This marked the start of several years working on "begriffen"
                and its successor "wit". (Since the end of 2019 I have not
                contributed code to either.)
              </p>
              <p>
                In the next few years I collaborated several times with Michael
                Ziörjen to create websites for customers.
              </p>
            </Box>
            <Box widths={[0, 0, 1 / 8, 3 / 32, 1 / 16]}>
              <HideMediaQuery md up>
                <Parallax speed={5}>
                  <BlueprintBegriffen vertical />
                </Parallax>
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
            <Parallax speed={-5}>
              <BlueprintHFAG />
            </Parallax>
          </Box>
          <p>
            In 2015 I redesigned the website of my father's company, the Hauser
            Feuerschutz AG. After another year, in 2016, we decided to create a
            custom website for the online shop. Up to this point, a shop system
            provided by a supplier was used. Custom interfaces were added for
            easier integration into the existing infrastructure. Initially the
            shop was run on WordPress with the WooCommerce and WPML plugins. In
            several steps, the shop was then transitioned to a Next.js / vendure
            system. By leveraging Next.js's static site generation as well as
            Elasticsearch, it was possible to make the website blazingly fast. I
            mainly support the online shop, but I also help out with the rest of
            the IT infrastructure.
          </p>
          {/*<p>
            During the Covid-19 pandemic it took restaurants, bars and clubs
            quite some time to find or adapt a contact tracing applications
            where they were required to keep track of visitors. The developed
            solutions often did not have privacy in mind which was why we
            developed a simple app that just encodes the legally required
            information in a qr code that can be scanned. The scanned data is
            then only kept locally on a device and can be exported as a csv
            file. No online service required. The solution only stored the
            necessary data and if there was no incident, the data would not
            leave the single device.
                </p>*/}
          <Flex marginX flexWrap="wrap">
            <ProjectBox
              title="online shop"
              subtitle="website"
              href="https://shop.feuerschutz.ch/"
            />
            <ProjectBox
              title="homepage"
              subtitle="website"
              href="https://feuerschutz.ch/"
            />
          </Flex>
        </Project>
        <WireSeperator />
        <Project>
          <h2>Bachelor's Thesis</h2>
          <p>
            In 2021 I finished my Bachelor's degree at ETHZ with my Bachelor's
            thesis called "Safe evaluation of MFOTL dual temporal operators". In
            short I extended{" "}
            <a
              href="https://infsec.ethz.ch/research/projects/mon_enf.html"
              target="_blank"
              rel="noreferrer"
            >
              VeriMon
            </a>
            , a formally verified runtime monitor with two additional operators.
          </p>
          <Flex marginX flexWrap="wrap">
            <ProjectBox
              title="thesis"
              subtitle="pdf"
              href="/documents/ba-thesis.pdf"
            />
            <ProjectBox
              title="modified code"
              subtitle="github repo"
              href="https://github.com/Tyratox/safe-evaluation-of-mfotl-dual-temporal-operators"
            />
          </Flex>
        </Project>
        <WireSeperatorMirrored />
        <Project mirrored>
          <h2>Semester Project</h2>
          <p>
            During spring of 2022 I worked on the "Proof of Personhood" semester
            project at the DEDIS lab at EPFL. It was a project started in an
            earlier semester by previous students and the goal is to demonstrate
            use cases of a proof of personhood. I was part of the e-voting team
            whose primary goal was to add support for secret ballot elections.
            In addition I started overhauling the user interface to make the
            application easier to use.
          </p>
          <Flex flexWrap="wrap" marginX>
            <ProjectBox
              title="popstellar"
              subtitle="github repo"
              href="https://github.com/dedis/popstellar"
            />
          </Flex>
        </Project>
        <WireSeperator />
        <Project>
          <h2>Other Projects</h2>
          <Flex flexWrap="wrap" marginX>
            <ProjectBox
              title="variaktion"
              subtitle="website"
              href="https://variaktion.ch/"
            />
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
              title="praxis styna"
              subtitle="website"
              href="https://praxis-styna.ch/"
            />
            <ProjectBox
              title="praxis ganzxund"
              subtitle="website"
              href="https://praxis-ganzxund.ch/"
            />
            <ProjectBox
              title="gartkus"
              subtitle="website"
              href="https://gartkus.ch"
            />
            <ProjectBox
              title="and more ..."
              subtitle="my github repos"
              href="https://github.com/Tyratox?tab=repositories"
            />
          </Flex>
        </Project>
        <HorizontalLine />
        <div>
          <SocialLinks>
            <SocialLink
              href="https://github.com/tyratox"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={64} /> GitHub
            </SocialLink>
            <SocialLink
              href="https://keybase.io/tyratox"
              target="_blank"
              rel="noreferrer"
            >
              <FaKeybase size={64} /> Keybase
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/nico-hauser/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={64} /> LinkedIn
            </SocialLink>
            <SocialLink
              href="https://twitter.com/tyratox"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter size={64} /> Twitter
            </SocialLink>
          </SocialLinks>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Home;
