import "./howthiswork.css"
import online from './image/online.svg';
import office from "./image/office.svg";
import travel from "./image/travel.svg";


export default function HowThisWork (){
    return (

    <div id="how" className="howThisWorkBlock">
        <div className="blockTitle">
            <div className="howThisWorkTitle">КАК ЭТО РАБОТАЕТ</div>
            <button className="linkLeanMore">Узнать больше</button >
        </div>

        <div className="blocklistsrvice">

            <div className="listaboutsrvice">
                <div className="serviselist">
                    <img className="iconlist" src={ online } alt="Удобный заказ на сайте" />
                    <p>Удобный заказ на сайте</p>
                </div>
                <div className="serviselist">                    
                    <img className="iconlist" src={ office } alt="Нет необходимости ехать в офис" />
                    <p>Нет необходимости ехать в офис</p>
                </div>
                <div className="serviselist">
                    <img  className="iconlist" src={ travel } alt="Огромный выбор направлений" />
                    <p>Огромный выбор направлений</p>
                </div>
            </div>

        </div>
        

    </div>

    )

}