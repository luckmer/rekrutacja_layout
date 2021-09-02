import * as S from "../css/components/Statistics.style";
import * as nav from "../css/components/NavBar.style";
import * as Constants from "../Constants/Constants";
import Img from "../img/Image.png";

const Statistics = () => {
  return (
    <S.Section>
      <S.Spacer>
        <S.Header>
          <p>
            {Constants.staticHeader}
            <span>{Constants.staticMain}</span>
          </p>
        </S.Header>
        <S.Div>
          <S.DescP Color="#8476AA" set={false}>
            {Constants.staticDesc}
          </S.DescP>
        </S.Div>
        <nav.Spacer>
          <S.Color>
            <p>{Constants.staticBtn}</p>
          </S.Color>
        </nav.Spacer>
      </S.Spacer>
      <S.Spacer>
        <S.IMG src={Img} alt="" />
      </S.Spacer>
    </S.Section>
  );
};

export default Statistics;
