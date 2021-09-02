import * as Constants from "../Constants/Constants";
import * as C from "../css/components/Contact.style";

const ContactPanel = () => {
  return (
    <C.Section>
      <C.IMG>
        <C.ContactCard>
          <C.Header>
            <C.P line={43} weight={500} font={36} color="#f2994a">
              {Constants.contactHeader}
            </C.P>
          </C.Header>
          <C.Desc>
            <C.P line={22} weight={"normal"} font={16} color="#95a1bb">
              {Constants.contactDesc}
            </C.P>
          </C.Desc>
          <C.Form>
            <C.FormText>
              <input type="text" placeholder="your email" />
              <button>{Constants.btnDesc}</button>
            </C.FormText>
            <C.Span>{Constants.spamBlocker}</C.Span>
          </C.Form>
        </C.ContactCard>
      </C.IMG>
    </C.Section>
  );
};

export default ContactPanel;
