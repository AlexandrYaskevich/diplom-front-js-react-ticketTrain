import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchLastTickets, selectLastTicketsState } from "../../redux/slice/ticketslastslice";

const LastTickets = () => {
    const { tickets, loading, error } = useSelector(selectLastTicketsState);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchLastTickets());
    }, [dispatch]);
    console.log("Tickets in LastTickets:", tickets); // Check tickets after useSelector

    if (loading === 'pending') { // Adapt the loading state check to your actual state
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
   return (
        <div className="listoftickets">
            {tickets && tickets.length > 0 ? (
                tickets.map((elem) => {
                    console.log("Current elem in map:", elem); // Check each element
                    return (
                        <li className='last__list-item' key={elem.id}> {/*Use an unique ID to avoid re-renders*/}
                            <div className='route__from-to'>
                                <div className='route__from'>
                                    <h4 className='route__city-text'>{elem.departure.from.city.name}</h4>
                                    <p className='route__station-text'>{elem.departure.from.railway_station_name} вокзал</p>
                                </div>
                                <div className='route__to'>
                                    <h4 className='route__city-text'>{elem.departure.to.city.name}</h4>
                                    <p className='route__station-text'>{elem.departure.to.railway_station_name} вокзал</p>
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