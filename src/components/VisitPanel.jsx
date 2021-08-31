import * as U from "../css/components/NavBar.style";
import playButton from "../img/playButton.png";
import man from "../img/man.png";
import * as V from "../css/components/VisitPanel.style";
import {
  initialText,
  description,
  buttons,
  watch,
} from "../Constants/Constants";

const VisitPanel = () => {
  return (
    <V.Section>
      <V.Spacer>
        <div>
          <V.P Color="#99efd0" set={true}>
            {initialText}
          </V.P>
        </div>
        <div>
          <V.P Color="#8476AA" set={false}>
            {description}
          </V.P>
        </div>
        <U.Spacer>
          {buttons.map((el, i) => (
            <V.BtnSpacer key={i}>
              <U.Sizer value={el}>
                <p>{el}</p>
              </U.Sizer>
            </V.BtnSpacer>
          ))}
        </U.Spacer>
        <V.BottomPanel>
          <V.ImgPanel>
            <img src={playButton} alt={playButton} />
          </V.ImgPanel>
          <div>
            <V.PBottom Color="#8476AA">
              {description}
              <span>{watch}</span>
            </V.PBottom>
          </div>
        </V.BottomPanel>
      </V.Spacer>
      <V.Spacer>
        <V.Img src={man} alt={man} />
      </V.Spacer>
    </V.Section>
  );
};

export default VisitPanel;
