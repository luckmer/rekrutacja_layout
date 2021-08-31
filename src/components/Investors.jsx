import { Main, Right, Left } from "../css/components/Investors.style";
import FallingStars from "../img/FallingStars.png";
import investors from "../img/Logo.png";

const Investors = () => {
  return (
    <Main>
      <Right>
        <img src={FallingStars} alt="" />
      </Right>
      <img src={investors} alt="" />
      <Left>
        <img src={FallingStars} alt="" />
      </Left>
    </Main>
  );
};

export default Investors;
