import React from 'react';
import MyDatePicker from "./calenadar";
import { useDispatch, useSelector } from 'react-redux';
import { setDateFrom } from '../../redux/slice/dateSlice';

function DataFrom() {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.date.dateFrom);

  const handleDateChange = (date) => {
    dispatch(setDateFrom(date));
  };

  return (
    
      <MyDatePicker selectedDate={selectedDate} onDateChange={handleDateChange} />
    
  );
}

export default DataFrom;