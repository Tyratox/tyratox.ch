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

const sharedSvgAnimationStyles = css`
  fill: rgba(255, 255, 255, 0);
  stroke: var(--foreground-color);
  stroke-dasharray: 1500;
  stroke-dashoffset: 1500;
  stroke-linecap: square;
  stroke-linejoin: miter;
`;

const Path = styled.path`
  ${sharedSvgAnimationStyles}
  stroke-width: 2px;

  animation: ${strokeAnimation} 3s both ease-in-out,
    ${fillAnimationWhite} 0.5s 1s both ease-in-out;
`;

const PathBackground = styled.path`
  ${sharedSvgAnimationStyles}
  stroke: var(--background-color);
  stroke-width: 0.5px;

  animation: ${strokeAnimation} 3s 1s both ease-in-out,
    ${fillAnimationBackground} 0.5s 1.5s both ease-in-out;
`;

const BlueprintContact = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
      <g fill="none" fillRule="evenodd">
        <Path
          className="fill-foreground"
          d="M83.427 51.004C83.427 42.717 90.15 36 98.435 36h166.97c8.29 0 15.009 6.708 15.009 15.004v92.729c0 8.286-6.724 15.003-15.008 15.003H83.426V51.004Zm0 107.732h30.877L68 207.593l15.427-48.857Zm233.146 48.675c0-8.286-6.723-15.004-15.008-15.004h-166.97c-8.29 0-15.009 6.708-15.009 15.004v92.729c0 8.286 6.724 15.004 15.008 15.004h181.98V207.41Zm0 107.733h-30.877L332 364l-15.427-48.856Z"
        />
        <PathBackground
          className="fill-background"
          d="M115.026 112.37c-2.193 0-4.127-.451-5.801-1.356-1.674-.905-2.978-2.284-3.912-4.137-.933-1.854-1.4-4.19-1.4-7.007 0-2.951.493-5.365 1.478-7.24.985-1.877 2.345-3.267 4.078-4.171 1.734-.905 3.704-1.357 5.912-1.357 1.215 0 2.39.122 3.523.367 1.133.244 2.063.552 2.79.923l-1.112 3.092a19.242 19.242 0 0 0-2.567-.801c-.97-.237-1.878-.356-2.723-.356-1.689 0-3.093.363-4.211 1.09-1.12.727-1.956 1.794-2.512 3.203-.555 1.409-.833 3.144-.833 5.205 0 1.973.27 3.656.81 5.05.542 1.394 1.35 2.458 2.423 3.192 1.075.734 2.42 1.1 4.034 1.1 1.29 0 2.453-.136 3.49-.41a19.317 19.317 0 0 0 2.822-.968v3.292c-.815.415-1.722.734-2.722.956-1 .223-2.19.334-3.567.334Zm33.048-12.678c0 2.002-.259 3.789-.777 5.36-.519 1.572-1.267 2.9-2.245 3.982a9.68 9.68 0 0 1-3.545 2.48c-1.385.571-2.952.857-4.7.857-1.63 0-3.123-.286-4.48-.857a9.873 9.873 0 0 1-3.51-2.48c-.986-1.082-1.749-2.41-2.29-3.981-.54-1.572-.811-3.36-.811-5.361 0-2.67.452-4.942 1.356-6.818.903-1.876 2.196-3.307 3.878-4.293 1.682-.986 3.686-1.48 6.012-1.48 2.222 0 4.167.497 5.834 1.491 1.667.994 2.963 2.428 3.89 4.304.925 1.876 1.388 4.141 1.388 6.796Zm-18.535 0c0 1.957.259 3.655.778 5.094.518 1.438 1.318 2.55 2.4 3.336 1.081.786 2.474 1.18 4.178 1.18 1.69 0 3.078-.394 4.167-1.18 1.09-.786 1.893-1.898 2.412-3.336.518-1.439.778-3.137.778-5.094 0-1.943-.26-3.622-.778-5.038-.519-1.417-1.319-2.51-2.4-3.281-1.082-.772-2.482-1.157-4.201-1.157-2.534 0-4.39.838-5.567 2.513-1.178 1.676-1.767 3.997-1.767 6.963Zm36.449-12.59c2.89 0 5.075.708 6.556 2.124 1.482 1.416 2.223 3.689 2.223 6.818v15.882h-3.645V96.288c0-2.031-.463-3.551-1.389-4.56-.926-1.008-2.345-1.512-4.256-1.512-2.697 0-4.593.764-5.69 2.291-1.096 1.527-1.644 3.744-1.644 6.65v12.769h-3.69v-24.38h2.978l.556 3.515h.2a7.384 7.384 0 0 1 1.978-2.169 8.95 8.95 0 0 1 2.69-1.334 10.643 10.643 0 0 1 3.133-.456Zm24.248 22.244c.607 0 1.23-.052 1.867-.156.637-.104 1.155-.23 1.555-.378v2.87c-.43.192-1.026.355-1.789.489-.763.133-1.507.2-2.233.2-1.29 0-2.46-.226-3.512-.679-1.052-.452-1.893-1.22-2.523-2.302-.63-1.082-.944-2.58-.944-4.493V90.438h-3.467v-1.801l3.49-1.446 1.466-5.294h2.223v5.65h7.134v2.891h-7.134v14.348c0 1.527.351 2.669 1.055 3.425.704.756 1.641 1.135 2.812 1.135Zm17.469-22.2c2.904 0 5.06.653 6.467 1.958 1.408 1.305 2.112 3.388 2.112 6.25v16.572h-2.69l-.71-3.604h-.179c-.681.89-1.392 1.635-2.133 2.236a7.672 7.672 0 0 1-2.567 1.357c-.97.304-2.16.456-3.567.456-1.482 0-2.797-.26-3.945-.779a6.083 6.083 0 0 1-2.712-2.358c-.66-1.052-.989-2.387-.989-4.003 0-2.433.963-4.301 2.89-5.606 1.926-1.305 4.86-2.017 8.8-2.135l4.201-.178v-1.49c0-2.106-.452-3.582-1.356-4.427-.903-.845-2.178-1.268-3.822-1.268-1.275 0-2.49.185-3.645.556-1.156.37-2.252.808-3.29 1.312l-1.133-2.802c1.096-.564 2.356-1.046 3.778-1.446 1.423-.4 2.92-.6 4.49-.6Zm4.934 12.768-3.712.156c-3.037.119-5.178.615-6.423 1.49s-1.867 2.113-1.867 3.715c0 1.394.422 2.425 1.267 3.092.845.667 1.963 1 3.356 1 2.163 0 3.934-.6 5.312-1.8 1.378-1.202 2.067-3.004 2.067-5.406v-2.247Zm21.003 12.457c-2.193 0-4.127-.452-5.801-1.357-1.675-.905-2.978-2.284-3.912-4.137-.933-1.854-1.4-4.19-1.4-7.007 0-2.951.493-5.365 1.478-7.24.985-1.877 2.345-3.267 4.078-4.171 1.734-.905 3.704-1.357 5.912-1.357 1.215 0 2.39.122 3.523.367 1.133.244 2.063.552 2.79.923l-1.112 3.092a19.242 19.242 0 0 0-2.567-.801c-.97-.237-1.878-.356-2.723-.356-1.689 0-3.093.363-4.211 1.09-1.12.727-1.956 1.794-2.512 3.203-.555 1.409-.833 3.144-.833 5.205 0 1.973.27 3.656.81 5.05.542 1.394 1.35 2.458 2.423 3.192 1.075.734 2.42 1.1 4.034 1.1 1.29 0 2.453-.136 3.49-.41a19.317 19.317 0 0 0 2.822-.968v3.292c-.815.415-1.722.734-2.722.956-1 .223-2.19.334-3.567.334Zm19.913-3.025c.608 0 1.23-.052 1.867-.156.637-.104 1.156-.23 1.556-.378v2.87c-.43.192-1.026.355-1.79.489-.762.133-1.507.2-2.233.2-1.289 0-2.46-.226-3.511-.679-1.052-.452-1.893-1.22-2.523-2.302-.63-1.082-.944-2.58-.944-4.493V90.438h-3.468v-1.801L246 87.19l1.467-5.294h2.222v5.65h7.134v2.891h-7.134v14.348c0 1.527.352 2.669 1.056 3.425.704.756 1.64 1.135 2.811 1.135ZM192.713 266.02c0-1.038.252-1.776.756-2.213.504-.438 1.118-.657 1.844-.657.756 0 1.393.22 1.912.657.518.437.778 1.175.778 2.213 0 1.023-.26 1.768-.778 2.235-.519.468-1.156.701-1.912.701-.726 0-1.34-.233-1.844-.7-.504-.468-.756-1.213-.756-2.236Zm11.957 0c0-1.038.252-1.776.756-2.213.504-.438 1.119-.657 1.845-.657.755 0 1.392.22 1.911.657.519.437.778 1.175.778 2.213 0 1.023-.26 1.768-.778 2.235-.519.468-1.156.701-1.911.701-.726 0-1.341-.233-1.845-.7-.504-.468-.756-1.213-.756-2.236Zm11.957 0c0-1.038.252-1.776.756-2.213.504-.438 1.119-.657 1.845-.657.755 0 1.393.22 1.911.657.519.437.778 1.175.778 2.213 0 1.023-.26 1.768-.778 2.235-.518.468-1.156.701-1.911.701-.726 0-1.341-.233-1.845-.7-.504-.468-.756-1.213-.756-2.236Z"
        />
      </g>
    </svg>
  );
};

export default BlueprintContact;