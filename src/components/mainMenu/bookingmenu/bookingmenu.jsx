import "./bookingmenu.css"
import SearchTrain from "./searhtrain"



export default function BookingMenu ({ clickSearch, setClicksearch }){
    return (

    <div className="bookingMenu">
       {!clickSearch  && (<div className="slogan">
          <p className="pslogan">Вся жизнь -</p>
          <h1 className="hslogan">путешествие!</h1>
       </div>
        )}
       <SearchTrain clickSearch={clickSearch} setClicksearch={setClicksearch}/>
    </div>

    )

}