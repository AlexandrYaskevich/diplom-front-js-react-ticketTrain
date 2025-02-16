import React from "react";
import DatePicker from "react-datepicker";
import { ru } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";

const MyDatePicker = ({ selectedDate, onDateChange }) => {

  const handleDateChange = (date) => {
    if (onDateChange) {
      onDateChange(date);
    }
  };

  return (
    
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="ДД/ММ/ГГ"
        locale={ru}
      />
    
  );
};

export default MyDatePicker;

