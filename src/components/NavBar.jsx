import * as nav from "../css/components/NavBar.style";
import { userText, loginText } from "./Constants";

const NavBar = () => {
  return (
    <nav.Nav>
      <nav.Spacer>
        <nav.Logo>
          <div />
          <div />
        </nav.Logo>
        <nav.UserPanel>
          {userText.map((el, i) => (
            <nav.UserSpacer key={i}>
              <nav.P>{el}</nav.P>
            </nav.UserSpacer>
          ))}
        </nav.UserPanel>
      </nav.Spacer>
      <nav.Spacer>
        {loginText.map((el, i) => (
          <nav.UserSpacer key={i}>
            <nav.Sizer value={el}>
              <p>{el}</p>
            </nav.Sizer>
          </nav.UserSpacer>
        ))}
      </nav.Spacer>
    </nav.Nav>
  );
};

export default NavBar;
