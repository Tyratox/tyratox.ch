import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

import { MediaQuery } from "../styles/media";
import Box from "./Box";
import Container from "./Container";
import Flex from "./Flex";
import Download from "./icons/Download";

const H2 = styled.h2`
  font-size: var(--font-size-large);
`;

const EducationFlex = styled(Flex)`
  width: 100%;

  font-size: var(--font-size-large);

  align-items: flex-start;

  & > * {
    ${MediaQuery.minSmall} {
      padding-bottom: 2rem !important;
    }
  }
`;

const DownloadBox = styled(Box)`
  padding-bottom: 2rem !important;

  a {
    display: block;
    width: 100%;
  }
`;

const Education = () => {
  return (
    <Container id="education">
      <H2>Education</H2>
      <EducationFlex flexWrap="wrap">
        <Box widths={[1, 2 / 8, 8 / 32, 8 / 32, 4 / 16]} paddingBottom={0.5}>
          2021-
          <wbr />
          2023
        </Box>
        <Box widths={[1, 5 / 8, 21 / 32, 21 / 32, 11 / 16]} paddingBottom={0.5}>
          <Link
            href="https://ethz.ch/en/studies/master/degree-programmes/engineering-sciences/cyber-security.html"
            target="_blank"
            rel="noreferrer"
          >
            Master in Cyber Security
          </Link>
          <br />
          <Link href="https://ethz.ch/en.html" target="_blank">
            ETHZ
          </Link>
          ,{" "}
          <Link href="https://www.epfl.ch/en/" target="_blank">
            EPFL
          </Link>
        </Box>
        <DownloadBox
          widths={[1 / 8, 1 / 8, 3 / 32, 3 / 32, 1 / 16]}
          paddingBottom={0.5}
        >
          <a href="/" download>
            <Download />
          </a>
        </DownloadBox>
        <Box widths={[1, 2 / 8, 8 / 32, 8 / 32, 4 / 16]} paddingBottom={0.5}>
          2018-
          <wbr />
          2021
        </Box>
        <Box widths={[1, 5 / 8, 21 / 32, 21 / 32, 11 / 16]} paddingBottom={0.5}>
          <Link
            href="https://ethz.ch/en/studies/bachelor/bachelors-degree-programmes/engineering-sciences/computer-science.html"
            target="_blank"
          >
            Bachelor in Computer Science
          </Link>
          <br />
          <Link href="https://ethz.ch/en.html" target="_blank">
            ETHZ
          </Link>
        </Box>
        <DownloadBox
          widths={[1 / 8, 1 / 8, 3 / 32, 3 / 32, 1 / 16]}
          paddingBottom={0.5}
        >
          <a href="/" download>
            <Download />
          </a>
        </DownloadBox>
        <Box widths={[1, 2 / 8, 8 / 32, 8 / 32, 4 / 16]} paddingBottom={0.5}>
          2013-
          <wbr />
          2017
        </Box>
        <Box widths={[1, 5 / 8, 21 / 32, 21 / 32, 11 / 16]} paddingBottom={0.5}>
          <Link
            href="https://www.nksa.ch/gymnasium/bildungsweg/#infcom-ch"
            target="_blank"
          >
            Gymnasium
          </Link>
          <br />
          <Link href="https://nksa.ch" target="_blank">
            NKSA
          </Link>
        </Box>
        <DownloadBox
          widths={[1 / 8, 1 / 8, 3 / 32, 3 / 32, 1 / 16]}
          paddingBottom={0.5}
        >
          <a href="/" download>
            <Download />
          </a>
        </DownloadBox>
      </EducationFlex>
    </Container>
  );
};

export default Education;
