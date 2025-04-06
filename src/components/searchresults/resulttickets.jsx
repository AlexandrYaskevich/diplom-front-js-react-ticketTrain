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
        const ticketDate = new Date(ticket.departure.datetime * 1000); // Используем timestamp
        const ticketPrice = ticket.min_price; 
        const ticketDepartureTime = ticket.departure.datetime * 1000; // Время отправления в формате timestamp

        const isWithinDateRange = ticketDate >= new Date(searchParamsForTickets.date_start) && ticketDate <= new Date(searchParamsForTickets.date_end);
        const isPriceValid = ticketPrice >= searchParamsForTickets.price_from && ticketPrice <= searchParamsForTickets.price_to;

        const isClassValid = (searchParamsForTickets.have_first_class && ticket.have_first_class) ||
                             (searchParamsForTickets.have_second_class && ticket.have_second_class) ||
                             (searchParamsForTickets.have_third_class && ticket.have_third_class) ||
                             (searchParamsForTickets.have_fourth_class && ticket.have_fourth_class);

        const isWiFiAvailable = !searchParamsForTickets.have_wifi || ticket.have_wifi;
        const isExpressAvailable = !searchParamsForTickets.have_express || ticket.is_express; // Используем is_express
        const isDepartureTimeValid = ticketDepartureTime >= searchParamsForTickets.start_departure_hour_from && ticketDepartureTime <= searchParamsForTickets.start_departure_hour_to;

        return isWithinDateRange && isPriceValid && isClassValid && isWiFiAvailable && isExpressAvailable && isDepartureTimeValid;
    }));

    console.log(filteredTickets);
}, [tickets, searchParamsForTickets]);
    return(
        <div>
            <div>
                <div>From City ID: {searchParamsForTickets.from_city_id}</div>
                <div>To City ID: {searchParamsForTickets.to_city_id}</div>
                <div>From City NAME: {searchParamsForTickets.from_city_name}</div>
                <div>To City NAME: {searchParamsForTickets.to_city_name}</div>
                <div>Date Start: {searchParamsForTickets.date_start}</div>
                <div>Date End: {searchParamsForTickets.date_end}</div>
                <div>Class2: {typeof searchParamsForTickets.have_second_class === 'boolean' ? String(searchParamsForTickets.have_second_class) : ''}</div>
                <div>Class1: {typeof searchParamsForTickets.have_first_class === 'boolean' ? String(searchParamsForTickets.have_first_class) : ''}</div>
                <div>Class3: {typeof searchParamsForTickets.have_third_class === 'boolean' ? String(searchParamsForTickets.have_third_class) : ''}</div>
                <div>Class4: {typeof searchParamsForTickets.have_fourth_class === 'boolean' ? String(searchParamsForTickets.have_fourth_class) : ''}</div>
                <div>Wifi: {typeof searchParamsForTickets.have_wifi === 'boolean' ? String(searchParamsForTickets.have_wifi) : ''}</div>
                <div>Express: {typeof searchParamsForTickets.have_express === 'boolean' ? String(searchParamsForTickets.have_express) : ''}</div>
                <div>PriceFrom: {searchParamsForTickets.price_from}</div>
                <div>PriceTo:{searchParamsForTickets.price_to}</div>
                <div>TimeFrom: {searchParamsForTickets.start_departure_hour_from}</div>
                <div>TimeTo: {searchParamsForTickets.start_departure_hour_to}</div>
            </div>

            <div className="ticketslist">
            {tickets.map((ticket) => (   
                <div className="ticket" key={uuidv4()}>
                    <div className="nameTrainPart">
                        <div className="circle">
                            <div className="trainicon"></div>
                        </div>
                        <div className="wayName">
                            <div className="tarinName">Название поезда</div>
                            <div className="citylist">
                                <div className="fistCity">
                                    <div className="citys">города</div>
                                    <p>&#8594;</p>
                                </div>
                                <div className="citys">города</div>
                            </div>
                        </div>
                    </div>
                    <div className="timeTrainPart">
                        <div className="midlepart">
                            <div className="fromWay">
                                <div className="timefrom">0000</div>
                                <div className="cityfrom">город</div>
                                <div className="namestationfrom">станция</div>
                            </div>
                            <div className="alltimeway">
                                <div className="alltime">0000</div>
                                <div className="iconarrow"></div>
                            </div>
                            <div className="toWay">
                                <div className="timeto">0000</div>
                                <div className="cityto">город</div>
                                <div className="namestationto">станция</div>
                            </div>
                        </div>    
                    </div>
                    <div className="seatsTrainPart">
                        <div className="listclassticket">
                            <div className="classseat">
                                <div className="nameclass">Примместа</div>
                                <div className="amountseats">00</div>
                                <div className="costseats">
                                    <div className="fromcost">от</div>
                                    <div className="amountcost">{ticket.min_price}</div>
                                    <div className="iconrub"></div>
                                </div>
                            </div>
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