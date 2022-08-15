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

const Wrapper = styled.svg<{ h: number }>`
  height: ${({ h }) => h}rem;
  width: auto;

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
  height: number;
}

const BlueprintText = ({ text, viewBox, height }: IProps) => {
  return (
    <Wrapper h={height} xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
      <Text textAnchor="middle" x="50%" y="100%" dy="-0.25em">
        {text}
      </Text>
    </Wrapper>
  );
};

export default BlueprintText;
