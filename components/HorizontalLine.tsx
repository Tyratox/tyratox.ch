import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

import Container from "./Container";

const scaleIn = keyframes`
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
`;

const HorizontalLine = styled.hr<{ width?: number }>`
  border-top: ${({ width }) => `var(--foreground-color) ${width || 1}px solid`};
  border-bottom: none;
  border-left: none;
  border-right: none;

  margin: 2rem 0;

  animation: ${scaleIn} 2s linear forwards;
`;

const ContainedHorizontalLine = () => (
  <Container>
    <HorizontalLine />
  </Container>
);

export default ContainedHorizontalLine;
