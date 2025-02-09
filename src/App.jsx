import "./App.css";
import MainMenu from "./components/mainMenu/mainMenu";
import BlockAbout from "./components/blockabout/about";
import HowThisWork from "./components/blockhowthiswork/howthiswork";
import Feedback from "./components/blockfeedback/blockfeedback"
import Footer from "./components/footer/footer";
import SearchResults from './components/searchresults/searchresults';
import store from "./redux/store/index"
import { Provider } from "react-redux";
import  {BrowserRouter, Routes, Route}  from "react-router-dom";


function App() {

  return (
<BrowserRouter basename='/diplom-front-js-react-ticketTrain'>
  <Provider store={store}>
   
        <MainMenu/>
        <Routes>
               <Route path="/" element={
                   <>
                       <BlockAbout/>
                       <HowThisWork/>
                       <Feedback />
                    </>
                } />
               <Route path="/search" element={<SearchResults />} />
          </Routes>
        <Footer />

  </Provider>
</BrowserRouter>
  );
}

export default App;