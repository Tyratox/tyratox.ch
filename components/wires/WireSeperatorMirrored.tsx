import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

import useInView from "../../hooks/in-view";

const strokeAnimation = keyframes`
  100% {
    stroke-dashoffset: 0;
  }
`;

const fillAnimationWhite = keyframes`
  100% {
    fill: var(--foreground-color);
  }
`;

const Svg = styled.svg`
  &.in-view {
    .path {
      animation: ${strokeAnimation} 2.5s both ease-in-out;
    }

    .circle {
      animation: ${strokeAnimation} 8s both ease-in-out,
        ${fillAnimationWhite} 0.5s 1s both ease-in-out;
    }
  }
`;

const sharedSvgAnimationStyles = css`
  fill: rgba(255, 255, 255, 0);
  stroke: var(--foreground-color);
  stroke-dasharray: 1400;
  stroke-dashoffset: 1400;
  stroke-linecap: square;
  stroke-linejoin: miter;
`;

const PathStroke = styled.path`
  ${sharedSvgAnimationStyles}
  stroke-width: 3px;
  stroke: var(--foreground-color);
`;

const CircleWhite = styled.circle`
  ${sharedSvgAnimationStyles}
  stroke-width: 2px;
`;

const WireSeperatorMirrored = () => {
  const ref = React.createRef<SVGSVGElement>();
  const inView = useInView(ref);

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1208 182"
      ref={ref}
      className={inView ? "in-view" : ""}
    >
      <g fill="none" fillRule="evenodd">
        <CircleWhite
          cx="13"
          cy="167"
          r="10"
          className="fill-foreground circle"
        />
        <PathStroke
          className="stroke-foreground path"
          d="m12 170 56-85h1008l119-69"
        />
        <CircleWhite
          cx="1195.5"
          cy="15"
          r="10"
          className="fill-foreground circle"
        />
      </g>
    </Svg>
  );
};

export default WireSeperatorMirrored;
