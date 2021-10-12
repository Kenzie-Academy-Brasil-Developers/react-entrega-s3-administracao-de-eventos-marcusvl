import styled from "styled-components";
import weddingImage from "../../../images/wedding.jpg";

export const WeddingImage = styled.div`
  background-image: url(${weddingImage});
  background-size: cover;
  background-position: center;
  width: 100vw;
  color: #fff;
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
