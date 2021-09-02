import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const P = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 50px;
  text-align: center;
  color: #99efd0;
`;
export const Span = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #8476aa;
`;
export const OfferPanel = styled.div`
  padding-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
`;
export const OfferCard = styled.div`
  max-width: ${({ size }) => `${size}px`};
  width: 100%;
  overflow: hidden;
  height: auto;
  padding: 15px;
  margin: 10px 0;
  position: relative;
`;
export const OfferHeader = styled.header`
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  span {
    padding-left: ${({ status }) => (status ? "15px" : "")};
    font-family: "Inter", sans-serif;
    font-size: 16px;
    line-height: 22px;
    color: #99efd0;
  }
`;
export const OfferP = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  line-height: 22px;
  color: #8476aa;
`;
export const DivSpacer = styled.div`
  @media screen and (max-width: 910px) {
    padding: 10px;
  }
`;

export const Img = styled.div`
  padding-bottom: 10px;
`;
