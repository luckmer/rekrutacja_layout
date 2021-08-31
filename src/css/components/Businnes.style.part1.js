import map from "../../img/map.png";
import rectangle from "../../img/Rectangle.png";
import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
`;

export const Rotor = styled.div`
  width: 100%;
  height: auto;
  display: flex;

  div {
    width: 100%;
  }
  @media screen and (max-width: 840px) {
    flex-direction: column;
  }
`;
export const Map = styled.div`
  min-height: 500px;
  background-repeat: no-repeat;
  background-position: 50% center;
  background-size: auto;
  background-image: url(${map});
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 840px) {
    flex-direction: column;
  }
`;
export const IMG = styled.div`
  background-repeat: no-repeat;
  background-size: 100%;
  background-image: url(${rectangle});
  border-radius: 9px;
  min-height: 200px;
  img {
    position: relative;
  }

  @media screen and (min-width: 910px) {
    img {
      top: 80px;
      right: 70px;
    }
  }

  @media screen and (max-width: 910px) {
    img {
      top: -30px;
      right: 20px;
    }
  }
`;

export const MaxSizer = styled.div`
  max-width: 200px;
  width: 100%;
  padding-top: 50px;
`;

export const Card = styled.div`
  max-width: 260px;
  height: 414px;
  width: 100%;
  background: #ffffff;
  box-shadow: -8px 16px 60px rgba(82, 114, 139, 0.24);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const Max = styled.div`
  padding: ${({ status }) => (status ? "20px 15px 20px 15px" : "")};
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const P = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #212b36;
`;

export const Span = styled.span`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 14px;
  letter-spacing: 0.5px;
  color: #637381;
`;

export const Header = styled.header`
  padding-bottom: 10px;
`;

export const FootData = styled.div`
  display: flex;
  border-top: 1px solid #d6dbdf;
  padding-top: 15px;
`;

export const Values = styled.div`
  p {
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    line-height: 29px;
    color: #13c296;
  }

  span {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    font-size: 10px;
    line-height: 14px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #98a4af;
  }
`;
export const BackCard = styled.div`
  max-width: 130px;
  max-height: 65px;
  background-color: #516ea9;
  box-shadow: -8px 16px 60px rgb(82 114 139 / 24%);
  padding: 15px;
  text-align: left;
  position: relative;

  p,
  span {
    font-family: "Open Sans", sans-serif;
    font-weight: 500;
    line-height: 20px;
    color: #ffffff;
    letter-spacing: 0.5px;
  }

  p {
    font-size: 16px;
  }

  span {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    font-size: 10px;
    line-height: 14px;
  }

  @media screen and (min-width: 910px) {
    z-index: -1;
    top: -100px;
    left: 250px;
    border-radius: 0 10px 10px 0;
  }

  @media screen and (max-width: 910px) {
    border-radius: 10px;
    left: 10px;
  }
`;
