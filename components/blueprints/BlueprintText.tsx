import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

const strokeText = keyframes`
  100% {
    stroke-dashoffset: 0;
  }
`;

const fillText = keyframes`
  100% {
    fill: rgba(255,255,255,1);
  }
`;

const Wrapper = styled.svg`
  width: 100%;
  height: auto;

  display: block;
`;

const Text = styled.text`
  font-size: 2rem;

  fill: rgba(255, 255, 255, 0);
  stroke: var(--foreground-color);
  stroke-width: 0.5px;
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  stroke-linecap: square;
  stroke-linejoin: miter;

  animation: ${strokeText} 3s both ease-in-out,
    ${fillText} 0.5s 2s both ease-in-out;
`;

interface IProps {
  text: string;
  viewBox: string;
}

const BlueprintText = ({ text, viewBox }: IProps) => {
  return (
    <Wrapper
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      preserveAspectRatio="xMinYMid meet"
    >
      <Text textAnchor="left" x="0" y="100%" dy="-0.25em">
        {text}
      </Text>
    </Wrapper>
  );
};

export default BlueprintText;
