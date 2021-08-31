import * as S from "../css/components/Statistics.style";
import * as nav from "../css/components/NavBar.style";
import Img from "../img/Image.png";
import {
  staticBtn,
  staticMain,
  staticDesc,
  staticHeader,
} from "../Constants/Constants";

const Statistics = () => {
  return (
    <S.Section>
      <S.Spacer>
        <S.Header>
          <p>
            {staticHeader}
            <span>{staticMain}</span>
          </p>
        </S.Header>
        <S.Div>
          <S.DescP Color="#8476AA" set={false}>
            {staticDesc}
          </S.DescP>
        </S.Div>
        <nav.Spacer>
          <S.Color>
            <p>{staticBtn}</p>
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
