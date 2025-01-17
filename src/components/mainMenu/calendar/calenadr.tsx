import React, { useState} from "react";
import DatePicker from "react-datepicker";
import { ru } from 'date-fns/locale';
import "react-datepicker/dist/react-datepicker.css"; 

const MyDatePicker = () => {
    const [startDate, setStartDate] = useState();
  
    return (
      <div>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd/MM/yyyy" 
          placeholderText="ДД/ММ/ГГ"
          locale={ru}
        />
      </div>
    );
};

export default MyDatePicker;