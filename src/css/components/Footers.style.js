import styled from "styled-components";

export const Footers = styled.footer`
  margin-top: 400px;
  display: flex;
  flex-direction: column;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 50px;
`;
export const Logo = styled(Header)``;
export const Spacer = styled.div`
  padding: 0 20px 0 20px;
  background: #47499d;
  display: flex;
  justify-content: center;
  border-radius: 100%;
  align-items: center;
  width: 40px;
  height: 40px;

  margin: 0 5px 0 5px;
`;
export const P = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 32px;
  letter-spacing: 0.325px;
  color: #f2994a;
`;
export const ContextPanel = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
`;
export const ContextDiv = styled.div`
  min-width: 200px;
  margin-bottom: 10px;
`;
export const Div = styled.div`
  ul {
    font-family: "Inter", sans-serif;
    color: #ffffff;
    list-style: none;
    padding-bottom: 15px;
    font-style: normal;
    font-size: 15px;

    &:nth-child(1) {
      font-weight: bold;
      line-height: 18px;
    }
    font-weight: normal;
    line-height: 20px;
    letter-spacing: 0.2px;
  }
`;
export const Watermarks = styled.div`
  margin: 70px 0 200px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  p {
    padding: 20px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: #8d8d8d;
  }
`;
