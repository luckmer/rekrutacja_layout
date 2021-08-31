import * as Component from "./components/index";
import { Main } from "./css/components/App.style";

const App = () => {
  return (
    <Main>
      <Component.NavBar />
      <Component.VisitPanel />
      <Component.Investors />
      <Component.Offers />
      <Component.Statistics />
      <Component.About />
      <Component.Business />
      <Component.Footer />
    </Main>
  );
};

export default App;
