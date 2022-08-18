import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

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

const Path = styled.path`
  fill: rgba(255, 255, 255, 0);
  stroke: var(--foreground-color);
  stroke-dasharray: 1500;
  stroke-dashoffset: 1500;
  stroke-linecap: square;
  stroke-linejoin: miter;
  stroke-width: 2px;

  animation: ${strokeAnimation} 3s both ease-in-out,
    ${fillAnimationWhite} 0.5s 1s both ease-in-out;
`;

const BlueprintNKSA = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118 188">
      <Path
        className="fill-foreground"
        d="M114.01 96.112H74.657v91.638h39.353V96.112Zm-61.826-.322H5.555v67.435h46.629V95.79ZM91.26 55.908V26.894h26.059V6.59H77.97V0H66.791v6.59H0v20.304h72.682v29.014h-9.925v21.086h54.56V55.908H91.26Z"
      />
    </svg>
  );
};

export default BlueprintNKSA;
