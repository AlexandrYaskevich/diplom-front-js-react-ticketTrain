import { listPeopleFeedBack } from "./listpeople";

export default function Feetback (){ 
    return (

    <div id="feedbcak" className="blockfeedback">

        <div className="headerfeedback">
            <h1>ОТЗЫВЫ</h1>
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
                        <div className="namepeople">{people.namepeople}</div>
                        <div className="textfeedbackfrompeople">{people.textfeedbackfrompeople}</div>
                    </li>   
                ))}               
                </ul>

        </div>
    </div>
    )
}