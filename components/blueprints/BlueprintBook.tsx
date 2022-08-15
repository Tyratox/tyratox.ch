import { css, keyframes } from "@emotion/react";
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
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
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
          stroke-width="5"
          rx="14.171"
        />
        <PathBackground
          className="fill-background"
          d="M160.354 118.163h-3.707V83.62h3.707v34.543Zm17.138-24.775c2.072 0 3.848.459 5.328 1.376 1.48.918 2.612 2.202 3.397 3.852.784 1.65 1.176 3.578 1.176 5.783v2.286h-16.805c.044 2.857.755 5.032 2.131 6.527 1.377 1.495 3.315 2.242 5.817 2.242 1.539 0 2.9-.14 4.084-.421a22.523 22.523 0 0 0 3.685-1.244v3.242a17.995 17.995 0 0 1-3.651 1.198c-1.207.252-2.631.378-4.274.378-2.338 0-4.377-.478-6.116-1.432-1.739-.955-3.09-2.357-4.051-4.207-.962-1.85-1.443-4.114-1.443-6.793 0-2.62.44-4.888 1.32-6.804.881-1.917 2.124-3.393 3.73-4.43 1.606-1.035 3.497-1.553 5.672-1.553Zm-.044 3.019c-1.969 0-3.537.644-4.707 1.931-1.169 1.288-1.864 3.086-2.086 5.395h12.875c-.014-1.45-.24-2.727-.677-3.83-.436-1.102-1.098-1.96-1.986-2.575-.888-.614-2.028-.921-3.42-.921Zm25.307-2.975c2.901 0 5.055.651 6.46 1.954 1.407 1.302 2.11 3.381 2.11 6.238v16.539h-2.687l-.71-3.597h-.178c-.68.888-1.39 1.632-2.13 2.231a7.666 7.666 0 0 1-2.565 1.355c-.97.303-2.157.455-3.563.455-1.48 0-2.793-.26-3.94-.777a6.074 6.074 0 0 1-2.709-2.353c-.658-1.051-.988-2.383-.988-3.996 0-2.428.962-4.292 2.886-5.595 1.924-1.302 4.855-2.013 8.791-2.13l4.196-.179v-1.487c0-2.102-.451-3.574-1.354-4.418-.903-.843-2.176-1.265-3.818-1.265-1.273 0-2.487.185-3.641.555-1.154.37-2.25.807-3.286 1.31l-1.132-2.797c1.095-.563 2.353-1.044 3.774-1.443 1.42-.4 2.916-.6 4.484-.6Zm4.929 12.743-3.708.155c-3.034.119-5.172.614-6.415 1.488-1.243.873-1.865 2.109-1.865 3.707 0 1.391.422 2.42 1.265 3.086.844.666 1.961.999 3.353.999 2.16 0 3.929-.6 5.305-1.798 1.377-1.2 2.065-2.997 2.065-5.395v-2.242Zm22.288-12.787c.489 0 1 .026 1.532.077.533.052 1.007.123 1.421.211l-.466 3.42c-.4-.104-.844-.186-1.332-.245a11.47 11.47 0 0 0-1.377-.089 6.62 6.62 0 0 0-2.763.588 6.74 6.74 0 0 0-2.276 1.688c-.651.732-1.162 1.613-1.532 2.641-.37 1.029-.555 2.172-.555 3.43v13.054h-3.707V93.832h3.064l.4 4.484h.155a12.2 12.2 0 0 1 1.82-2.475 8.242 8.242 0 0 1 2.475-1.787c.94-.444 1.987-.666 3.141-.666Zm19.048 0c2.886 0 5.069.706 6.549 2.12 1.48 1.413 2.22 3.681 2.22 6.804v15.85h-3.641v-15.606c0-2.027-.462-3.544-1.387-4.55-.925-1.007-2.343-1.51-4.252-1.51-2.693 0-4.588.762-5.683 2.286-1.095 1.525-1.643 3.737-1.643 6.638v12.743h-3.685V93.832h2.975l.555 3.507h.2a7.372 7.372 0 0 1 1.976-2.164 8.943 8.943 0 0 1 2.686-1.332 10.64 10.64 0 0 1 3.13-.455Z"
        />
        <PathStrokeBackground
          className="stroke-background"
          stroke-width="4"
          d="M134.576 146.957v7.578h15.155V139.38h-22.733v22.732h159.128v22.733h-22.733V169.69h15.156v7.577"
        />
      </g>
    </svg>
  );
};

export default BlueprintBook;
