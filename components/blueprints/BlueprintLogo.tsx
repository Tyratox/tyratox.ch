import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

const strokeAnimation = keyframes`
  100% {
    stroke-dashoffset: 0;
  }
`;

const fillAnimation = keyframes`
  100% {
    fill: rgba(255,255,255,1);
  }
`;

const Wrapper = styled.svg<{ h: number }>`
  height: ${({ h }) => h}rem;
  width: auto;

  display: block;
`;

const sharedSvgAnimationStyles = css`
  fill: rgba(255, 255, 255, 0);
  stroke: #fff;
  stroke-dasharray: 1500;
  stroke-dashoffset: 1500;
  stroke-linecap: square;
  stroke-linejoin: miter;
`;

const Path = styled.path`
  ${sharedSvgAnimationStyles}
  stroke-width: 2px;

  animation: ${strokeAnimation} 3s both ease-in-out,
    ${fillAnimation} 0.5s 2s both ease-in-out;
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

interface IProps {
  viewBox: string;
  height: number;
}

const BlueprintLogo = ({ viewBox, height }: IProps) => {
  return (
    <Wrapper h={height} xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
      <g fill="none" fillRule="evenodd">
        <CircleStroke cx="250" cy="250" r="66" stroke="#FFF" strokeWidth="10" />
        <CircleStroke
          cx="250.5"
          cy="250.5"
          r="225.5"
          stroke="#FFF"
          strokeWidth="7.5"
        />
        <Path
          fill="#FFF"
          d="M450 450 250 250h200v200ZM400 50h50v200h-50V50Zm25 339.559V275H311l114 114.559ZM50 50l200 200H50V50Zm0 200h50v200H50V250Zm25-139.559V225h114L75 110.441Z"
        />
        <g transform="translate(109 10)">
          <CircleStroke cx="41" cy="40" r="40" stroke="#FFF" strokeWidth="3" />
          <Circle cx="41" cy="39" r="19" fill="#FFF" />
          <Circle cx="9" cy="15" r="9" fill="#FFF" />
        </g>
      </g>
    </Wrapper>
  );
};

export default BlueprintLogo;
