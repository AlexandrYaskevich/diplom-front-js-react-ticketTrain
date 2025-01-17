import { listPeopleFeedBack } from "./listpeople";
import "./blockfeedback.css"; 

export default function Feetback (){ 
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (

    <div id="feedbcak" className="blockfeedback">
        
            <div className="headerfeedback">
                <h1>отзывы</h1>
            </div>

            <div className="listfeedback">  
                <ul className="listPeople">
                {   listPeopleFeedBack.map( (people) => (
                    <li className="people" key={people.id}>
                        <img
                            className="photopeople"
                            src={people.photopeople} 
                            alt={`Photo of ${people.namepeople}`}
                        />
                        <div className="textaboutpeople">
                            <div className="namepeople" style={{fontWeight: "bold"}}>{people.namepeople}</div>
                            <div className="textfeedbackfrompeople">"{people.textfeedbackfrompeople}"</div>
                        </div>
                    </li> 
                ))}               
                </ul>

                

            </div>
    </div>
    )
}