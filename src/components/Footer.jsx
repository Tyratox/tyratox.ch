import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Container from "components/Container";
import { Flex, Box } from "grid-styled";
import {
  IoLogoTwitter as TwitterIcon,
  IoLogoGithub as GithubIcon,
  IoLogoInstagram as InstagramIcon
} from "react-icons/io";
import { FaComment as ContactIcon } from "react-icons/fa";

import { colors, media } from "../utilities/style";

const FooterWrapper = styled.footer`
  background-color: ${colors.background};
  border-top: ${colors.backgroundContrast} 5px solid;

  color: #fff;
  padding: 1rem 0;
`;

const Copyright = styled.div`
  text-align: center;
  font-size: 0.8rem;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    align-items: center;
    margin: 0.25rem 0;
    cursor: pointer;

    a {
      text-decoration: none;
      color: #fff;
    }

    svg {
      margin-right: 0.5rem;
    }
  }
`;

const FooterTitle = styled.h4`
  ${media.maxMedium`
		border-top: #fff 1px solid;
	`};

  padding-top: 0.5rem;
  margin: 0.5rem 0 1rem 0;
`;

const emojis = ["🥳", "😋", "🤔", "😜"];

/**
 * The site footer
 * @returns {Component} The component
 */
class Footer extends React.PureComponent {
  render = () => {
    return (
      <FooterWrapper>
        <Container>
          <Flex wrap>
            <Box width={[1, 1, 1 / 3, 1 / 3]} pr={2}>
              <FooterTitle>Links</FooterTitle>
              <FooterList>
                <li>
                  <a href="https://twitter.com/Tyratox/" target="_blank">
                    <TwitterIcon />
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Tyratox/" target="_blank">
                    <GithubIcon />
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/tyratox/" target="_blank">
                    <InstagramIcon />
                    Instagram
                  </a>
                </li>
              </FooterList>
            </Box>
            <Box width={[1, 1, 1 / 3, 1 / 3]} pr={2}>
              <FooterTitle>Contact</FooterTitle>
              <FooterList>
                <li
                  onClick={() => {
                    window.location =
                      "mailto:" +
                      "em"
                        .split("")
                        .reverse()
                        .join("") +
                      "@tyratox.ch";
                  }}
                >
                  <ContactIcon />
                  Text me!
                </li>
              </FooterList>
            </Box>
            <Box width={[1, 1, 1 / 3, 1 / 3]} pr={2}>
              <FooterTitle>About</FooterTitle>
              🌎🚀🔥💻🧬
              {emojis[Math.floor(Math.random() * emojis.length)]}
            </Box>
          </Flex>
          <Copyright>© {new Date().getFullYear()}</Copyright>
        </Container>
      </FooterWrapper>
    );
  };
}

export default Footer;
