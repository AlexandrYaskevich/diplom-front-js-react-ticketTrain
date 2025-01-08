import "./bookingmenu.css"
import SearchTrain from "./searhtrain"



export default function BookingMenu (){
    return (

    <div className="bookingMenu">
        <div className="slogan">
          <p className="pslogan">Вся жизнь -</p>
          <h1 className="hslogan">путешествие!</h1>
       </div>
       <SearchTrain />
    </div>

    )

}