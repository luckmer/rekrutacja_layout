import { aboutDesc, aboutStatistics } from "../Constants/Constants";
import * as nav from "../css/components/NavBar.style";
import * as A from "../css/components/About.style";
import FallingStar from "../animations/FallingStar";
import { start } from "../Constants/Constants";
import Circle from "../img/cirlce.png";

const About = () => {
  return (
    <A.Section>
      <A.Right>
        <FallingStar />
      </A.Right>

      <A.Header>
        <A.P>
          3 Simple Ways To <A.Span>Save</A.Span> A Bunch Of{" "}
          <A.Span>Money</A.Span> When Buying A New Computer
        </A.P>
      </A.Header>
      <A.Desc>{aboutDesc}</A.Desc>
      <A.AboutPanel>
        {aboutStatistics.map((name, i) => (
          <A.AboutCard key={i}>
            <A.AboutHeader>
              <span>{name.value}</span>
            </A.AboutHeader>
            <div>
              <A.AboutP>{name.desc}</A.AboutP>
            </div>
          </A.AboutCard>
        ))}
        <A.Starter>
          <A.P>
            Create your <A.Span>next project</A.Span> with startup framework
          </A.P>
          <nav.UserSpacer>
            <nav.Sizer value={start}>
              <A.PG>{start}</A.PG>
            </nav.Sizer>
          </nav.UserSpacer>
          <div>
            <A.IMG src={Circle} alt="" />
          </div>
        </A.Starter>
      </A.AboutPanel>
    </A.Section>
  );
};

export default About;
