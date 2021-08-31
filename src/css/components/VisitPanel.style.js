import styled from "styled-components";

export const Section = styled.section`
  @media screen and (min-width: 910px) {
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
  }

  @media screen and (max-width: 910px) {
    flex-direction: column;
    padding: 0 10px 0 10px;
  }
`;

export const Spacer = styled.div`
  padding-top: 100px;
  height: auto;
  width: 100%;
`;

export const P = styled.p`
  color: ${({ Color }) => Color};
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 20px;
  font-size: ${({ set }) => (set ? "44px" : "18px")};
  line-height: ${({ set }) => (set ? "50px" : "30px")};
  word-break: normal;
`;

export const Img = styled.img`
  width: 100%;
`;

export const BottomPanel = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  padding-top: 60px;
`;

export const PBottom = styled.p`
  font-family: "Inter", sans-serif;
  color: #8476aa;
  display: flex;
  max-width: 300px;
  flex-direction: column;
  span {
    margin-top: 10px;
  }
`;

export const ImgPanel = styled.div`
  cursor: pointer;
  width: 140px;
  height: 80px;
  min-width: 140px;
  min-height: 80px;
  background: #361c5d;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const BtnSpacer = styled.div`
  padding-right: 20px;
`;
