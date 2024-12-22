import "./App.css";
import MainMenu from "./components/mainMenu/mainMenu";
import store from "./redux/store/index"
import { Provider } from "react-redux";
import BlockAbout from "./components/mainMenu/blockabout/about";
import HowThisWork from "./components/mainMenu/blockhowthiswork/howthiswork";

function App() {
  return (
<Provider store={store}>
      <div className="bookingTrain">
        <MainMenu/>
        <BlockAbout/>
        <HowThisWork/>
      </div>
</Provider>
  );
}

export default App;