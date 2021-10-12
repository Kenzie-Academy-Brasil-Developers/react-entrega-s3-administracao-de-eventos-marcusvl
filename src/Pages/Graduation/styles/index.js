import styled from "styled-components";
import graduationImage from "../../../images/graduation.jpg";

export const ContainerEvent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  color: #2e3b55;
`;

export const GraduationImage = styled.div`
  background-image: url(${graduationImage});
  background-size: cover;
  background-position: center;
  width: 100vw;
  color: #000080;
  font-family: "Ephesis";
  font-size: 40px;
  position: relative;
  z-index: 0;
  padding: 25px 0 50px 0;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`;

export const RemoveButton = styled.button`
  width: 150px;
  border-radius: 0 0 5px 5px;
  border: none;
  background-color: #dc143c;
  color: #fff;
  height: 30px;
  font-weight: bold;
`;
