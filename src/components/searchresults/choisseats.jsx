import "./choisseats.css";
import { useState } from 'react';
import Typevan from "./typevan";

const Seats = ({selectedTicket, setChoisTickets}) => { 
    const [amountperson, setAmountPerson] = useState({
        adults: 0,
        childs: 0,
        baby: 0,
    });
    const limitAdult = 5;
    const limitChild = 3;
    const remainingAdults = limitAdult - amountperson.adults;
    const remainingChilds = limitChild - amountperson.childs;
    const remainingBaby = limitChild - amountperson.baby;
    const updateAdults = (newAdults) => {
        setAmountPerson(prev => ({ ...prev, adults: newAdults }));
      };
    const updateChilds = (newChilds) => {
        setAmountPerson(prev => ({ ...prev, childs: newChilds }));
    };
    const updateBaby = (newBaby) => {
        setAmountPerson(prev => ({ ...prev, baby: newBaby }));
    };

     const handleBackButtonClick = () => {
        setChoisTickets(false);
    };
    const handleChangeAdult = (event) => {
        const value = Number(event.target.value);
        const newValue = Math.max(0, Math.min(limitAdult, value)); 
        updateAdults(newValue);
    };

    const handleChangeChild = (event) => {
        const value = Number(event.target.value);
        const newValue = Math.max(0, Math.min(limitChild, value)); 
        updateChilds(newValue);
    };

    const handleChangeBaby = (event) => {
        const value = Number(event.target.value);
        const newValue = Math.max(0, Math.min(limitChild, value)); 
        updateBaby(newValue);
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
                            value={amountperson.adults} 
                            onChange={handleChangeAdult}
                        />
                        <span className="label">Взрослых &mdash;</span>
                        </div>
                    <div className="limitAdult">Можно добавить еще {remainingAdults} пассажиров</div>
                </div>
                <div className="childPerson">
                <div className="inputBlockAdult">
                        <input 
                            type="number" 
                            min="0" 
                            max="3" 
                            className="childs-input" 
                            value={amountperson.childs} 
                            onChange={handleChangeChild}
                        />
                        <span className="label">Детских &mdash;</span>
                        </div>
                    <div className="limitAdult">Можно добавить еще {remainingChilds} билетов для детей до 10 лет. Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%</div>
                </div>
                <div className="babyPerson">
                
                    <div className="inputBlockBaby">
                        <input 
                            type="number" 
                            min="0" 
                            max="3" 
                            className="baby-input" 
                            value={amountperson.baby} 
                            onChange={handleChangeBaby}
                        />
                        <span className="label">Детских "без места" &mdash;</span>
                        </div>
                    <div className="limitAdult">Можно добавить еще {remainingBaby} билетов для младенцев.</div>
               
                </div>
            </div>
            <Typevan selectedTicket={selectedTicket}/>

        </div>
    </div>
    )
}

export default Seats;