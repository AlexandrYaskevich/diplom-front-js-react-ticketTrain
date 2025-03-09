import "./lasttickets.css";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchLastTickets, selectLastTicketsState } from "../../redux/slice/ticketslastslice";
import { v4 as uuidv4 } from 'uuid';

const LastTickets = () => {
    const { tickets, loading, error } = useSelector(selectLastTicketsState);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchLastTickets());
    }, [dispatch]);
    
    if (loading === 'pending') {
        return <div>Идет поиск</div>;
    }

    if (error) {
        return <div>Произошла непредвиденная ошибка: {error}</div>;
    }
   return (
        <div className="listoftickets">
            <h1 className="textlasttickets">ПОСЛЕДНИЕ БИЛЕТЫ</h1>
            {tickets && tickets.length > 0 ? (
                tickets.map((elem) => {
                    return (
                        <li className='last__list-item_tickets' key={uuidv4()}> 
                            <div className='route__from-to'>
                                <div className='route__from'>
                                    <h4 className='route__city-text'>{elem.departure.from.city.name}</h4>
                                    <p className='route__station-text'>{elem.departure.from.railway_station_name}</p>
                                </div>
                                <div className='route__to'>
                                    <h4 className='route__city-text'>{elem.departure.to.city.name}</h4>
                                    <p className='route__station-text'>{elem.departure.to.railway_station_name}</p>
                                </div>
                            </div>
                            <div className='route__facilities-price'>
                                <div className='route__facilities'></div>
                                <div className='route__start-price'>
                                    <p className='price__start-text'>от</p>
                                    <p className='price__start-number'>{elem.min_price}</p>
                                    <span className='sign__rub'></span>
                                </div>
                            </div>
                        </li>
                    );
                })
            ) : (
                <div>No tickets available.</div>
            )}
        </div>
   ); 
}; 

export default LastTickets;