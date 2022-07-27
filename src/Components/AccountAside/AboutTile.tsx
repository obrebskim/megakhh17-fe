import React from "react";
import styled from "styled-components";

const Container = styled.div`
  & h3 {
    color: var(--tirnaryFontColor);
  }
`;

function AboutTile() {
  return (
    <Container>
      <h3>O mnie</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum deserunt
        est et illum non possimus quae totam voluptatibus? Assumenda
        consequuntur facere fugit laboriosam laborum minus nemo nobis pariatur
        quibusdam similique!
      </p>
    </Container>
  );
}

export default AboutTile;
