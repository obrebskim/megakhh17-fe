import React from "react";
import styled from "styled-components";
import DetailItem from "../StudentsList/DetailItem";

const Container = styled.div`
  height: 110px;
  display: flex;
  text-align: left;
  grid-template-columns: repeat(10, auto);
  gap: 2px;
  background-color: var(--secondaryDark);
`;

export default function BioWorkPreferences() {
  return (
    <>
      <h3>Oczekiwanie w stosunku do zatrudnienia</h3>
      <Container>
        <DetailItem title="Preferowane miejsce pracy" content="Biuro" />
        <DetailItem
          title="Docelowe Miasto gdzie chce pracować kandydat"
          content="Gdańsk"
        />
        <DetailItem title="Oczekiwany typ kontraktu" content="umowa o pracę" />
        <DetailItem
          title="Oczekiwane wynagrodzenie miesięczne netto"
          content="6000 zł"
        />
        <DetailItem
          title="Zgoda na odbycie bezpłatnych praktyk/stażu na początek"
          content="NIE"
        />
        <DetailItem
          title="Komercyjne doświadczenie w programowaniu"
          content="24 misiące"
        />
      </Container>
    </>
  );
}
