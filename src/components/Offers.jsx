import { offers, offer, offerDescription } from "../Constants/Constants";
import * as O from "../css/components/Offers.style";

const Offers = () => {
  return (
    <O.Section>
      <O.DivSpacer>
        <O.P>{offer}</O.P>
        <O.Span>{offerDescription}</O.Span>
      </O.DivSpacer>
      <O.OfferPanel>
        {offers.map((name, i) => (
          <O.OfferCard key={i} size={400}>
            <O.OfferHeader status={true}>
              <img src={name.img} alt="" />
              <span>{name.content}</span>
            </O.OfferHeader>
            <div>
              <O.OfferP>{name.desc}</O.OfferP>
            </div>
          </O.OfferCard>
        ))}
      </O.OfferPanel>
    </O.Section>
  );
};

export default Offers;
