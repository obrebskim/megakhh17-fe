import React from "react";
import styled, { keyframes } from "styled-components";
import PlaceholderDiv from "../PlaceholderDiv/PlaceholderDiv";

const ldsRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    animation: ${ldsRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-width: 8px;
    border-style: solid;
    border-color: var(--buttonColor) transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

function LoadingSpinner() {
  return (
    <Container>
      <div className="lds-ring">
        <PlaceholderDiv />
        <PlaceholderDiv />
        <PlaceholderDiv />
        <PlaceholderDiv />
      </div>
    </Container>
  );
}

export default LoadingSpinner;
