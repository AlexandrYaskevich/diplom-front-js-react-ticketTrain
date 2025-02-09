import "./searchresults.css";
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProgressLine } from "./lineprogress/lineprogres";
import MyDatePicker from "../mainMenu/calendar/calenadr";

function SearchResults() {
  const [searchParams] = useSearchParams();
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const dateFrom = searchParams.get("dateFrom");
  const dateTo = searchParams.get("dateTo");

  
  const formatDate = (dateString) => {
    if (!dateString) return ""; 
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    } catch (error) {
      console.error("Error parsing date:", error);
      return dateString; 
    }
  };

  return (
    <div className='searchresult'>
      <ProgressLine />
      <div className='leftside'>
           
              <h3>Дата поездки</h3>
                  <div className="fromdata">
                      <MyDatePicker  value="dateFrom"/>
                  </div>
              <h3>Дата возвращения</h3>
                  <div className="wheredata">
                      <MyDatePicker  />
                  </div>
              
      </div>

      <p>
        From: {from}
        <br />
        To: {to}
        <br />
        Date From: {formatDate(dateFrom)}
        <br />
        Date To: {formatDate(dateTo)}
      </p>
    </div>
  );
}

export default SearchResults;
