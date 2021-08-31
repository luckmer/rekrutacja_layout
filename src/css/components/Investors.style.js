import styled from "styled-components";

export const Main = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }
  padding-bottom: 50px;
`;
export const Right = styled.div`
  position: absolute;
  left: 0;
  z-index: -1;

  @media screen and (min-width: 910px) {
    width: 300px;
    height: 100%;
  }

  @media screen and (max-width: 910px) {
    width: 30%;
    height: 100%;
  }

  img {
    opacity: 0.1;
  }
`;
export const Left = styled.div`
  position: absolute;
  right: 0;
  width: 300px;
  z-index: -1;

  @media screen and (min-width: 910px) {
    width: 300px;
    height: 100%;
  }

  @media screen and (max-width: 910px) {
    width: 30%;
    height: 100%;
  }

  img {
    opacity: 0.1;
  }
`;
