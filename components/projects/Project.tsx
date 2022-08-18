import styled from "@emotion/styled";
import React from "react";

import { MediaQuery } from "../../styles/media";

interface IProps {
  mirrored?: boolean;
  children?: React.ReactNode;
}

const PWrapper = styled.div`
  font-size: 1.5rem;

  margin-top: 1rem;

  h2:first-of-type,
  p:first-of-type {
    margin-top: 0;
  }
`;

const ProjectWrapper = styled(PWrapper)`
  ${MediaQuery.minSmall} {
    margin-right: 4rem;
    margin-top: 0rem;
  }
`;

const MirroredProjectWrapper = styled(PWrapper)`
  ${MediaQuery.minSmall} {
    margin-left: 2rem;
    margin-top: 0rem;
  }

  ${MediaQuery.minMedium} {
    margin-left: 3rem;
    margin-top: 0rem;
  }
`;

const Project = ({ mirrored, children }: IProps) => {
  const Wrapper = mirrored ? MirroredProjectWrapper : ProjectWrapper;

  return <Wrapper>{children}</Wrapper>;
};

export default Project;
