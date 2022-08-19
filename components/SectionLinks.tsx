import styled from "@emotion/styled";
import React from "react";

import BlueprintBook from "./blueprints/BlueprintBook";
import BlueprintContact from "./blueprints/BlueprintContact";
import BlueprintLaptop from "./blueprints/BlueprintLaptop";
import Box from "./Box";
import Flex from "./Flex";
import HoverBackground from "./HoverBackground";
import MailToLink from "./MailToLink";
import ScrollToLink from "./ScrollToLink";

const Sections = styled(Flex)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  justify-content: center;

  a {
    display: block;
  }
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
  cursor: pointer;

  &:hover {
    & > div > svg {
      display: block;
    }
  }
`;

const SectionLinks = () => {
  return (
    <Sections flexWrap="wrap">
      <SectionLink widths={[4 / 5, 3 / 5, 1 / 2, 1 / 3, 1 / 3]}>
        <ScrollToLink elementId="education">
          <SectionImage>
            <HoverBackground />
            <BlueprintBook />
          </SectionImage>
        </ScrollToLink>
      </SectionLink>

      <SectionLink widths={[4 / 5, 3 / 5, 1 / 2, 1 / 3, 1 / 3]}>
        <ScrollToLink elementId="projects">
          <SectionImage>
            <HoverBackground />
            <BlueprintLaptop />
          </SectionImage>
        </ScrollToLink>
      </SectionLink>

      <SectionLink widths={[4 / 5, 3 / 5, 1 / 2, 1 / 3, 1 / 3]}>
        <MailToLink>
          <SectionImage>
            <HoverBackground />
            <BlueprintContact />
          </SectionImage>
        </MailToLink>
      </SectionLink>
    </Sections>
  );
};
export default SectionLinks;
