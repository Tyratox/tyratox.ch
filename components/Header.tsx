import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

import BlueprintLogo from "./blueprints/BlueprintLogo";
import BlueprintText from "./blueprints/BlueprintText";
import Box from "./Box";
import Container from "./Container";
import Flex from "./Flex";
import HideMediaQuery from "./HideMediaQuery";
import MailToLink from "./MailToLink";
import ScrollToLink from "./ScrollToLink";
import Sticky from "./Sticky";
import VerticalLine from "./VerticalLine";

const StickyHeader = styled(Sticky)`
  position: sticky;
  top: -1px;

  z-index: 99999;
`;

const swapVariables = css`
  & > * {
    --foreground-color: var(--background-color);
    & > * {
      --background-color: #fff;
    }
  }

  /*border-bottom: var(--background-color) 1px solid;*/
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;

const HeaderContainer = styled.div<{ negative?: boolean }>`
  ${({ negative }) => (negative ? swapVariables : "")}

  background-color: var(
    ${({ negative }) =>
    negative ? "--foreground-color" : "--background-color"}
  );
  color: var(
    ${({ negative }) =>
      negative ? "--background-color" : "--foreground-color"}
  );

  transition: all 0.3s ease-in-out;
`;

const HeaderElement = styled.header`
  position: relative;

  width: 100%;
  padding: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  transition: all 0.3s ease-in-out;
`;

const AnimatedBox = styled(Box)<{ align: string }>`
  transition: all 0.3s ease-in-out;

  ${({ align }) =>
    align === "left" ? "left: 0;" : "left:50%;transform: translateX(-50%);"}
`;

interface IProps {
  stuck?: boolean;
}

const Name = ({ stuck }: IProps) => (
  <Flex>
    <Box widths={[1 / 3, 1 / 3, 1 / 3, 1 / 3, 1 / 3]}>
      <VerticalLine height={stuck ? 7.5 : 10} />
    </Box>
    <Box widths={[2 / 3, 2 / 3, 2 / 3, 2 / 3, 2 / 3]}>
      <BlueprintText text="nico hauser" viewBox="0 0 200 40" />
      <BlueprintText text="@tyratox" viewBox="0 0 200 40" />
    </Box>
  </Flex>
);

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;

  font-size: var(--font-size-large);

  & > * {
    margin-left: 1rem;
  }
`;

const Header = () => {
  return (
    <StickyHeader
      className="sticky-header"
      render={(stuck) => {
        const widthsLogo = stuck
          ? [1 / 4, 1 / 4, 1 / 2, 2 / 5, 1 / 3]
          : [1, 1, 3 / 4, 3 / 5, 1 / 2];

        const widthsMenu = stuck
          ? [3 / 4, 3 / 4, 1 / 2, 3 / 5, 2 / 3]
          : [0, 0, 0, 0, 0];

        return (
          <HeaderContainer negative={stuck}>
            <Container>
              <HeaderElement>
                <AnimatedBox
                  widths={widthsLogo}
                  align={stuck ? "left" : "center"}
                >
                  <Flex>
                    <Box
                      widths={
                        stuck
                          ? [1, 1, 1 / 3, 1 / 3, 1 / 3]
                          : [1 / 3, 2 / 5, 2 / 5, 2 / 5, 2 / 5]
                      }
                    >
                      <BlueprintLogo />
                    </Box>
                    <Box
                      widths={
                        stuck
                          ? [0, 0, 2 / 3, 2 / 3, 2 / 3]
                          : [2 / 3, 3 / 5, 3 / 5, 3 / 5, 3 / 5]
                      }
                    >
                      <HideMediaQuery md={stuck} up={stuck}>
                        <Name stuck={stuck} />
                      </HideMediaQuery>
                    </Box>
                  </Flex>
                </AnimatedBox>
                {stuck && (
                  <Box widths={widthsMenu}>
                    <Menu>
                      <ScrollToLink elementId="education">learn</ScrollToLink>
                      <ScrollToLink elementId="projects">work</ScrollToLink>
                      <MailToLink>contact</MailToLink>
                    </Menu>
                  </Box>
                )}
              </HeaderElement>
            </Container>
          </HeaderContainer>
        );
      }}
    ></StickyHeader>
  );
};

export default Header;
