import * as S from "../css/components/Statistics.style";
import * as nav from "../css/components/NavBar.style";
import * as A from "../css/components/About.style";
import second from "../img/Rectangle2.png";
import {
  businessDesc,
  businessMain,
  businessHeader,
  buttons,
} from "../Constants/Constants";
import {
  Section,
  Rotor,
  MaxSizer,
  Map,
  Card,
  Max,
  IMG,
  Header,
  P,
  Span,
  Values,
  FootData,
  BackCard,
} from "../css/components/Businnes.style.part1";

const Business = () => {
  const cardHeader = "Omah mukti residence";
  const cardSpan = "Merpati sidomuncul 26 street, UK";
  const cardValue = "$176,000";
  const cardDesc = "Funding Request";
  const BackCardHeader = "6 month";
  const backCardDesc = "increase 12%";

  const footerDesc = [
    { proc: "13%", data: "Apr" },
    { proc: "68%", data: "Ltv" },
    { proc: "12 mth", data: "Loan" },
  ];

  return (
    <Section>
      <Rotor>
        <div>
          <S.Header>
            <p>
              {businessHeader}
              <span>{businessMain}</span>
            </p>
          </S.Header>
          <S.Div>
            <S.DescP Color="#8476AA" set={false}>
              {businessDesc}
            </S.DescP>
            <MaxSizer>
              <nav.Sizer value={buttons[0]}>
                <A.PG>{buttons[0]}</A.PG>
              </nav.Sizer>
            </MaxSizer>
          </S.Div>
        </div>
        <div>
          <Map>
            <Card>
              <Max status={false}>
                <IMG>
                  <img src={second} alt="" />
                </IMG>
              </Max>
              <Max status={true}>
                <Header>
                  <P>{cardHeader}</P>
                  <Span>{cardSpan}</Span>
                </Header>
                <Values>
                  <p>{cardValue}</p>
                  <span>{cardDesc}</span>
                </Values>
                <FootData>
                  {footerDesc.map((name, i) => (
                    <div key={i}>
                      <p>{name.proc}</p>
                      <span>{name.data}</span>
                    </div>
                  ))}
                </FootData>
              </Max>
              <BackCard>
                <p>{BackCardHeader}</p>
                <span>{backCardDesc}</span>
              </BackCard>
            </Card>
          </Map>
        </div>
      </Rotor>
      <Rotor>
        <div>3</div>
        <div>4</div>
      </Rotor>
    </Section>
  );
};

export default Business;
