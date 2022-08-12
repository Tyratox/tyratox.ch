import { keyframes } from "@emotion/react";
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

  transform: scale(2.5);

  .outer-orbit {
    position: relative;
    transform-origin: 50% 50%;
    /*animation: ${rotate} 10s linear infinite;*/
  }

  .inner-orbit {
    position: relative;
    transform-origin: 0% 0%;
    /*animation: ${rotate} 10s linear infinite;*/
  }

  opacity: 0;
`;

const HoverBackground = () => {
  return (
    <StyledHoverBackground
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
    >
      <g className="outer-orbit">
        <g fill="none" fillRule="evenodd">
          <circle cx="200" cy="200" r="160" stroke="#FFF" strokeWidth="3" />
          <g transform="translate(85, 85)">
            <g className="inner-orbit">
              <ellipse cx="0" cy="0" stroke="#FFF" rx="35" ry="35" />
              <ellipse cx="0" cy="0" fill="#FFF" rx="15" ry="15" />
              <ellipse cx="-25" cy="-25" fill="#FFF" rx="5" ry="5" />
            </g>
          </g>
        </g>
      </g>
    </StyledHoverBackground>
  );
};

export default HoverBackground;
