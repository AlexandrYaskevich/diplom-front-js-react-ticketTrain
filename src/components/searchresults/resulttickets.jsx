

const Tickets = ({searchParamsForTickets}) => {



    return(
        <div>
        <div>
        From City ID: {searchParamsForTickets.from_city_id}
        To City ID: {searchParamsForTickets.to_city_id}
        Date Start: {searchParamsForTickets.date_start}
        Date End: {searchParamsForTickets.date_end}
        Class2: {typeof searchParamsForTickets.have_second_class === 'boolean' ? String(searchParamsForTickets.have_second_class) : ''}
        Class1: {typeof searchParamsForTickets.have_first_class === 'boolean' ? String(searchParamsForTickets.have_first_class) : ''}
        Class3: {typeof searchParamsForTickets.have_third_class === 'boolean' ? String(searchParamsForTickets.have_third_class) : ''}
        Class4: {typeof searchParamsForTickets.have_fourth_class === 'boolean' ? String(searchParamsForTickets.have_fourth_class) : ''}
        Wifi: {searchParamsForTickets.have_wifi}  {/* Прямое отображение */}
        Express: {searchParamsForTickets.have_express} {/* Прямое отображение */}
        PriceFrom: {searchParamsForTickets.price_from}
        PriceTo:{searchParamsForTickets.price_to}
        TimeFrom: {searchParamsForTickets.start_departure_hour_from}
        TimeTo: {searchParamsForTickets.start_departure_hour_to}
      </div>
      <div>
        {/* Выводим значения для отладки */}
        Debug: Wifi = {String(searchParamsForTickets.have_wifi)}, Express = {String(searchParamsForTickets.have_express)}
      </div>
        </div>
    );

}

export default Tickets;