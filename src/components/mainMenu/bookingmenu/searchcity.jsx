import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { citySlice } from "../slice/cityslice";

export default function SearchTrain() {
  const [cityInput, setCityInput] = useState("");
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities.cities);
  const loading = useSelector((state) => state.cities.loading);

  const handleSearch = (e) => {
    setCityInput(e.target.value);
    if (e.target.value) {
      dispatch(citySlice(e.target.value));
    } else {
      // Если поле ввода пустое, сбрасываем найденные города
      dispatch(citySlice(""));
    }
  };

  return (
    <form className="formSearchTrain">
      <div className="searchTrain">
        <div className="headword">
          <span>Направление</span>
        </div>
        <div className="inputsway">
          <div className="inputfromway">
            <input
              type="text"
              placeholder="Откуда"
              value={cityInput}
              onChange={handleSearch}
            />
            {loading && <p>Идет загрузка...</p>}
            {cities.length > 0 && (
              <ul>
                {cities.map((city) => (
                  <li key={city._id}>{city.name}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="inputwhereway">
            <input
              type="text"
              placeholder="Куда"
              value={cityInput}
              onChange={handleSearch}
            />
            {loading && <p>Идет загрузка...</p>}
            {cities.length > 0 && (
              <ul>
                {cities.map((city) => (
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
    </form>
  );
}
