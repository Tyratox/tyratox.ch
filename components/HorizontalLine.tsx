import styled from "@emotion/styled";

const HorizontalLine = styled.hr<{ width?: number }>`
  border-top: ${({ width }) => `var(--foreground-color) ${width || 1}px solid`};
  border-bottom: none;
  border-left: none;
  border-right: none;

  margin: 3rem 0;
`;

export default HorizontalLine;
