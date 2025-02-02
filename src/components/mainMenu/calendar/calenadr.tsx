import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ru } from 'date-fns/locale';
import "react-datepicker/dist/react-datepicker.css";

const MyDatePicker = ({ onDateChange }) => {
    const [startDate, setStartDate] = useState(null);

  const handleDateChange = (date) => {
    setStartDate(date);
      if (onDateChange) {
            const dateString = date ? date.toISOString() : null;
         onDateChange(dateString);
      }
  }

    return (
        <div>
            <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                placeholderText="ДД/ММ/ГГ"
                locale={ru}
            />
        </div>
    );
};

export default MyDatePicker;