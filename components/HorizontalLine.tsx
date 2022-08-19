import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

import useInView from "../hooks/in-view";

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

  &.in-view {
    animation: ${scaleIn} 2s linear forwards;
  }
`;

const AnimatedHorizontalLine = () => {
  const ref = React.createRef<HTMLHRElement>();
  const inView = useInView(ref);

  return <HorizontalLine ref={ref} className={inView ? "in-view" : ""} />;
};

export default AnimatedHorizontalLine;
