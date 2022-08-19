import styled from "@emotion/styled";

const SocialLink = styled.a`
  display: flex;

  flex-direction: row;
  align-items: center;

  margin-bottom: 2rem;

  text-decoration: none;

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

export default SocialLink;
