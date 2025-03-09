import "./searchresults.css";
import React from 'react';
import { ProgressLine } from "./lineprogress/lineprogres";
import DataFrom from "../calendar/dataFrom";
import DataTo from "../calendar/dataTo";
import { useState } from "react";
import LastTickets  from './lasttickets.jsx'
import Tickets from "./resulttickets.jsx";
import { useSearchParams } from 'react-router-dom';
import { setDateTo, setDateFrom } from '../../redux/slice/dateSlice';

function SearchResults() {
  const [searchParams] = useSearchParams();
  const fromCityId = searchParams.get('from');
  const toCityId = searchParams.get('to');
  const [sliderValueMin, setSliderValueMin] = useState(1920); 
  const [sliderValueMax, setSliderValueMax] = useState(7000); 
  const [sliderTimeMinTo, setSliderTimeMinTo] = useState(0); 
  const [sliderTimeMaxTo, setSliderTimeMaxTo] = useState(1440); 
  const [sliderTimeMinEnd, setSliderTimeMinEnd] = useState(0); 
  const [sliderTimeMaxEnd, setSliderTimeMaxEnd] = useState(1440);
  const [sliderTimeMinToBack, setSliderTimeMinToBack] = useState(0); 
  const [sliderTimeMaxToBack, setSliderTimeMaxToBack] = useState(1440); 
  const [sliderTimeMinEndBack, setSliderTimeMinEndBack] = useState(0); 
  const [sliderTimeMaxEndBack, setSliderTimeMaxEndBack] = useState(1440);
  const [activeButton, setActiveButton] = useState(false);
  const [activeButtonBack, setActiveButtonBack] = useState(false);
  const [activeCoupe, setActiveCoupe] = useState(false);
  const [activePlaccart, setActivePlaccart] = useState(false);
  const [activeSeat, setActiveSeat] = useState(false);
  const [activeLux, setActiveLux] = useState(false);
  const [activeWifi, setActiveWifi] = useState(false);
  const [activeExpress, setActiveExpress] = useState(false);


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
const handleSliderChangeTimeMinTo = (event) => {
  const value = parseInt(event.target.value, 10);
  setSliderTimeMinTo(value <= sliderTimeMaxTo ? value : sliderTimeMaxTo); 
};

const handleSliderChangeTimeMaxTo = (event) => {
  const value = parseInt(event.target.value, 10);
  setSliderTimeMaxTo(value >= sliderTimeMinTo ? value : sliderTimeMinTo); 
};
const handleSliderChangeTimeMinEnd = (event) => {
  const value = parseInt(event.target.value, 10);
  setSliderTimeMinEnd(value <= sliderTimeMaxEnd? value : sliderTimeMaxEnd); 
};

const handleSliderChangeTimeMaxEnd = (event) => {
  const value = parseInt(event.target.value, 10);
  setSliderTimeMaxEnd(value >= sliderTimeMinEnd ? value : sliderTimeMinEnd); 
};
const handleSliderChangeTimeMinToBack = (event) => {
  const value = parseInt(event.target.value, 10);
  setSliderTimeMinToBack(value <= sliderTimeMaxToBack ? value : sliderTimeMaxToBack); 
};

const handleSliderChangeTimeMaxToBack = (event) => {
  const value = parseInt(event.target.value, 10);
  setSliderTimeMaxToBack(value >= sliderTimeMinToBack ? value : sliderTimeMinToBack); 
};
const handleSliderChangeTimeMinEndBack = (event) => {
  const value = parseInt(event.target.value, 10);
  setSliderTimeMinEndBack(value <= sliderTimeMaxEndBack? value : sliderTimeMaxEndBack); 
};

const handleSliderChangeTimeMaxEndBack = (event) => {
  const value = parseInt(event.target.value, 10);
  setSliderTimeMaxEndBack(value >= sliderTimeMinEndBack ? value : sliderTimeMinEndBack); 
};
const formatTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
};


const minPercentage = ((sliderValueMin - 1920) / (7000 - 1920)) * 100;
const widthPercentage = ((sliderValueMax - sliderValueMin) / (7000 - 1920)) * 100;
const minPercentageTimeTo = (sliderTimeMinTo / 1440) * 100;
const widthPercentageTimeTo = ((sliderTimeMaxTo - sliderTimeMinTo) / 1440) * 100;
const minPercentageTimeEnd = (sliderTimeMinEnd / 1440) * 100;
const widthPercentageTimeEnd = ((sliderTimeMaxEnd - sliderTimeMinEnd) / 1440) * 100;
const minPercentageTimeToBack = (sliderTimeMinToBack / 1440) * 100;
const widthPercentageTimeToBack = ((sliderTimeMaxToBack - sliderTimeMinToBack) / 1440) * 100;
const minPercentageTimeEndBack = (sliderTimeMinEndBack / 1440) * 100;
const widthPercentageTimeEndBack = ((sliderTimeMaxEndBack - sliderTimeMinEndBack) / 1440) * 100;

