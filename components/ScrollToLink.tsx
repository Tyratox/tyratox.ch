import styled from "@emotion/styled";
import React from "react";

interface IProps {
  elementId: string;
  children: React.ReactNode;
}

const LinkElement = styled.div`
  display: block;
  cursor: pointer;

  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
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
