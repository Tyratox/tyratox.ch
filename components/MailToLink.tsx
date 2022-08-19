import styled from "@emotion/styled";
import React from "react";

interface IProps {
  children: React.ReactNode;
}

const LinkElement = styled.a`
  display: block;
  cursor: pointer;

  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

/**
 * The **most advanced** encryption algorithm, very secure /S
 */
const caesar = (text: string, shift: number) =>
  text
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + shift))
    .join("");

const ENCODED_MAIL = "C;\u0016JOH7JEN\u00049>";

/* the meaning of life universe and everything */
const DECRYPTION_KEY = 42;

const MailToLink = ({ children }: IProps) => {
  return (
    <LinkElement
      onClick={() => {
        window.location.href = `mailto:${caesar(ENCODED_MAIL, DECRYPTION_KEY)}`;
      }}
    >
      {children}
    </LinkElement>
  );
};

export default MailToLink;
