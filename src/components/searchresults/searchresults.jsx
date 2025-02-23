import "./searchresults.css";
import React from 'react';
import { ProgressLine } from "./lineprogress/lineprogres";
import DataFrom from "../calendar/dataFrom";
import DataTo from "../calendar/dataTo";
import { useState } from "react";


function SearchResults() {
  const [sliderValueMin, setSliderValueMin] = useState(1920); 
  const [sliderValueMax, setSliderValueMax] = useState(7000); 

  const handleSliderChangeMin = (event) => {
    const value = parseInt(event.target.value, 10);
    if (value <= sliderValueMax) {
        setSliderValueMin(value);
    }
};

const handleSliderChangeMax = (event) => {
    const value = parseInt(event.target.value, 10);
    if (value >= sliderValueMin) {
        setSliderValueMax(value);
    }
};
const minPercentage = ((sliderValueMin - 1920) / (7000 - 1920)) * 100;
const widthPercentage = ((sliderValueMax - sliderValueMin) / (7000 - 1920)) * 100;

  return (
    <div className='searchresult'>
      <ProgressLine />
      <div className='leftside'>
           
              <h3 className="textdata">Дата поездки</h3>
                  <div className="fromdata">
                    <DataFrom />        
                  </div>
              <h3 className="textdata">Дата возвращения</h3>
                  <div className="wheredata">
                      <DataTo /> 
                  </div>

              <div className="line"></div>

              <div className="filtersofticket">

                  <div className="filter">
                      <div className="imagefilter__coupe"></div>
                      <p className="textfilter">Купе</p>
                      <label className="switch"> 
                        <input type="checkbox" className="checkbox"/>
                        <span className="slider round"></span> 
                      </label>
                  </div>

                  <div className="filter">
                      <div className="imagefilter__placcart"></div>
                      <p className="textfilter">Плацкарт</p>
                      <label className="switch"> 
                        <input type="checkbox" className="checkbox"/>
                        <span className="slider round"></span> 
                      </label>
                  </div>

                  <div className="filter">
                      <div className="imagefilter__seat"></div>
                      <p className="textfilter">Сидячий</p>
                      <label className="switch"> 
                        <input type="checkbox" className="checkbox"/>
                        <span className="slider round"></span> 
                      </label>
                  </div>

                  <div className="filter">
                      <div className="imagefilter__lux"></div>
                      <p className="textfilter">Люкс</p>
                      <label className="switch"> 
                        <input type="checkbox" className="checkbox"/>
                        <span className="slider round"></span> 
                      </label>
                  </div>

                  <div className="filter">
                      <div className="imagefilter__wifi"></div>
                      <p className="textfilter">Wi-fi</p>
                      <label className="switch"> 
                        <input type="checkbox" className="checkbox"/>
                        <span className="slider round"></span>
                      </label>
                  </div>

                  <div className="filter">
                      <div className="imagefilter__express"></div>
                      <p className="textfilter">Экспресс</p>
                      <label className="switch"> 
                        <input type="checkbox" className="checkbox"/>
                        <span className="slider round"></span>
                      </label>
                  </div>

              </div>

              <div className="line"></div>

              <div className="cost">
                  <div className="textcost">Стоимость</div>
                  <div className="texts">
                    <span className="textstart">от</span>
                    <span className="textend">до</span>
                  </div>
                  <div className="inputs">
                    
                      <input
                          className="rangemin"
                          type="range"
                          min="1920"
                          max="7000"
                          value={sliderValueMin}
                          onChange={handleSliderChangeMin}
                            />

                      <input
                          className="rangemax"
                          type="range"
                          min="1920"
                          max="7000"
                          value={sliderValueMax}
                          onChange={handleSliderChangeMax}
                           />
                                   <div
            className="ant-slider-track ant-slider-track-1"
            style={{
              left: `${minPercentage}%`,
              width: `${widthPercentage}%`,
            }}
          />
                        </div>
                        <div className="spans">
                          <span className="slider-valuemin">{sliderValueMin}</span>
                          <span className="slider-valuemax">{sliderValueMax}</span>
                        </div>
                     
              </div>
      </div>
    </div>
  );
}

export default SearchResults;
