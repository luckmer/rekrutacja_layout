import lines from "../../img/linespng.png";
import styled from "styled-components";

export const Section = styled.section`
  padding-top: 400px;
  padding-bottom: 20px;
`;
export const IMG = styled.div`
  background-repeat: no-repeat;
  background-position: 50% center;
  background-size: auto;
  min-height: 420px;
  background-image: url(${lines});
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContactCard = styled.div`
  margin: 10px 10px 20px 10px;
  background: rgba(60, 62, 125, 0.19);
  backdrop-filter: blur(134px);
  border-radius: 5px;
  max-width: 940px;
  width: 100%;
`;
export const Header = styled.div`
  padding: 30px 10px 10px 10px;
`;
export const P = styled.p`
  font-family: "Rubik", sans-serif;
  font-style: normal;
  font-weight: ${({ weight }) => `${weight}`};
  font-size: ${({ font }) => `${font}px`};
  line-height: ${({ line }) => `${line}px`};
  text-align: center;
  color: ${({ color }) => color};
`;
export const Desc = styled.div`
  max-width: 400px;
  margin: auto;
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FormText = styled.div`
  padding: 30px 10px 10px 10px;

  button {
    background: #f2994a;
    border: none;
    font-family: "Rubik", sans-serif;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 2px;
    color: #ffffff;
    cursor: pointer;
    transition: all 0.5s;
    :hover {
      background: #dc7b26;
    }
  }

  input {
    color: #ffffff;
    background: #47499d;

    opacity: 1;
    border: none;
  }

  @media screen and (min-width: 375px) {
    button {
      padding: 20px 30px 20px 30px;
      background: #f2994a;
      border-radius: 0px 5px 5px 0px;

      border: none;
      font-family: "Rubik", sans-serif;
      font-size: 12px;
      line-height: 20px;
      letter-spacing: 2px;
      color: #ffffff;
    }

    input::placeholder {
      color: #ffffff;
      opacity: 0.2;
    }

    input {
      padding: 22px 30px 23px 30px;
      opacity: 1;
      border-radius: 5px 0 0 5px;
    }
  }

  @media screen and (max-width: 375px) {
    text-align: center;
    input {
      padding: 20px 30px 20px 30px;
      width: 100%;
      border-radius: 10px 10px 0 0;
    }
    button {
      padding: 20px 30px 20px 30px;

      width: 100%;
      border-radius: 0 0 10px 10px;
    }
  }
`;
export const Span = styled.span`
  font-family: "Rubik", sans-serif;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: #8476aa;
  padding: 10px 10px 20px 10px;
  text-align: center;
`;
