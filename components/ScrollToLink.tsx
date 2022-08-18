import styled from "@emotion/styled";
import React from "react";

interface IProps {
  elementId: string;
  children: React.ReactNode;
}

const LinkElement = styled.a`
  display: block;
  cursor: pointer;
`;

const ScrollToLink = ({ elementId, children }: IProps) => {
  return (
    <LinkElement
      onClick={() =>
        window.scrollTo({
          behavior: "smooth",
          top: document.getElementById(elementId).offsetTop - 200,
        })
      }
    >
      {children}
    </LinkElement>
  );
};

export default ScrollToLink;
