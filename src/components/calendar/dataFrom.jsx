import React from 'react';
import MyDatePicker from "./calenadar";
import { useDispatch, useSelector } from 'react-redux';
import { setDateFrom } from '../../redux/slice/dateSlice';
import moment from 'moment'; 

function DataFrom() {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.date.dateFrom);

  const handleDateChange = (date) => {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    dispatch(setDateFrom(formattedDate));
  };

  return (
    
      <MyDatePicker selectedDate={selectedDate} onDateChange={handleDateChange} />
    
  );
}

export default DataFrom;