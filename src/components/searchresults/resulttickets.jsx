import "./resulttickets.css";

const Tickets = ({searchParamsForTickets}) => {


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
                <div className="ticket">
                    <div className="nameTrainPart">
                        <div className="circle">
                            <div className="trainicon"></div>
                        </div>
                        <div className="tarinName">Название поезда</div>
                        <div className="citys">города</div>
                    </div>
                    <div className="timeTrainPart">
                        3
                    </div>
                    <div className="seatsTrainPart">
                        4
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Tickets;