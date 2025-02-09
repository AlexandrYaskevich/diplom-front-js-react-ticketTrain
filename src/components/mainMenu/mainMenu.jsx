import "./mainMenu.css";
import React, { useState } from "react";
import Logo from "./logo/logo";
import NavigatorPage from "./navigator/navigartoPage";
import BookingMenu from "./bookingmenu/bookingmenu";


export default function MainMenu() {
  const [clickSearch, setClicksearch] = useState(false);
 

    return (
      <div id="main" className={`mainMenu ${clickSearch ? 'mainMenu_second' : ''}`}>
       <Logo setClicksearch={setClicksearch} />
       <NavigatorPage setClicksearch={setClicksearch} />
       <BookingMenu clickSearch={clickSearch} setClicksearch={setClicksearch} />
      </div>
    )
}