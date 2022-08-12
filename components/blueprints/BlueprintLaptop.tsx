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
    fill: rgba(255,255,255,1);
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

interface IProps {
  height: number;
}

const BlueprintLaptop = ({ height }: IProps) => {
  return (
    <Wrapper
      h={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 226 194"
    >
      <g fill="none" fillRule="evenodd" transform="translate(-1)">
        <g transform="translate(0 121)">
          <Rect width="147" height="4" x="48" y="15" fill="#FFF" rx="2" />
          <Rect width="147" height="4" x="38" y="27" fill="#FFF" rx="2" />
          <Rect width="147" height="4" x="28" y="39" fill="#FFF" rx="2" />
          <Rect width="40" height="4" x="127" y="51" fill="#FFF" rx="2" />
          <Rect width="40" height="4" x="18" y="51" fill="#FFF" rx="2" />
          <Rect width="40" height="4" x="70" y="51" fill="#FFF" rx="2" />
          <PathStroke
            stroke="#FFF"
            strokeWidth="3"
            d="M28.786 17.812C34.306 8.852 47.477 1.5 58.003 1.5h148.994c9.875 0 13.415 6.333 8.235 14.738l-23.975 38.909c-5.52 8.959-18.691 16.311-29.217 16.311H13.046C3.17 71.458-.37 65.126 4.81 56.72l23.975-38.908Z"
          />
        </g>
        <Rect width="176" height="112" x="45" y="6" fill="#FFF" rx="15" />
        <path
          fill="#F5CD79"
          d="M94.6 68.44 80.51 62.2v-1.39l14.09-6.974v2.168l-11.455 5.405L94.6 66.287v2.153Zm17.183 3.53-2.856-9.345a52.86 52.86 0 0 1-.36-1.18 40.325 40.325 0 0 1-.307-1.112 49.387 49.387 0 0 1-.432-1.795h-.102c-.04.225-.093.49-.162.798-.068.308-.148.643-.241 1.004s-.193.74-.3 1.135c-.108.396-.23.794-.367 1.194l-2.988 9.302h-2.74l-4.423-16.055h2.52l2.314 8.862c.156.586.305 1.165.447 1.736.141.571.263 1.109.366 1.611.102.503.178.94.227 1.312h.117c.059-.245.125-.538.198-.88.073-.341.156-.705.249-1.09a33.606 33.606 0 0 1 .622-2.25l2.96-9.301h2.621l2.857 9.287a51.866 51.866 0 0 1 .82 2.937c.117.474.2.896.25 1.267h.116c.04-.332.113-.742.22-1.23.108-.489.232-1.026.374-1.612.141-.586.29-1.181.446-1.787l2.344-8.862h2.476l-4.439 16.055h-2.827Zm24.024-8.027c0 1.319-.171 2.495-.513 3.53-.342 1.036-.835 1.91-1.48 2.623a6.38 6.38 0 0 1-2.336 1.633c-.913.376-1.946.564-3.098.564-1.074 0-2.058-.188-2.952-.564a6.507 6.507 0 0 1-2.314-1.633c-.65-.713-1.153-1.587-1.509-2.622-.356-1.036-.535-2.212-.535-3.53 0-1.758.298-3.255.894-4.49.596-1.236 1.448-2.178 2.556-2.828 1.108-.649 2.43-.974 3.962-.974 1.465 0 2.747.327 3.846.982 1.098.654 1.953 1.599 2.563 2.834.61 1.236.916 2.727.916 4.475Zm-12.217 0c0 1.29.17 2.408.513 3.355.341.947.869 1.68 1.582 2.197.712.518 1.63.776 2.753.776 1.114 0 2.03-.258 2.747-.776.718-.517 1.248-1.25 1.59-2.197.341-.947.512-2.066.512-3.355 0-1.279-.17-2.385-.513-3.318-.341-.932-.869-1.652-1.582-2.16-.713-.508-1.635-.762-2.768-.762-1.67 0-2.893.552-3.67 1.655-.776 1.104-1.164 2.632-1.164 4.585Zm23.716-8.29c.322 0 .659.016 1.01.05.352.035.664.081.938.14l-.308 2.256a6.752 6.752 0 0 0-.879-.161 7.569 7.569 0 0 0-.908-.06c-.644 0-1.252.13-1.824.39a4.448 4.448 0 0 0-1.501 1.112 5.28 5.28 0 0 0-1.01 1.744c-.245.678-.367 1.433-.367 2.263V72h-2.446V55.945h2.021l.264 2.96h.102a8.05 8.05 0 0 1 1.202-1.634 5.438 5.438 0 0 1 1.633-1.18c.62-.292 1.31-.439 2.073-.439Zm7.382-6.446v11.836c0 .39-.014.867-.043 1.428-.03.562-.054 1.057-.074 1.487h.103c.205-.254.505-.63.9-1.128.396-.498.73-.898 1.004-1.201l5.332-5.684h2.857l-6.46 6.856L165.235 72h-2.93l-5.668-7.603-1.949 1.788V72h-2.417V49.207h2.417Zm12.29 17.08 11.47-4.849-11.47-5.434v-2.168l14.092 6.973V62.2l-14.091 6.24v-2.153Z"
        />
        <RectStroke
          width="186"
          height="121"
          x="39.5"
          y="1.5"
          stroke="#FFF"
          strokeWidth="3"
          rx="20"
        />
      </g>
    </Wrapper>
  );
};

export default BlueprintLaptop;
