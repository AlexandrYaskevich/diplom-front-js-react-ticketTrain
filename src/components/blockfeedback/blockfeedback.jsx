import { useState } from "react";
import { listPeopleFeedBack } from "./listpeople";
import "./blockfeedback.css"; 


export default function Feedback (){ 
const [activbutton, setActivbutton] = useState(0);

const handleButtonClick =  (index) => {
    setActivbutton(index)
}

const filteredPeople = listPeopleFeedBack.filter((people, index) => index === activbutton || index === activbutton + 1);
    return (

    <div id="feedbcak" className="blockfeedback">
        
            <div className="headerfeedback">
                <h1>отзывы</h1>
            </div>

            <div className="listfeedback">  
                <ul className="listPeople">
                {   filteredPeople.map( (people) => (
                         <li className="people" key={people.id}>
                        <img
                            className="photopeople"
                            src={people.photopeople} 
                            alt={`Photo of ${people.namepeople}`}
                        />
                        <div className="textaboutpeople">
                            <div className="namepeople" style={{fontWeight: 'bold'}}>{people.namepeople}</div>
                            <div className="textfeedbackfrompeople">"{people.textfeedbackfrompeople}"</div>
                        </div>
                    </li> 
                         
                )) }               
                </ul>
                <div className="buttonscrolls">
                {Array.from({ length: 5 }).map((_, index) => ( 
                        <div 
                            key={index} 
                            className={`buttonlist ${activbutton === index ? 'active' : ''}`} 
                            onClick={() => handleButtonClick(index)} 
                        >
                        </div>
                    ))}
                </div>

                

            </div>
    </div>
    )
}