import styled from "@emotion/styled";

import { MediaQuery } from "../styles/media";

const b = "display: block";

interface IProps {
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xlg?: boolean;
  up?: boolean;
  down?: boolean;
}

export default styled.div<IProps>`
  height: 100%;
  display: none;
  ${({ sm, md, lg, xlg, up, down }) =>
    up
      ? sm
        ? MediaQuery.minSmall + `{${b}}`
        : md
        ? MediaQuery.minMedium + `{${b}}`
        : lg
        ? MediaQuery.minLarge + `{${b}}`
        : xlg
        ? MediaQuery.minXLarge + `{${b}}`
        : ""
      : down
      ? sm
        ? MediaQuery.maxSmall + `{${b}}`
        : md
        ? MediaQuery.maxMedium + `{${b}}`
        : lg
        ? MediaQuery.maxLarge + `{${b}}`
        : xlg
        ? MediaQuery.maxXLarge + `{${b}}`
        : ""
      : "display: block;"};
`;
