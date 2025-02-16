import React from 'react';
import MyDatePicker from "./calenadar";
import { useDispatch, useSelector } from 'react-redux';
import { setDateTo } from '../../redux/slice/dateSlice';

function DataTo() {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.date.dateTo);

  const handleDateChange = (date) => {
    dispatch(setDateTo(date));
  };

  return (
  
      <MyDatePicker selectedDate={selectedDate} onDateChange={handleDateChange} />
   
  );
}

export default DataTo;