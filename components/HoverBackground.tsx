import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledHoverBackground = styled.svg`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  width: 100%;
  height: auto;

  transform: scale(1.75);
  z-index: 1;

  .outer-orbit {
    position: relative;
    transform-origin: 50% 50%;
    animation: ${rotate} 10s linear infinite;
  }

  .inner-orbit {
    position: relative;
    transform-origin: 0% 0%;
    animation: ${rotate} 10s linear infinite;
  }

  display: none;
`;

const strokeAnimation = keyframes`
  100% {
    stroke-dashoffset: 0;
  }
`;

const fillAnimation = keyframes`
  100% {
    fill: var(--foreground-color);
  }
`;

const sharedSvgAnimationStyles = css`
  fill: rgba(255, 255, 255, 0);
  stroke: var(--foreground-color);
  stroke-dasharray: 1500;
  stroke-dashoffset: 1500;
  stroke-linecap: square;
  stroke-linejoin: miter;
`;

const Circle = styled.circle`
  ${sharedSvgAnimationStyles}
  stroke-width: 2px;

  animation: ${strokeAnimation} 3s both ease-in-out,
    ${fillAnimation} 0.5s 1s both ease-in-out;
`;

const CircleStroke = styled.circle`
  ${sharedSvgAnimationStyles}

  animation: ${strokeAnimation} 3s both ease-in-out;
`;

const HoverBackground = () => {
  return (
    <StyledHoverBackground
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
    >
      <g className="outer-orbit">
        <g fill="none" fillRule="evenodd">
          <CircleStroke
            cx="200"
            cy="200"
            r="160"
            className="stroke-foreground"
            strokeWidth="3"
          />
          <g transform="translate(85, 85)">
            <g className="inner-orbit">
              <CircleStroke
                cx="0"
                cy="0"
                className="stroke-foreground"
                r="35"
              />
              <Circle cx="0" cy="0" className="fill-foreground" r="15" />
              <Circle cx="-25" cy="-25" className="fill-foreground" r="5" />
            </g>
          </g>
        </g>
      </g>
    </StyledHoverBackground>
  );
};

export default HoverBackground;
