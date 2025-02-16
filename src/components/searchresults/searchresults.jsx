import "./searchresults.css";
import React from 'react';
import { ProgressLine } from "./lineprogress/lineprogres";
import DataFrom from "../calendar/dataFrom";
import DataTo from "../calendar/dataTo";


function SearchResults() {


  return (
    <div className='searchresult'>
      <ProgressLine />
      <div className='leftside'>
           
              <h3 className="textdata">Дата поездки</h3>
                  <div className="fromdata">
                    <DataFrom />        
                  </div>
              <h3 className="textdata">Дата возвращения</h3>
                  <div className="wheredata" p>
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
              
      </div>
    </div>
  );
}

export default SearchResults;
