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
  margin: 0 auto;

  border-left: ${({ width }) =>
    `var(--foreground-color) ${width || 1}px solid`};

  height: ${({ height }) => height}rem;
  width: 1px;

  animation: ${scaleIn} 2s linear forwards;
`;

export default VerticalLine;
