import styled from "styled-components";
import man from "../img/man.png";

const Section = styled.section`
  display: flex;
`;

const Spacer = styled.div`
  height: auto;

  width: auto;
`;

const VisitPanel = () => {
  return (
    <Section>
      <Spacer></Spacer>
      <Spacer>
        <img src={man} alt={man} />
      </Spacer>
    </Section>
  );
};

export default VisitPanel;
