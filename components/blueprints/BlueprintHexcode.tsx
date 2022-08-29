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

const Path = styled.path`
  fill: rgba(255, 255, 255, 0);
  stroke: var(--foreground-color);
  stroke-dasharray: 1500;
  stroke-dashoffset: 1500;
  stroke-linecap: square;
  stroke-linejoin: miter;
  stroke-width: 2px;
`;

const Svg = styled.svg`
  &.in-view .path {
    animation: ${strokeAnimation} 3s both ease-in-out,
      ${fillAnimationWhite} 0.5s 2.5s both ease-in-out;
  }
`;

const BlueprintHexcode = () => {
  const ref = React.createRef<SVGSVGElement>();
  const inView = useInView(ref);

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 253 349"
      width="253"
      height="349"
      ref={ref}
      className={inView ? "in-view" : ""}
    >
      <g className="fill-foreground">
        <Path
          className="path"
          d="M148.554 296.991h-8.257v16.4h81.574v-16.4h-8.257"
        />
        <Path
          className="path"
          d="M230.128 219.094h8.256v-16.399h-16.253V79.728c0-38.493-31.42-69.698-70.179-69.698l-.001-.001h-3.971V10h-8.257v192.695h-28.984V42.799h-82.07v159.895H12.156v16.399h16.513v8.199H12.156v8.2h16.513v8.2c0 38.492 31.42 69.697 70.179 69.697v.001l4.128-.001h7.761v-77.898h28.984v45.099h8.1v.03h74.308v-45.129h16.253v-8.2h-16.253v-8.199h7.999v.002ZM94.722 305.057c-32.275-2.109-57.795-28.777-57.795-61.363v-8.2h57.795v69.563Zm0-77.764H36.927v-8.199h57.795v8.199Zm0-24.599H36.927V50.999h57.795v151.695Zm45.002 24.599H110.74v-8.199h28.984v8.199Zm74.151 45.129h-57.796v-36.929h57.796v36.929Zm0-45.129h-57.796v-8.199h57.796v8.199Zm0-24.599h-57.796V18.364c32.274 2.11 57.796 28.777 57.796 61.364v122.966Z"
        />
      </g>
    </Svg>
  );
};

export default BlueprintHexcode;
