import { listPeopleFeedBack } from "./listpeople";

export default function Feetback (){ 
    return (

    <div className="blockfeedback">

        <div className="headerfeedback">
            <h1>ОТЗЫВЫ</h1>
        </div>

        <div className="listfeedback">  
            {   listPeopleFeedBack.map( (people) => {
                <ul className="listPeople">
                    <li className="people">
                        <img className="photopeople" key={people.id} src="{people.photopeople}" />
                        <div className="namepeople">{people.namepeople}</div>
                        <div className="textfeedbackfrompeople">{people.textfeedbackfrompeople}</div>
                    </li>                  
                </ul>
                })
            }

        </div>
    </div>
    )
}