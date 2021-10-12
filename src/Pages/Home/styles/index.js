import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: grid;
  margin: 50px 0;
  justify-content: center;
  grid-row-gap: 30px;
  row-gap: 30px;
  grid-column-gap: 5px;
  justify-items: center;
  @media (min-width: 800px) {
    grid-template-columns: 20vw 20vw 20vw 20vw;
  }
`;

export const ProductBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  height: 220px;
`;

export const Image = styled.img`
  width: 50px;
  height: 135px;
  padding-top: 10px;
`;

export const BeerName = styled.h3`
  font-size: 10px;
  margin: 0;
  color: #2e3b55;
`;

export const BeerDescription = styled.p`
  margin: 0;
  width: 80px;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  overflow: hidden;
  font-size: 10px;
  color: #2e3b55;
`;

export const ProductButton = styled.button`
  width: 150px;
  border-radius: 0 0 5px 5px;
  border: none;
  background-color: #2e3b55;
  color: #fff;
  height: 30px;
  font-weight: bold;
`;

export const BeerDetails = styled.p`
  font-size: 10px;
  width: 200px;
  color: #2e3b55;
  @media (min-width: 800px) {
    width: 500px;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const ModalButton = styled.button`
  width: 150px;
  border-radius: 5px;
  border: none;
  background-color: #2e3b55;
  color: #fff;
  height: 40px;
  margin: 5px;
  @media (min-width: 800px) {
    margin: 0;
  }
`;
