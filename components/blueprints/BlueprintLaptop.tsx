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
    fill: var(--foreground-color);
  }
`;

const fillAnimationBackground = keyframes`
  100% {
    fill: var(--background-color);
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

const PathBackground = styled.path`
  ${sharedSvgAnimationStyles}
  stroke: var(--background-color);
  stroke-width: 0.5px;

  animation: ${strokeAnimation} 3s 1s both ease-in-out,
    ${fillAnimationBackground} 0.5s 1.5s both ease-in-out;
`;

const PathStroke = styled.path`
  ${sharedSvgAnimationStyles}
  stroke-width: 2px;

  animation: ${strokeAnimation} 3s both ease-in-out;
`;

const Rect = styled.rect`
  ${sharedSvgAnimationStyles}
  stroke-width: 2px;

  animation: ${strokeAnimation} 3s both ease-in-out,
    ${fillAnimation} 0.5s 1s both ease-in-out;
`;

const RectStroke = styled.rect`
  ${sharedSvgAnimationStyles}

  animation: ${strokeAnimation} 3s both ease-in-out;
`;

const BlueprintLaptop = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
      <g fill="none" fillRule="evenodd" transform="translate(-1)">
        <g transform="translate(21.252 236.845)">
          <Rect
            width="225.678"
            height="6.141"
            x="73.691"
            y="23.028"
            className="fill-foreground"
            rx="3.07"
          />
          <Rect
            width="225.678"
            height="6.141"
            x="58.338"
            y="41.451"
            className="fill-foreground"
            rx="3.07"
          />
          <Rect
            width="225.678"
            height="6.141"
            x="42.986"
            y="59.874"
            className="fill-foreground"
            rx="3.07"
          />
          <Rect
            width="61.409"
            height="6.141"
            x="194.973"
            y="78.296"
            className="fill-foreground"
            rx="3.07"
          />
          <Rect
            width="61.409"
            height="6.141"
            x="27.634"
            y="78.296"
            className="fill-foreground"
            rx="3.07"
          />
          <Rect
            width="61.409"
            height="6.141"
            x="107.466"
            y="78.296"
            className="fill-foreground"
            rx="3.07"
          />
          <PathStroke
            className="stroke-foreground"
            strokeWidth="3"
            d="M49.124 17.814C54.644 8.855 67.818 1.5 78.339 1.5h250.156c9.873 0 13.41 6.335 8.232 14.74L288.69 94.194c-5.52 8.958-18.695 16.314-29.215 16.314H9.32c-9.873 0-13.41-6.335-8.232-14.74l48.036-77.954Z"
          />
        </g>
        <Rect
          width="270.199"
          height="171.945"
          x="90.337"
          y="60.295"
          className="fill-foreground"
          rx="15"
        />
        <PathBackground
          className="fill-background"
          d="m165.704 155.837-21.634-9.58v-2.137l21.634-10.704v3.328l-17.586 8.298 17.586 7.489v3.306Zm26.38 5.42-4.386-14.348a79.75 79.75 0 0 1-.551-1.81 61.906 61.906 0 0 1-.472-1.71 75.816 75.816 0 0 1-.664-2.754h-.157c-.06.344-.143.753-.247 1.225-.105.472-.23.986-.372 1.54-.142.555-.296 1.136-.46 1.744a30.031 30.031 0 0 1-.563 1.832l-4.587 14.28h-4.206l-6.791-24.647h3.868l3.553 13.606c.24.9.468 1.788.686 2.665.217.877.405 1.701.562 2.473.157.772.274 1.443.349 2.013h.18c.09-.375.19-.824.303-1.35.112-.524.24-1.082.382-1.675a53.2 53.2 0 0 1 .956-3.452l4.543-14.28h4.025l4.386 14.258a79.626 79.626 0 0 1 1.26 4.509c.179.727.306 1.375.381 1.945h.18c.06-.51.173-1.14.337-1.889.165-.75.357-1.574.574-2.474.217-.9.446-1.814.686-2.743l3.598-13.606h3.8l-6.813 24.648h-4.34Zm36.88-12.324c0 2.024-.262 3.83-.787 5.42-.524 1.589-1.281 2.93-2.27 4.025a9.795 9.795 0 0 1-3.588 2.508c-1.402.577-2.987.865-4.756.865-1.65 0-3.16-.288-4.532-.865a9.99 9.99 0 0 1-3.553-2.508c-.997-1.094-1.769-2.436-2.316-4.025-.547-1.59-.821-3.396-.821-5.42 0-2.699.457-4.996 1.372-6.893.914-1.896 2.222-3.343 3.924-4.34 1.702-.997 3.73-1.496 6.083-1.496 2.25 0 4.217.503 5.904 1.507 1.686 1.005 2.998 2.455 3.935 4.352.937 1.896 1.406 4.186 1.406 6.87Zm-18.755 0c0 1.979.262 3.695.787 5.15.525 1.454 1.334 2.578 2.429 3.373 1.094.795 2.504 1.192 4.228 1.192 1.709 0 3.114-.397 4.216-1.192 1.102-.795 1.916-1.919 2.44-3.373.525-1.455.788-3.171.788-5.15 0-1.964-.263-3.662-.788-5.094-.524-1.432-1.334-2.537-2.428-3.317-1.095-.78-2.512-1.17-4.25-1.17-2.564 0-4.442.848-5.634 2.542-1.192 1.694-1.788 4.04-1.788 7.039Zm36.41-12.729c.494 0 1.011.027 1.55.079.54.053 1.02.124 1.44.214l-.472 3.463a10.366 10.366 0 0 0-1.35-.247c-.494-.06-.959-.09-1.394-.09-.99 0-1.923.198-2.8.596a6.829 6.829 0 0 0-2.305 1.709c-.66.742-1.177 1.634-1.551 2.676-.375 1.042-.563 2.2-.563 3.474v13.224h-3.755v-24.648h3.103l.405 4.543h.157c.51-.915 1.125-1.75 1.844-2.508a8.349 8.349 0 0 1 2.508-1.81c.952-.45 2.013-.675 3.182-.675Zm11.333-9.895v18.171c0 .6-.022 1.33-.067 2.193-.045.862-.083 1.623-.113 2.282h.158c.315-.39.776-.967 1.383-1.731a39.29 39.29 0 0 1 1.54-1.844l8.186-8.726h4.386l-9.918 10.525 10.637 14.123h-4.498l-8.703-11.672-2.99 2.744v8.928h-3.711v-34.993h3.71Zm18.868 26.222 17.609-7.444-17.609-8.343v-3.328l21.634 10.704v2.137l-21.634 9.58v-3.306Z"
        />
        <RectStroke
          width="287.157"
          height="187.368"
          x="81.091"
          y="52.583"
          className="stroke-foreground"
          stroke-width="3"
          rx="20"
        />
      </g>
    </svg>
  );
};

export default BlueprintLaptop;
