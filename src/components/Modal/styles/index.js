import styled from "styled-components";

export const LargeContainerModal = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerModal = styled.div`
  background-color: #fff;
  width: 60%;
  height: 60%;
  border-radius: 5px;
`;

export const ContentModal = styled.div`
  height: 85%;
  display: flex;
  align-content: center;
  align-items: center;
  padding: 0 0 30px 10px;
  color: #2e3b55;
  justify-content: space-around;
  flex-direction: column;
`;

export const Close = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  right: calc(-100% + 35px);
  top: 16px;
  cursor: pointer;
  display: flex;
  position: relative;
  align-items: center;
  &:before {
    content: " ";
    position: absolute;
    width: 2.5px;
    height: 24px;
    background-color: black;
    transform: rotate(45deg);
  }
  &:after {
    content: " ";
    position: absolute;
    width: 2.5px;
    height: 24px;
    background-color: black;
    transform: rotate(-45deg);
  }
`;
