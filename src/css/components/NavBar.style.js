import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  padding-top: 50px;
  display: flex;
  flex-direction: row;
`;
export const Spacer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;

  &&:nth-child(2) {
    justify-content: flex-end;
  }
`;

export const Logo = styled.div`
  background-color: #f2994a;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    margin: 2px;
    background: #ffffff;
    border-radius: 5px;
    width: 20px;
    height: 7px;
  }
`;

export const UserPanel = styled.div`
  display: flex;
`;

export const UserSpacer = styled.div`
  padding: 0 10px 0 30px;
`;

export const P = styled.p`
  color: #b5b5b5;
`;

export const Sizer = styled.div`
  padding: 10px 30px 10px 30px;
  border: 1px solid #f2994a;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: ${({ value }) => (value === "SIGN IN " ? " " : "#f2994a")};
  p {
    color: ${({ value }) => (value === "SIGN IN " ? " #f2994a" : "#FFFFFF")};
    letter-spacing: 2px;
  }
`;
