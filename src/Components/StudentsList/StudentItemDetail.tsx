import React from "react";
import styled from "styled-components";
import DetailItem from "./DetailItem";

const Container = styled.div`
  height: 110px;
  display: grid;
  grid-template-columns: repeat(10, auto);
  gap: 4px;
  background-color: var(--secondaryDark);
`;

function StudentItemDetail() {
  return (
    <Container>
      <DetailItem title="Ocena przejścia kursu" content="5/5" />
      <DetailItem
        title="Ocena aktywności i zaangażowania na kursie"
        content="5/5"
      />
      <DetailItem title="Ocena kodu w projekcie własnym" content="5/5" />
      <DetailItem title="Ocena pracy w zespole w Scrum" content="5/5" />
      <DetailItem title="Preferowane miejsce pracy" content="Hybrydowo" />
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
  );
}

export default StudentItemDetail;
