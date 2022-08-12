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
    fill: #fff;
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

const RectStroke = styled.rect`
  ${sharedSvgAnimationStyles}

  animation: ${strokeAnimation} 3s both ease-in-out;
`;

interface IProps {
  height: number;
}

const BlueprintBook = ({ height }: IProps) => {
  return (
    <Wrapper
      h={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 159 204"
    >
      <g fill="none" fillRule="evenodd">
        <RectGray2
          width="149"
          height="194"
          x="10"
          y="10"
          fill="#DFDFDF"
          rx="15"
        />
        <RectGray1
          width="149"
          height="194"
          x="5"
          y="5"
          fill="#EFEFEF"
          rx="15"
        />
        <RectWhite width="149" height="194" fill="#FFF" rx="15" />
        <rect width="22" height="194" x="0" y="0" rx="11" fill="#F5CD79" />
        <rect
          width="17"
          height="189"
          x="2.5"
          y="2.5"
          stroke="#FFF"
          strokeWidth="5"
          rx="8.5"
        />
        <PathBackground
          fill="#F5CD79"
          d="M53.01 48h-2.447V25.207h2.447V48Zm11.308-16.348c1.368 0 2.54.303 3.516.909.977.605 1.724 1.452 2.241 2.541.518 1.089.777 2.36.777 3.816v1.509h-11.09c.03 1.885.499 3.32 1.407 4.306.908.987 2.187 1.48 3.838 1.48 1.015 0 1.914-.093 2.695-.278a14.862 14.862 0 0 0 2.432-.82v2.138c-.81.361-1.614.625-2.41.79-.796.167-1.736.25-2.82.25-1.543 0-2.888-.315-4.035-.945-1.148-.63-2.039-1.555-2.674-2.776-.634-1.22-.952-2.715-.952-4.482 0-1.729.29-3.225.872-4.49.58-1.265 1.401-2.239 2.46-2.922 1.06-.684 2.308-1.026 3.743-1.026Zm-.029 1.993c-1.299 0-2.334.424-3.105 1.274-.772.85-1.23 2.036-1.377 3.56h8.496c-.01-.958-.159-1.8-.447-2.527-.288-.728-.725-1.294-1.311-1.7-.586-.405-1.338-.607-2.256-.607Zm16.7-1.963c1.913 0 3.334.43 4.262 1.289.928.86 1.392 2.231 1.392 4.116V48H84.87l-.469-2.373h-.117a8.662 8.662 0 0 1-1.406 1.472 5.058 5.058 0 0 1-1.692.894c-.64.2-1.423.3-2.351.3-.977 0-1.843-.17-2.6-.513a4.008 4.008 0 0 1-1.787-1.552c-.435-.694-.652-1.573-.652-2.637 0-1.602.635-2.832 1.904-3.692 1.27-.859 3.203-1.328 5.801-1.406l2.769-.117v-.981c0-1.387-.298-2.359-.894-2.916-.596-.556-1.436-.834-2.52-.834-.84 0-1.64.122-2.402.366a16.43 16.43 0 0 0-2.168.864l-.747-1.846a13.386 13.386 0 0 1 2.49-.952 10.88 10.88 0 0 1 2.96-.395Zm3.251 8.408-2.446.102c-2.002.079-3.413.406-4.233.982-.82.576-1.23 1.391-1.23 2.446 0 .918.277 1.597.834 2.036.557.44 1.294.66 2.212.66 1.426 0 2.593-.396 3.5-1.187.91-.791 1.363-1.978 1.363-3.56v-1.48Zm14.707-8.438c.323 0 .66.017 1.011.052.352.034.664.08.938.139l-.308 2.256a6.752 6.752 0 0 0-.879-.161 7.569 7.569 0 0 0-.908-.06 4.35 4.35 0 0 0-1.824.39 4.448 4.448 0 0 0-1.501 1.112 5.28 5.28 0 0 0-1.011 1.744c-.244.678-.366 1.433-.366 2.263V48h-2.447V31.945h2.022l.263 2.96h.103a8.05 8.05 0 0 1 1.201-1.634 5.438 5.438 0 0 1 1.634-1.18c.62-.292 1.31-.439 2.072-.439Zm12.569 0c1.904 0 3.344.467 4.32 1.4.977.932 1.466 2.428 1.466 4.489V48h-2.403V37.702c0-1.338-.305-2.339-.915-3.003-.61-.664-1.546-.996-2.805-.996-1.778 0-3.028.503-3.75 1.509-.723 1.006-1.084 2.466-1.084 4.38V48h-2.432V31.945h1.963l.366 2.315h.132a4.864 4.864 0 0 1 1.304-1.428 5.901 5.901 0 0 1 1.772-.88 7.02 7.02 0 0 1 2.066-.3Z"
        />
        <PathStrokeBackground
          stroke="#F5CD79"
          strokeWidth="3"
          d="M36 67v5h10V62H31v15h105v15h-15V82h10v5"
        />
      </g>
    </Wrapper>
  );
};

export default BlueprintBook;
