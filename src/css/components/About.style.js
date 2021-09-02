import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  margin-top: 50px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const AboutPanel = styled.div`
  padding-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
`;

export const PG = styled.p`
  box-shadow: -11.09px 18.13px 36.6483px rgb(242 153 74 / 23%);
`;

export const AboutCard = styled.div`
  max-width: 400px;
  width: 100%;
  overflow: hidden;
  height: auto;
  padding: 15px;
  margin: 10px 0;
  position: relative;
  text-align: center;
  flex-direction: column;
  align-items: center;
  display: flex;
`;

export const AboutHeader = styled.header`
  padding-bottom: 20px;
  align-items: center;
  display: flex;
  font-size: 36px;
  align-items: center;
  span {
    padding-left: 15px;
    font-family: "Inter", sans-serif;
    line-height: 22px;
    color: #99efd0;
  }
`;

export const AboutP = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  line-height: 22px;
  color: #8476aa;
  max-width: 230px;
  text-align: center;
`;

export const Header = styled.header`
  word-break: normal;
`;

export const P = styled.p`
  max-width: 700px;
  margin-bottom: 20px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  letter-spacing: 0.33px;
  color: #99efd0;
`;

export const Span = styled.span`
  color: #f2994a;
`;

export const Desc = styled.span`
  max-width: 500px;
  color: #8476aa;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.2px;
`;

export const Right = styled.div`
  position: absolute;
  left: 0;
  transform: rotate(-120deg);
  @media screen and (min-width: 910px) {
    left: 100px;
    z-index: 2;
    transform: rotate(-120deg) scale(1.5);
  }

  @media screen and (max-width: 910px) {
    svg {
      width: 58vw;
      height: 100%;
    }
  }
`;

export const IMG = styled.img`
  width: 100%;
  height: 100%;
  top: -80px;
  z-index: -1;
  position: relative;
`;

export const Starter = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
