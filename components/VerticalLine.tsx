import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const scaleIn = keyframes`
  from {
    transform: scaleY(0);
  }

  to {
    transform: scaleY(1);
  }
`;

const VerticalLine = styled.div<{ height: number; width?: number }>`
  border-left: ${({ width }) =>
    `var(--foreground-color) ${width || 1}px solid`};

  margin: 0 3rem;
  height: ${({ height }) => height}rem;

  animation: ${scaleIn} 2s linear forwards;
`;

export default VerticalLine;
