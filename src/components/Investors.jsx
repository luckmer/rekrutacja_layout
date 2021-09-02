import { Main, Right, Left } from "../css/components/Investors.style";
import investors from "../img/Logo.png";
import FallingStar from "../animations/FallingStar";

const Investors = () => {
  return (
    <Main>
      <Right>
        <FallingStar />
      </Right>
      <img src={investors} alt="" />
      <Left>
        <FallingStar />
      </Left>
    </Main>
  );
};

export default Investors;
