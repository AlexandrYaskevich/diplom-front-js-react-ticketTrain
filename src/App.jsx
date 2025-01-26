import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainMenu from "./components/mainMenu/mainMenu";
import store from "./redux/store/index"
import { Provider } from "react-redux";
import BlockAbout from "./components/blockabout/about";
import HowThisWork from "./components/blockhowthiswork/howthiswork";
import Feedback from "./components/blockfeedback/blockfeedback"
import Footer from "./components/footer/footer";

function App() {
  return (
<BrowserRouter>
  <Provider store={store}>
   
        <MainMenu/>
        <BlockAbout/>
        <HowThisWork/>
        <Feedback />
        <Footer />

  </Provider>
</BrowserRouter>
  );
}

export default App;