import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";

import Box from "./Box";
import Flex from "./Flex";

const CenteredFlex = styled(Flex)`
  justify-content: center;
`;

const ImageBorder = styled.div`
  border-radius: 50%;
  border: var(--foreground-color) 0.5rem solid !important;
`;

const imageAnimation = keyframes`
  from {
    filter: hue-rotate(0deg) saturate(100%);
  }

  50% {
    filter: hue-rotate(180deg) saturate(200%);
  }

  to {
    filter: hue-rotate(360deg) saturate(100%);
  }
`;

const RoundImage = styled(Image)`
  border-radius: 50%;
  animation: ${imageAnimation} 10s ease-in-out infinite;
`;

const CenteredText = styled.div`
  margin: 2rem 0;

  text-align: center;
  font-size: var(--font-size-large);
`;

const Profile = () => {
  return (
    <>
      <CenteredFlex>
        <Box widths={[2 / 3, 2 / 3, 1 / 3, 1 / 4, 1 / 4]}>
          <ImageBorder>
            <RoundImage
              src={"/images/me.jpg"}
              width={4000}
              height={4000}
              layout="responsive"
            />
          </ImageBorder>
        </Box>
      </CenteredFlex>
      <CenteredFlex>
        <Box widths={[1, 1, 1, 2 / 3, 1 / 2]}>
          <CenteredText>
            I am a Cyber Security student at ETHZ & EPFL and will finish my
            studies in autumn 2023.
          </CenteredText>
        </Box>
      </CenteredFlex>
    </>
  );
};

export default Profile;
