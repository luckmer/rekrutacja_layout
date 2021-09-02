import * as V from "../css/components/VisitPanel.style";
import * as U from "../css/components/NavBar.style";
import * as Constants from "../Constants/Constants";
import playButton from "../img/playButton.png";
import man from "../img/man.png";

const VisitPanel = () => {
  return (
    <V.Section>
      <V.Spacer>
        <div>
          <V.P Color="#99efd0" set={true}>
            {Constants.initialText}
          </V.P>
        </div>
        <div>
          <V.P Color="#8476AA" set={false}>
            {Constants.description}
          </V.P>
        </div>
        <U.Spacer>
          {Constants.buttons.map((el, i) => (
            <V.BtnSpacer key={i}>
              <U.Sizer value={el}>
                <p>{el}</p>
              </U.Sizer>
            </V.BtnSpacer>
          ))}
        </U.Spacer>
        <V.BottomPanel>
          <V.ImgPanel>
            <img src={playButton} alt="" />
          </V.ImgPanel>
          <div>
            <V.PBottom Color="#8476AA">
              {Constants.description}
              <span>{Constants.watch}</span>
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
