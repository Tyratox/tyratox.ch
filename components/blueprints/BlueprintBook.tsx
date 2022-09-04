import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useRef } from "react";

import useSafariAnimationFix from "../../hooks/safari-animation-fix";

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

const fillAnimationBackground = keyframes`
  100% {
    fill: var(--background-color);
  }
`;

const fillAnimationGray1 = keyframes`
  100% {
    fill: #EFEFEF;
  }
`;

const fillAnimationGray2 = keyframes`
  100% {
    fill: #DFDFDF;
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

const PathStrokeBackground = styled.path`
  ${sharedSvgAnimationStyles}
  stroke-width: 3px;
  stroke: var(--background-color);

  animation: ${strokeAnimation} 5s 1.5s both ease-in-out;
`;

const PathBackground = styled.path`
  ${sharedSvgAnimationStyles}
  stroke-width: 0.5px;
  stroke: var(--background-color);

  animation: ${strokeAnimation} 3s 1.5s both ease-in-out,
    ${fillAnimationBackground} 0.5s 2s both ease-in-out;

  &.animation-ended {
    animation: none;
    stroke-dashoffset: 0;
    fill: var(--background-color);
  }
`;

const RectWhite = styled.rect`
  ${sharedSvgAnimationStyles}
  stroke-width: 2px;

  animation: ${strokeAnimation} 3s both ease-in-out,
    ${fillAnimationWhite} 0.5s 1s both ease-in-out;
`;

const RectWhiteStroke = styled.rect`
  ${sharedSvgAnimationStyles}
  stroke-width: 5px;

  animation: ${strokeAnimation} 3s both ease-in-out;
`;

const RectGray1 = styled(RectWhite)`
  stroke: #efefef;

  animation: ${strokeAnimation} 3s both ease-in-out,
    ${fillAnimationGray1} 0.5s 1s both ease-in-out;
`;

const RectGray2 = styled(RectWhite)`
  stroke: #dfdfdf;

  animation: ${strokeAnimation} 3s both ease-in-out,
    ${fillAnimationGray2} 0.5s 1s both ease-in-out;
