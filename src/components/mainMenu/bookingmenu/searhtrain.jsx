import "./searchtrain.css"
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCitiesFrom, fetchCitiesTo } from "../../../redux/slice/cityslice";
import MyDatePicker from "../calendar/calenadr";

export default function SearchTrain() {
  const [cityInputFrom, setCityInputFrom] = useState("");
  const [cityInputTo, setCityInputTo] = useState("");
  const dispatch = useDispatch();
  const citiesFrom = useSelector((state) => state.cities.citiesFrom);
  const citiesTo = useSelector((state) => state.cities.citiesTo);
  const fromloading = useSelector((state) => state.cities.fromloading);
  const toloading = useSelector((state) => state.cities.toloading);
  const [showFromCities, setShowFromCities] = useState(false);
  const [showToCities, setShowToCities] = useState(false);

  const handleSelectCityFrom = (city) => {
    setCityInputFrom(city);
    setShowFromCities(false); 
};

const handleSelectCityTo = (city) => {
  setCityInputTo(city);
  setShowToCities(false); 
};

  const handleSearchFrom = (e) => {
    setCityInputFrom(e.target.value);
    setShowFromCities(true);
    if (e.target.value) {
      dispatch(fetchCitiesFrom(e.target.value));
    } else {
      setShowFromCities(false);
      dispatch(fetchCitiesFrom(""));
    }
  };
  const handleSearchTo = (e) => {
    setCityInputTo(e.target.value);
    setShowToCities(true); 
    if (e.target.value) {
      dispatch(fetchCitiesTo(e.target.value));
    } else {
      // Если поле ввода пустое, сбрасываем найденные города
      dispatch(fetchCitiesTo(""));
    }
  };

  return (
    <div className="formSearchTrain">

      <div className="searchTrain">
        <div className="headword">
          <span>Направление</span>
        </div>
        <div className="inputsway">
          <div className="inputfromway">
            <input className="way_from"
              type="text"
              placeholder="Откуда"
              value={cityInputFrom}
              onChange={handleSearchFrom}
            />
            {fromloading && <p>Идет загрузка...</p>}
            {showFromCities && citiesFrom.length > 0 && (
              <ul className="listCity">
                {citiesFrom.map((city) => (
                  <li className="citiesFrom" key={city._id} onClick={() => handleSelectCityFrom(city.name)}>
                    {city.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="inputwhereway">
            <input className="way_where"
              type="text"
              placeholder="Куда"
              value={cityInputTo}
              onChange={handleSearchTo}
            />
            {toloading && <p>Идет загрузка...</p>}
            {showToCities && citiesTo.length > 0 && (
              <ul className="listCity">
                {citiesTo.map((city) => (
                  <li className="citiesTo" key={city._id} onClick={() => handleSelectCityTo(city.name)}>
                    {city.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="headword">
          <span>Дата</span>
        </div>

        <div className="inputsway">
          <div className="inputfromdata">
            <MyDatePicker />
          </div>
          <div className="inputwheredata">
            <MyDatePicker />
          </div>
        </div>
        

      </div>
  
    </div>
  );
}
