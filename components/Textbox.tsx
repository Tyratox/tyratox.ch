import styled from "@emotion/styled";
import React, { ReactNode } from "react";

import { Border } from "../styles/borders";

const TextboxWrapper = styled.div`
  position: relative;

  background-color: var(--foreground-color);
  border-radius: ${Border.radius};
  padding: 0.5rem 1rem;

  color: var(--background-color);
  text-align: center;
  font-size: 1.25rem;

  z-index: 10;
`;

interface IProps {
  children: ReactNode;
}

const Textbox = ({ children }: IProps) => {
  return <TextboxWrapper>{children}</TextboxWrapper>;
};

export default Textbox;
