import React from 'react';
import MyDatePicker from "./calenadar";
import { useDispatch, useSelector } from 'react-redux';
import { setDateTo } from '../../redux/slice/dateSlice';
import moment from 'moment'; 

function DataTo() {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.date.dateTo);

  const handleDateChange = (date) => {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    dispatch(setDateTo(formattedDate));
  };
  

  return (
  
      <MyDatePicker selectedDate={selectedDate} onDateChange={handleDateChange} />
   
  );
}

export default DataTo;