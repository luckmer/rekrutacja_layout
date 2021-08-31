import { Fragment, useState, useEffect } from "react";
import * as nav from "../css/components/NavBar.style";
import { userText, loginText } from "../Constants/Constants";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    menu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }, [menu]);

  return (
    <Fragment>
      <nav.Menu state={menu} onClick={() => setMenu(!menu)}>
        <div />
        <div />
        <div />
      </nav.Menu>
      <nav.Nav state={menu}>
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
            <nav.LoginSpacer key={i}>
              <nav.Sizer value={el}>
                <p>{el}</p>
              </nav.Sizer>
            </nav.LoginSpacer>
          ))}
        </nav.Spacer>
      </nav.Nav>
    </Fragment>
  );
};

export default NavBar;
