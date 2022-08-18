import { keyframes } from "@emotion/react";
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

const StyledSvg = styled.svg`
  width: 100%;
  height: auto;

  &.in-view {
    .path {
      animation: ${strokeAnimation} 2s both ease-in-out,
        ${fillAnimationWhite} 0.5s 1.5s both ease-in-out;
    }
  }
`;

const Path = styled.path`
  fill: rgba(255, 255, 255, 0);
  stroke: var(--foreground-color);
  stroke-dasharray: 2000;
  stroke-dashoffset: 2000;
  stroke-linecap: square;
  stroke-linejoin: miter;
  stroke-width: 10px;
`;

const Download = () => {
  const ref = React.createRef<SVGSVGElement>();
  const inView = useInView(ref);

  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-10 0 700 512"
      ref={ref}
      className={inView ? "in-view" : ""}
    >
      <Path
        className="fill-foreground path"
        d="M144 480C64.47 480 0 415.5 0 336C0 273.2 40.17 219.8 96.2 200.1C96.07 197.4 96 194.7 96 192C96 103.6 167.6 32 256 32C315.3 32 367 64.25 394.7 112.2C409.9 101.1 428.3 96 448 96C501 96 544 138.1 544 192C544 204.2 541.7 215.8 537.6 226.6C596 238.4 640 290.1 640 352C640 422.7 582.7 480 512 480H144zM303 392.1C312.4 402.3 327.6 402.3 336.1 392.1L416.1 312.1C426.3 303.6 426.3 288.4 416.1 279C407.6 269.7 392.4 269.7 383 279L344 318.1V184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184V318.1L256.1 279C247.6 269.7 232.4 269.7 223 279C213.7 288.4 213.7 303.6 223 312.1L303 392.1z"
      />
    </StyledSvg>
  );
};

export default Download;
