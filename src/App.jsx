import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainMenu from "./components/mainMenu/mainMenu";
import store from "./redux/store/index"
import { Provider } from "react-redux";
import BlockAbout from "./components/blockabout/about";
import HowThisWork from "./components/blockhowthiswork/howthiswork";
import Feetback from "./components/blockfeedback/blockfeedback"

function App() {
  return (
<BrowserRouter>
  <Provider store={store}>
      <div className="bookingTrain">
        <MainMenu/>
        <BlockAbout/>
        <HowThisWork/>
        <Feetback />
      </div>
  </Provider>
</BrowserRouter>
  );
}

export default App;