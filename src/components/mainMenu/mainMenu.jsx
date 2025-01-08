import "./mainMenu.css";
import Logo from "./logo/logo";
import NavigatorPage from "./navigator/navigartoPage";
import BookingMenu from "./bookingmenu/bookingmenu";

export default function MainMenu() {
    return (
      <div className="mainMenu">
       <Logo />
       <NavigatorPage />
       <BookingMenu />
      </div>
    )
}