const handleShowTime = () => {
    setActiveButton(!activeButton);
}
const handleShowTimeBack = () => {
  setActiveButtonBack(!activeButtonBack);
}

const searchParamsForTickets = {
  from_city_id: fromCityId,
  to_city_id: toCityId,
  date_start: setDateFrom,
  date_end: setDateTo,
  have_second_class: activeCoupe, 
  have_first_class: activeLux,
  have_third_class: activePlaccart,
  have_fourth_class: activeSeat,
  have_wifi: activeWifi,
  have_express: activeExpress,
  price_from: sliderValueMin,
  price_to: sliderValueMax,
  start_departure_hour_from: sliderTimeMinTo,
  start_departure_hour_to: sliderTimeMaxTo,
};
console.log("searchParams:", setDateFrom)
console.log("searchParams:", setDateTo)

  return (
    <div className='searchresult'>
      <ProgressLine />
      <div className="twopart">
      <div className="leftpart">
      <div className={!activeButton && !activeButtonBack ? 'leftside': 'leftsidemax'} >
          
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
                        <input      type="checkbox" 
                                    className="checkbox" 
                                    checked={activeCoupe}
                                    onChange={(e) => setActiveCoupe(e.target.checked)}/>
                        <span className="slider round"></span> 
                      </label>
                  </div>

                  <div className="filter">
                      <div className="imagefilter__placcart"></div>
                      <p className="textfilter">Плацкарт</p>
                      <label className="switch"> 
                      <input      type="checkbox" 
                                    className="checkbox" 
                                    checked={activePlaccart}
                                    onChange={(e) => setActivePlaccart(e.target.checked)}/>
                        <span className="slider round"></span> 
                      </label>
                  </div>

                  <div className="filter">
                      <div className="imagefilter__seat"></div>
                      <p className="textfilter">Сидячий</p>
                      <label className="switch"> 
                      <input      type="checkbox" 
                                    className="checkbox" 
                                    checked={activeSeat}
                                    onChange={(e) => setActiveSeat(e.target.checked)}/>
                        <span className="slider round"></span> 
                      </label>
                  </div>

                  <div className="filter">
                      <div className="imagefilter__lux"></div>
                      <p className="textfilter">Люкс</p>
                      <label className="switch"> 
                      <input      type="checkbox" 
                                    className="checkbox" 
                                    checked={activeLux}
                                    onChange={(e) => setActiveLux(e.target.checked)}/>
                        <span className="slider round"></span> 
                      </label>
                  </div>

                  <div className="filter">
                      <div className="imagefilter__wifi"></div>
                      <p className="textfilter">Wi-fi</p>
                      <label className="switch"> 
                      <input      type="checkbox" 
                                    className="checkbox" 
                                    checked={activeWifi}
                                    onChange={(e) => setActiveWifi(e.target.checked)}/>
                        <span className="slider round"></span>
                      </label>
                  </div>

                  <div className="filter">
                      <div className="imagefilter__express"></div>
                      <p className="textfilter">Экспресс</p>
                      <label className="switch"> 
                      <input      type="checkbox" 
                                    className="checkbox" 
                                    checked={activeExpress}
                                    onChange={(e) => setActiveExpress(e.target.checked)}/>
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

                <div className="line"></div>

                  <div className="totime">
                    <div className="imagebutton"></div>
                    <h2 className="totext">Туда</h2>
                    <div className={activeButton ? 'btnclose' : 'btnshow'} onClick={handleShowTime}></div>
                  </div>
                  {activeButton && <div className="blocktimeto">
                      <p className="textTimeTo">Время отбытия</p>
                      <div className="timeTo"> 
                      <input
                          className="rangetimeminTo"
                          type="range"
                          min="0"
                          max="1440"
                          value={sliderTimeMinTo}
                          onChange={handleSliderChangeTimeMinTo}
                            />

                      <input
                          className="rangetimemaxTo"
                          type="range"
                          min="0"
                          max="1440"
                          value={sliderTimeMaxTo}
                          onChange={handleSliderChangeTimeMaxTo}
                           />
                      <div
                          className="ant-slider-tracktimeto ant-slider-tracktimeto-1"
                          style={{
                            left: `${minPercentageTimeTo}%`,
                            width: `${widthPercentageTimeTo}%`,
                          }}
                        />
                          <div className="spanstimeto">
                          <span className="slider-valuemintimeto">{formatTime(sliderTimeMinTo)}</span>
                          <span className="slider-valuemaxtimemin">{formatTime(sliderTimeMaxTo)}</span>
                        </div>
                      </div>
                      </div>}
                      {activeButton && <div className="blocktimeEnd">
                      <p className="textTimeEnd">Время прибытия</p>
                      <div className="timeEnd"> 
                      <input
                          className="rangetimeminEnd"
                          type="range"
                          min="0"
                          max="1440"
                          value={sliderTimeMinEnd}
                          onChange={handleSliderChangeTimeMinEnd}
                            />

                      <input
                          className="rangetimemaxEnd"
                          type="range"
                          min="0"
                          max="1440"
                          value={sliderTimeMaxEnd}
                          onChange={handleSliderChangeTimeMaxEnd}
                           />
                      <div
                          className="ant-slider-tracktimeEnd ant-slider-tracktimeEnd-1"
                          style={{
                            left: `${minPercentageTimeEnd}%`,
                            width: `${widthPercentageTimeEnd}%`,
                          }}
                        />
                          <div className="spanstimeEnd">
                          <span className="slider-valuemintimeEnd">{formatTime(sliderTimeMinEnd)}</span>
                          <span className="slider-valuemaxtimeminEnd">{formatTime(sliderTimeMaxEnd)}</span>
                        </div>
                      </div>
                      </div>}
                  
                      <div className="line"></div>

                      <div className="backtime">
                        <div className="backimagebutton"></div>
                        <h2 className="backtext">Обратно</h2>
                        
                        <div className={activeButtonBack ? 'backbtnclose' : 'backbtnshow'} onClick={handleShowTimeBack}></div>
                      </div>
                      {activeButtonBack && <div className="blocktimetoBack">
                      <p className="textTimeToBack">Время отбытия</p>
                      <div className="timeToBack"> 
                      <input
                          className="rangetimeminToBack"
                          type="range"
                          min="0"
                          max="1440"
                          value={sliderTimeMinToBack}
                          onChange={handleSliderChangeTimeMinToBack}
                            />

                      <input
                          className="rangetimemaxToBack"
                          type="range"
                          min="0"
                          max="1440"
                          value={sliderTimeMaxToBack}
                          onChange={handleSliderChangeTimeMaxToBack}
                           />
                      <div
                          className="ant-slider-tracktimetoBack ant-slider-tracktimetoBack-1"
                          style={{
                            left: `${minPercentageTimeToBack}%`,
                            width: `${widthPercentageTimeToBack}%`,
                          }}
                        />
                          <div className="spanstimetoBack">
                          <span className="slider-valuemintimetoBack">{formatTime(sliderTimeMinToBack)}</span>
                          <span className="slider-valuemaxtimeminBack">{formatTime(sliderTimeMaxToBack)}</span>
                        </div>
                      </div>
                      </div>}
                      {activeButtonBack && <div className="blocktimeEndBack">
                      <p className="textTimeEndBack">Время прибытия</p>
                      <div className="timeEndBack"> 
                      <input
                          className="rangetimeminEndBack"
                          type="range"
                          min="0"
                          max="1440"
                          value={sliderTimeMinEndBack}
                          onChange={handleSliderChangeTimeMinEndBack}
                            />

                      <input
                          className="rangetimemaxEndBack"
                          type="range"
                          min="0"
                          max="1440"
                          value={sliderTimeMaxEndBack}
                          onChange={handleSliderChangeTimeMaxEndBack}
                           />
                      <div
                          className="ant-slider-tracktimeEndBack ant-slider-tracktimeEndBack-1"
                          style={{
                            left: `${minPercentageTimeEndBack}%`,
                            width: `${widthPercentageTimeEndBack}%`,
                          }}
                        />
                          <div className="spanstimeEndBack">
                          <span className="slider-valuemintimeEndBack">{formatTime(sliderTimeMinEndBack)}</span>
                          <span className="slider-valuemaxtimeminEndBack">{formatTime(sliderTimeMaxEndBack)}</span>
                        </div>
                      </div>
                      </div>}
                      
               
          </div>
            <LastTickets />
          </div>
          <div className="rightpart">
            <Tickets />
          </div>
      </div>
    </div>
  );
}

export default SearchResults;
