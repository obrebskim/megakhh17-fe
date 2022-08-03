import React from "react";
import styled from "styled-components";
import clipIco from "../../Assets/img/clip.svg";

const Container = styled.ul`
  list-style: none;
  padding: 10px;
  & a {
    display: flex;
    gap: 10px;
    padding: 10px;
    color: var(--anchorColor);
    text-decoration: none;
  }
  & img {
    width: 15px;
  }
`;

interface PropsTypes {
  links: string[];
}

function LinksTile({ links }: PropsTypes) {
  return (
    <Container>
      {links.map((l) => (
        <li key={l}>
          <a href={l}>
            <img src={clipIco} alt="" />
            {l}
          </a>
        </li>
      ))}
    </Container>
  );
}

export default LinksTile;
