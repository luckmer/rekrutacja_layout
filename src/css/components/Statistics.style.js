import styled from "styled-components";

export const Section = styled.section`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: flex-start;
`;
export const Spacer = styled.div`
  padding-top: 50px;
  height: auto;
  &:nth-child(2) {
    text-align: center;
  }
`;
export const DescP = styled.p`
  font-size: 15px;
  line-height: 28px;
  max-width: 500px;
  letter-spacing: 0.5px;
  color: #8476aa;

  @media screen and (max-width: 910px) {
    padding: 0 10px 0 10px;
  }
`;
export const IMG = styled.img`
  height: 100%;

  @media screen and (min-width: 910px) {
    width: auto;
  }

  @media screen and (max-width: 910px) {
    width: 100%;
    padding: 10px;
  }
`;
export const Color = styled.div`
  box-shadow: -11.09px 18.13px 36.6483px rgba(242, 153, 74, 0.23);
  cursor: pointer;
  padding: 10px 30px 10px 30px;
  border: 1px solid #f2994a;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #f2994a;
`;
export const Header = styled.header`
  padding-bottom: 30px;
  display: flex;
  align-items: right;
  justify-content: flex-start;
  max-width: 400px;
  word-break: normal;
  p,
  span {
    font-style: normal;
    font-weight: bold;
    font-size: 42px;
    line-height: 50px;
  }

  p {
    color: #99efd0;
  }

  span {
    padding-left: 5px;
    color: #f2994a;
  }

  @media screen and (max-width: 910px) {
    padding: 0 10px 0 10px;
  }
`;
export const Div = styled.div`
  padding-bottom: 30px;
`;
