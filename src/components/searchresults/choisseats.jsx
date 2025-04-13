import "./choisseats.css";

const Seats = ({selectedTicket, setChoisTickets}) => { 
     const handleBackButtonClick = () => {
        setChoisTickets(false);
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
                </div>

            </div>

        </div>
    </div>
    )
}

export default Seats;