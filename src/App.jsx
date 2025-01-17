import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
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
   
        <MainMenu/>
        <BlockAbout/>
        <HowThisWork/>
        <Feetback />
    
  </Provider>
</BrowserRouter>
  );
}

export default App;