import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useRef } from "react";

import useSafariAnimationFix from "../../hooks/safari-animation-fix";

const strokeText = keyframes`
  100% {
    stroke-dashoffset: 0;
  }
`;

const fillText = keyframes`
  100% {
    fill: var(--foreground-color);
  }
`;

const Wrapper = styled.svg`
  width: 100%;
  height: auto;

  display: block;
`;

const Text = styled.text`
  font-size: 2rem;

  stroke: var(--foreground-color);
  stroke-width: 0.5px;
  stroke-linecap: square;
  stroke-linejoin: miter;

  &:not(.animation-ended) {
    fill: rgba(255, 255, 255, 0);
    animation: ${strokeText} 3s both ease-in-out,
      ${fillText} 0.5s 2s both ease-in-out;

    stroke-dasharray: 300;
    stroke-dashoffset: 300;
  }

  &.animation-ended {
    stroke-dashoffset: 0;
  }
`;

interface IProps {
  text: string;
  viewBox: string;
  width: number;
  height: number;
}

const BlueprintText = ({ text, viewBox, width, height }: IProps) => {
  const textRef = useRef<SVGTextElement>();
  useSafariAnimationFix([textRef]);

  return (
    <Wrapper
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={width}
      height={height}
      preserveAspectRatio="xMinYMid meet"
    >
      <Text
        textAnchor="left"
        x="0"
        y="100%"
        dy="-0.25em"
        className="fill-foreground"
        ref={textRef}
      >
        {text}
      </Text>
    </Wrapper>
  );
};

export default BlueprintText;
