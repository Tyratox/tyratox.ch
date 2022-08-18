import styled from "@emotion/styled";
import React from "react";

import { Border } from "../../styles/borders";
import Box from "../Box";

const ProjectBoxWrapper = styled(Box)`
  padding: 1rem;

  a {
    display: block;
    background-color: var(--foreground-color);
    border-radius: ${Border.radius};
    padding: 1rem;

    color: var(--background-color);
    text-decoration: none;
  }
`;

const Title = styled.h2`
  font-size: var(--font-size-large);
  text-align: center;
  font-weight: normal;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  margin: 0;
`;

const Subtitle = styled.h3`
  text-align: center;
  font-weight: normal;
  font-size: 1.25rem;
  margin: 0;

  &::before {
    content: "(";
  }

  &::after {
    content: ")";
  }
`;

interface IProps {
  title: string;
  subtitle: string;

  href: string;
}

const ProjectBox = ({ title, subtitle, href }: IProps) => {
  return (
    <ProjectBoxWrapper widths={[1, 1 / 2, 1 / 2, 1 / 2, 1 / 3]}>
      <a href={href} target="_blank" rel="noreferrer" title={title}>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </a>
    </ProjectBoxWrapper>
  );
};

export default ProjectBox;
