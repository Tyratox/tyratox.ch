import styled from "@emotion/styled";

import { MediaQuery } from "../styles/media";

const Container = styled.div`
  position: relative;
  margin: 0 auto;

  height: 100%;

  ${MediaQuery.minSmall} {
    max-width: 576px;
  }
  ${MediaQuery.minMedium} {
    max-width: 720px;
  }
  ${MediaQuery.minLarge} {
    max-width: 940px;
  }
  ${MediaQuery.minXLarge} {
    max-width: 1140px;
  }
`;

export default Container;
