import React from "react";
import styled from "styled-components";
import PlaceholderDiv from "../PlaceholderDiv/PlaceholderDiv";

const Component = styled.div`
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: var(--primaryDark);
  & button {
    height: 30px;
    width: 30px;
  }
`;
interface PropsTypes {
  pageNo: number;
  allPages: number;
  changePage: React.Dispatch<number>;
  changePerPage: React.Dispatch<number>;
}
function Pagination({
  pageNo,
  allPages,
  changePerPage,
  changePage,
}: PropsTypes) {
  return (
    <Component>
      <PlaceholderDiv />
      <p>ilość studentów</p>
      <select
        name="amount"
        id="amount"
        onChange={(e) => changePerPage(Number(e.target.value))}
      >
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>20</option>
      </select>
      <p>{`${pageNo} z ${allPages}`}</p>
      <button
        type="button"
        disabled={pageNo >= allPages}
        onClick={() => changePage(pageNo + 1)}
      >
        +
      </button>
      <button
        type="button"
        disabled={pageNo <= 1}
        onClick={() => changePage(pageNo + 1)}
      >
        -
      </button>
    </Component>
  );
}

export default Pagination;
