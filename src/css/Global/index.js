import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
  }

  body{
    background: linear-gradient(222.26deg, #3b1d60 1.22%, #040d3e 106.28%);
  }


::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(222.26deg, #3b1d60 1.22%, #040d3e 106.28%);
  border-radius: 5px;
}




`;

export default GlobalStyle;
