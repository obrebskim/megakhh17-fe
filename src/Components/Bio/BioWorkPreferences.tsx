import React from "react";
import styled from "styled-components";
import DetailItem from "../StudentsList/DetailItem";

const Container = styled.div`
  height: 110px;
  display: flex;
`;

const Title = styled.h3`
  height: 60px;
  text-align: left;
  padding: 15px;
  background-color: var(--secondaryDark);
`;

export default function BioWorkPreferences() {
  return (
    <>
      <Title>Oczekiwanie w stosunku do zatrudnienia</Title>
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
