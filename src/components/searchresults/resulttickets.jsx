import "./resulttickets.css";
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Tickets = ({searchParamsForTickets}) => {
    const [tickets, setTickets] = useState([]);
    const [filteredTickets, setFilteredTickets] = useState([]);

    useEffect(() => {
        fetch(`https://students.netoservices.ru/fe-diplom/routes?from_city_id=${searchParamsForTickets.from_city_id}&to_city_id=${searchParamsForTickets.to_city_id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setTickets(data.items);
            console.log(data.items)
        })
}, [searchParamsForTickets]);

useEffect(() => {
    setFilteredTickets(tickets.filter(ticket => {
        const ticketDate = new Date(ticket.departure.datetime * 1000); 
        const ticketPrice = ticket.min_price; 
        const ticketDepartureTime = ticket.departure.datetime * 1000;

        const isWithinDateRange = ticketDate >= new Date(searchParamsForTickets.date_start) && ticketDate <= new Date(searchParamsForTickets.date_end);
        const isPriceValid = ticketPrice >= searchParamsForTickets.price_from && ticketPrice <= searchParamsForTickets.price_to;

        const isClassValid = (searchParamsForTickets.have_first_class && ticket.have_first_class) ||
                             (searchParamsForTickets.have_second_class && ticket.have_second_class) ||
                             (searchParamsForTickets.have_third_class && ticket.have_third_class) ||
                             (searchParamsForTickets.have_fourth_class && ticket.have_fourth_class);

        const isWiFiAvailable = !searchParamsForTickets.have_wifi || ticket.have_wifi;
        const isExpressAvailable = !searchParamsForTickets.have_express || ticket.is_express; // Используем is_express
        const isDepartureTimeValid = ticketDepartureTime >= searchParamsForTickets.start_departure_hour_from && ticketDepartureTime <= searchParamsForTickets.start_departure_hour_to;

        return isWithinDateRange || isPriceValid || isClassValid || isWiFiAvailable || isExpressAvailable || isDepartureTimeValid;
    }));

    console.log(filteredTickets);
}, [tickets, searchParamsForTickets]);
    return(
        <div>
            <div className="ticketslist">
            {filteredTickets.map((ticket) => (   
                <div className="ticket" key={uuidv4()}>
                    <div className="nameTrainPart">
                        <div className="circle">
                            <div className="trainicon"></div>
                        </div>
                        <div className="wayName">
                            <div className="tarinName">{ticket.departure.train.name}</div>
                            <div className="citylist">
                                <div className="fistCity">
                                    <div className="citys">{ticket.departure.from.city.name}</div>
                                    <p>&#8594;</p>
                                </div>
                                <div className="citys">{ticket.departure.to.city.name}</div>
                            </div>
                        </div>
                    </div>
                    <div className="timeTrainPart">
                        <div className="midlepart">
                            <div className="fromWay">
                                <div className="timefrom">{new Date(ticket.departure.from.datetime * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                                <div className="cityfrom">{ticket.departure.from.city.name}</div>
                                <div className="namestationfrom">{ticket.departure.from.railway_station_name}</div>
                            </div>
                            <div className="alltimeway">
                                <div className="alltime">{Math.floor((ticket.departure.to.datetime - ticket.departure.from.datetime) / 3600)} : {Math.floor(((ticket.departure.to.datetime - ticket.departure.from.datetime) % 3600) / 60)}</div>
                                <div className="iconarrow"></div>
                            </div>
                            <div className="toWay">
                                <div className="timeto">{new Date(ticket.departure.to.datetime * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                                <div className="cityto">{ticket.departure.to.city.name}</div>
                                <div className="namestationto">{ticket.departure.to.railway_station_name}м</div>
                            </div>
                        </div>    
                    </div>
                    <div className="seatsTrainPart">
                        <div className="listclassticket">
                           
                            {ticket.departure.have_second_class && (
                             <div className="classseat">
                                <div className="first-class-info">
                                    <div className="nameclass">Купе</div>
                                    <div className="amountseats">{ticket.available_seats_info.second}</div>
                                    <div className="costseats">
                                        <div className="fromcost">от</div>
                                        <div className="amountcost">{ticket.departure.price_info.second.bottom_price}</div>
                                        <div className="iconrub"></div>
                                    </div>
                                </div>
                            </div>
                            )}

                            {ticket.departure.have_first_class && (
                             <div className="classseat">
                                <div className="first-class-info">
                                    <div className="nameclass">Люкс</div>
                                    <div className="amountseats">{ticket.available_seats_info.first}</div>
                                    <div className="costseats">
                                        <div className="fromcost">от</div>
                                        <div className="amountcost">{ticket.departure.price_info.first.bottom_price}</div>
                                        <div className="iconrub"></div>
                                    </div>
                                </div>
                            </div>
                            )}

                            {ticket.departure.have_third_class && (
                             <div className="classseat">
                                <div className="first-class-info">
                                    <div className="nameclass">Плацкарт</div>
                                    <div className="amountseats">{ticket.available_seats_info.third}</div>
                                    <div className="costseats">
                                        <div className="fromcost">от</div>
                                        <div className="amountcost">{ticket.departure.price_info.third.bottom_price}</div>
                                        <div className="iconrub"></div>
                                    </div>
                                </div>
                            </div>
                            )}

                            {ticket.departure.have_fourth_class && (
                             <div className="classseat">
                                <div className="first-class-info">
                                    <div className="nameclass">Сидячий</div>
                                    <div className="amountseats">{ticket.available_seats_info.fourth}</div>
                                    <div className="costseats">
                                        <div className="fromcost">от</div>
                                        <div className="amountcost">{ticket.departure.price_info.fourth.bottom_price}</div>
                                        <div className="iconrub"></div>
                                    </div>
                                </div>
                            </div>
                            )}
                           
                        </div>
                        <div className="addandsearch">
                            <div className="listadditional"></div>
                            <button className="searchseats">Выбрать места</button>
                        </div>
                    </div>
                </div>
            ))}
            </div>


        </div>
    );

}

export default Tickets;