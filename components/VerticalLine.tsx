import styled from "@emotion/styled";

const VerticalLine = styled.div<{ height: number; width?: number }>`
  border-left: ${({ width }) =>
    `var(--foreground-color) ${width || 1}px solid`};

  margin: 0 3rem;
  height: ${({ height }) => height}rem;
`;

export default VerticalLine;
