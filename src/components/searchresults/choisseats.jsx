import "./choisseats.css";
import { useState } from 'react';

const Seats = ({selectedTicket, setChoisTickets}) => { 
    const [adults, setAdults] = useState(0); 
    const [limitAdult] = useState(5);
    const remainingAdults = limitAdult - adults;

     const handleBackButtonClick = () => {
        setChoisTickets(false);
    };
    const handleChangeAdult = (event) => {
        const value = Math.max(0, Math.min(5, event.target.value)); 
        setAdults(value); 
    };

    return (
    <div>
        <p>ВЫБОР МЕСТ</p>

        <div className="wagonsAndSeats">
            <div className="blockButtonBack">
                <div className="iconBack"></div>
                <button className="buttonBack" onClick={handleBackButtonClick}>Выбрать другой поезд</button>
            </div>

            <div className="informationAboutTickets">

                <div className="aboutTrain">
                    <div className="circleTrain"> </div>
                    <div className="nameTrainCity">
                        <div className="trainName">{selectedTicket.departure.train.name}</div>
                        <div className="city">
                        <div className="fistCity">
                            <div className="cityFrom">{selectedTicket.departure.from.city.name}</div>
                            <p>&#8594;</p>
                        </div>
                        <div className="cityTo">{selectedTicket.departure.to.city.name}</div>
                        </div>
                    </div>
                    <div className="timeAboutTickets">
                        <div className="timeToStation">
                            <div className="timeTo">{new Date(selectedTicket.departure.from.datetime * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                            <div className="cityFr">{selectedTicket.departure.from.city.name}</div>
                            <div className="stationTo">{selectedTicket.departure.from.railway_station_name} вокзал</div>
                        </div>
                        <div className="iconRight"></div>
                        <div className="timeFromStation">
                            <div className="timeFrom">{new Date(selectedTicket.departure.to.datetime * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                            <div className="cityT">{selectedTicket.departure.to.city.name}</div>
                            <div className="stationFrom">{selectedTicket.departure.to.railway_station_name} вокзал</div>
                        </div>
                    </div>
                    <div className="allTimeWay">
                        <div className="iconTime"></div>
                        <div className="timeWay">
                            <div className="timeClock">{Math.floor((selectedTicket.departure.to.datetime - selectedTicket.departure.from.datetime) / 3600)} часа</div>
                            <div className="timeMinues">{Math.floor(((selectedTicket.departure.to.datetime - selectedTicket.departure.from.datetime) % 3600) / 60)} минут</div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="amountSeat">Количество билетов</p>
            <div className="amountPeoples">
                <div className="adultPerson">
                    <div className="inputBlockAdult">
                        <input 
                            type="number" 
                            min="0" 
                            max="5" 
                            className="adult-input" 
                            value={adults} 
                            onChange={handleChangeAdult}
                        />
                        <span className="labelAdult">Взрослых &mdash;</span>
                        </div>
                    <div className="limitAdult">Можно добавить еще {remainingAdults} пассажиров</div>
                </div>
                <div className="childPerson">

                </div>
                <div className="babyPerson">

                </div>
            </div>

        </div>
    </div>
    )
}

export default Seats;