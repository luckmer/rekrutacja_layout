import * as F from "../css/components/Footers.style";
import * as Constants from "../Constants/Constants";
const Footer = () => {
  return (
    <F.Footers>
      <F.Header>
        <div>
          <F.P>{Constants.footerLogo}</F.P>
        </div>
        <F.Logo>
          {Constants.Logos.map((element, i) => (
            <F.Spacer key={i}>
              <img src={element.img} alt="" />
            </F.Spacer>
          ))}
        </F.Logo>
      </F.Header>
      <F.ContextPanel>
        <Context header="First" />
        <Context header="Second" />
        <Context header="Third" />
        <Context header="Fourth" />
      </F.ContextPanel>
      <F.Watermarks>
        <p>© Copyrights 2021</p>
        <p>Privacy policy</p>
        <p>Terms of service</p>
      </F.Watermarks>
    </F.Footers>
  );
};

const Context = ({ header }) => {
  return (
    <F.ContextDiv>
      <F.Div>
        <ul>
          <li>{header}</li>
        </ul>
      </F.Div>
      <F.Div>
        <ul>
          <li>First page</li>
        </ul>
        <ul>
          <li>Second page</li>
        </ul>
        <ul>
          <li>Third page</li>
        </ul>
        <ul>
          <li>Fourth page</li>
        </ul>
      </F.Div>
    </F.ContextDiv>
  );
};

export default Footer;
