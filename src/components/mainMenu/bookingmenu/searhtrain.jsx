import "./searchtrain.css"
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCitiesFrom, fetchCitiesTo } from "../../../redux/slice/cityslice";

export default function SearchTrain() {
  const [cityInputFrom, setCityInputFrom] = useState("");
  const [cityInputTo, setCityInputTo] = useState("");
  const dispatch = useDispatch();
  const citiesFrom = useSelector((state) => state.cities.citiesFrom);
  const citiesTo = useSelector((state) => state.cities.citiesTo);
  const loading = useSelector((state) => state.cities.loading);

  const handleSearchFrom = (e) => {
    setCityInputFrom(e.target.value);
    if (e.target.value) {
      dispatch(fetchCitiesFrom(e.target.value));
    } else {
      // Если поле ввода пустое, сбрасываем найденные города
      dispatch(fetchCitiesFrom(""));
    }
  };
  const handleSearchTo = (e) => {
    setCityInputTo(e.target.value);
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
            {loading && <p>Идет загрузка...</p>}
            {citiesFrom.length > 0 && (
              <ul>
                {citiesFrom.map((city) => (
                  <li key={city._id}>{city.name}</li>
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
            {loading && <p>Идет загрузка...</p>}
            {citiesTo.length > 0 && (
              <ul>
                {citiesTo.map((city) => (
                  <li key={city._id}>{city.name}</li>
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
            <input type="text" placeholder="Дата" />
          </div>
          <div className="inputwheredata">
            <input type="text" placeholder="Дата" />
          </div>
        </div>
        

      </div>
  
    </div>
  );
}
