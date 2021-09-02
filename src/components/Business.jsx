import * as B from "../css/components/Businnes.style.part1";
import * as S from "../css/components/Statistics.style";
import * as nav from "../css/components/NavBar.style";
import * as O from "../css/components/Offers.style";
import * as Constants from "../Constants/Constants";
import * as A from "../css/components/About.style";
import second from "../img/Rectangle2.png";
import FallingStar from "../animations/FallingStar";

const Business = () => {
  return (
    <B.Section>
      <B.Rotor>
        <div>
          <S.Header>
            <p>
              {Constants.businessHeader}
              <span>{Constants.businessMain}</span>
            </p>
          </S.Header>
          <S.Div>
            <S.DescP Color="#8476AA" set={false}>
              {Constants.businessDesc}
            </S.DescP>
            <B.MaxSizer>
              <nav.Sizer value={Constants.buttons[0]}>
                <A.PG>{Constants.buttons[0]}</A.PG>
              </nav.Sizer>
            </B.MaxSizer>
          </S.Div>
        </div>
        <div>
          <B.Map>
            <B.Card>
              <B.Max status={false}>
                <B.IMG>
                  <img src={second} alt="" />
                </B.IMG>
              </B.Max>
              <B.Max status={true}>
                <B.Header>
                  <B.P>{Constants.cardHeader}</B.P>
                  <B.Span>{Constants.cardSpan}</B.Span>
                </B.Header>
                <B.Values>
                  <p>{Constants.cardValue}</p>
                  <span>{Constants.cardDesc}</span>
                </B.Values>
                <B.FootData>
                  {Constants.footerDesc.map((name, i) => (
                    <div key={i}>
                      <p>{name.proc}</p>
                      <span>{name.data}</span>
                    </div>
                  ))}
                </B.FootData>
              </B.Max>
              <B.BackCard>
                <p>{Constants.BackCardHeader}</p>
                <span>{Constants.backCardDesc}</span>
              </B.BackCard>
            </B.Card>
          </B.Map>
        </div>
      </B.Rotor>
      <B.Rotor>
        <B.Left>
          <FallingStar />
        </B.Left>

        <div>
          <B.GroupDescription>
            <p>{Constants.groupHeader}</p>
            <span>{Constants.groupDesc}</span>
          </B.GroupDescription>
          <B.CardGroup>
            {Constants.groupData.map((name, i) => (
              <O.OfferCard key={i} size={300}>
                <div>
                  <img src={name.img} alt="" />
                  <O.OfferHeader status={false}>
                    <span>{name.header}</span>
                  </O.OfferHeader>
                </div>
                <div>
                  <O.OfferP>{name.desc}</O.OfferP>
                </div>
              </O.OfferCard>
            ))}
          </B.CardGroup>
        </div>
      </B.Rotor>
    </B.Section>
  );
};

export default Business;
