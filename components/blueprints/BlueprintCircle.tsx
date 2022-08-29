import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

import useInView from "../../hooks/in-view";

const strokeAnimation = keyframes`
  100% {
    stroke-dashoffset: 0;
  }
`;

const Svg = styled.svg`
  width: 100%;
  height: auto;

  display: block;

  &.in-view .circle {
    animation: ${strokeAnimation} 3s both ease-in-out;
  }
`;

const Circle = styled.circle`
  fill: rgba(255, 255, 255, 0);
  stroke: var(--foreground-color);
  stroke-dasharray: 1500;
  stroke-dashoffset: 1500;
  stroke-linecap: square;
  stroke-linejoin: miter;
  stroke-width: 50px;
`;

interface IProps {
  className?: string;
}

const BlueprintCircle = ({ className }: IProps) => {
  const ref = React.createRef<SVGSVGElement>();
  const inView = useInView(ref);

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width="500"
      height="500"
      ref={ref}
      className={inView ? className + " in-view" : className}
    >
      <Circle cx="250" cy="250" r="220" className="stroke-foreground circle" />
    </Svg>
  );
};

export default BlueprintCircle;