`;

const BlueprintBook = () => {
  const text = useRef<SVGPathElement>();
  useSafariAnimationFix([text]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
      width="400"
      height="400"
    >
      <g fill="none" fillRule="evenodd">
        <RectGray2
          width="225.81"
          height="294.008"
          x="95.172"
          y="60.574"
          fill="#DFDFDF"
          rx="15"
        />
        <RectGray1
          width="225.81"
          height="294.008"
          x="87.595"
          y="52.996"
          fill="#EFEFEF"
          rx="15"
        />
        <RectWhite
          width="225.81"
          height="294.008"
          x="80.017"
          y="45.418"
          className="fill-foreground"
          rx="15"
        />
        <rect
          width="33.341"
          height="294.008"
          x="80.017"
          y="45.418"
          rx="15"
          className="fill-background"
        />
        <RectWhiteStroke
          width="28.341"
          height="289.008"
          x="82.517"
          y="47.918"
          className="stroke-foreground"
          strokeWidth="5"
          rx="14.171"
        />
        <PathBackground
          className="fill-background"
          d="M168.844 110.408c0 1.538-.384 2.831-1.153 3.878-.77 1.048-1.868 1.835-3.296 2.362-1.428.528-3.131.791-5.109.791-1.684 0-3.142-.131-4.372-.395s-2.307-.637-3.23-1.12v-3.362c.981.483 2.153.922 3.515 1.318a14.9 14.9 0 0 0 4.175.593c2.08 0 3.59-.337 4.527-1.01.937-.674 1.406-1.59 1.406-2.747a2.86 2.86 0 0 0-.56-1.747c-.374-.505-1-.996-1.88-1.472-.878-.476-2.094-1-3.647-1.571-1.538-.586-2.867-1.168-3.988-1.747-1.12-.579-1.984-1.285-2.592-2.12-.608-.835-.912-1.92-.912-3.252 0-2.037.824-3.6 2.472-4.692 1.648-1.09 3.812-1.636 6.493-1.636 1.45 0 2.808.142 4.076.428 1.267.286 2.45.67 3.548 1.154l-1.23 2.922a22.584 22.584 0 0 0-3.186-1.077 13.666 13.666 0 0 0-3.45-.44c-1.685 0-2.977.28-3.878.836-.901.556-1.352 1.318-1.352 2.285 0 .747.21 1.362.627 1.846.417.483 1.087.937 2.01 1.362.923.425 2.139.923 3.648 1.494 1.508.557 2.812 1.132 3.91 1.725 1.1.593 1.945 1.31 2.539 2.153.593.843.89 1.923.89 3.241Zm13.646 4.043c.6 0 1.215-.051 1.845-.154.63-.102 1.143-.227 1.538-.373v2.834c-.425.19-1.014.352-1.769.484a12.79 12.79 0 0 1-2.208.197c-1.274 0-2.431-.223-3.471-.67-1.04-.446-1.872-1.205-2.494-2.274-.623-1.07-.934-2.549-.934-4.438V95.774h-3.428v-1.78l3.45-1.428 1.45-5.23h2.197v5.582h7.053v2.856h-7.053v14.173c0 1.509.348 2.636 1.044 3.384.696.747 1.622 1.12 2.78 1.12Zm28.146-21.533V117h-2.988l-.527-3.384h-.198a6.999 6.999 0 0 1-1.933 2.11 8.59 8.59 0 0 1-2.67 1.285 11.31 11.31 0 0 1-3.153.428c-1.905 0-3.501-.307-4.79-.922-1.29-.616-2.26-1.568-2.912-2.857-.652-1.289-.977-2.944-.977-4.966V92.918h3.691v15.513c0 2.007.454 3.504 1.362 4.493.908.989 2.293 1.483 4.153 1.483 1.787 0 3.212-.337 4.274-1.01 1.062-.674 1.827-1.667 2.296-2.978.469-1.31.703-2.919.703-4.823V92.918h3.67Zm16.282 24.521c-3.047 0-5.46-1.04-7.24-3.12-1.78-2.08-2.67-5.17-2.67-9.272 0-4.146.909-7.277 2.725-9.393 1.817-2.117 4.234-3.175 7.251-3.175 1.275 0 2.388.168 3.34.505.952.337 1.772.787 2.46 1.351a8.452 8.452 0 0 1 1.737 1.923h.263a36.494 36.494 0 0 1-.175-1.868 27.258 27.258 0 0 1-.088-1.933V82.81h3.647V117h-2.944l-.55-3.428h-.153a8.49 8.49 0 0 1-1.725 1.956c-.696.586-1.524 1.05-2.483 1.395-.96.344-2.091.516-3.395.516Zm.572-3.032c2.578 0 4.401-.732 5.47-2.197 1.07-1.465 1.605-3.64 1.605-6.526v-.66c0-3.06-.51-5.412-1.527-7.052-1.018-1.641-2.868-2.461-5.548-2.461-2.242 0-3.919.86-5.032 2.582-1.114 1.72-1.67 4.068-1.67 7.042 0 2.959.553 5.244 1.659 6.855 1.106 1.612 2.787 2.417 5.043 2.417Zm14.59-21.489h3.91l5.318 13.975c.307.82.593 1.607.857 2.362.263.754.498 1.475.703 2.164.205.688.366 1.355.483 2h.154c.205-.733.498-1.696.879-2.89.38-1.194.791-2.413 1.23-3.658l5.032-13.953h3.933l-10.48 27.62c-.557 1.48-1.205 2.768-1.945 3.867-.74 1.098-1.637 1.944-2.692 2.538-1.055.593-2.329.89-3.823.89a12.198 12.198 0 0 1-3.186-.396v-2.922a12.537 12.537 0 0 0 2.615.285c.908 0 1.695-.172 2.362-.516.666-.344 1.241-.846 1.725-1.505.483-.66.9-1.443 1.252-2.351l1.318-3.384-9.646-24.126Z"
          ref={text}
        />
        <PathStrokeBackground
          className="stroke-background"
          strokeWidth="4"
          d="M134.576 146.957v7.578h15.155V139.38h-22.733v22.732h159.128v22.733h-22.733V169.69h15.156v7.577"
        />
      </g>
    </svg>
  );
};

export default BlueprintBook;
