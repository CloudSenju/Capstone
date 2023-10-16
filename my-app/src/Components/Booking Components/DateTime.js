import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Form from './form';

const DateTime = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const currentDate = dayjs();
  const maxDate = currentDate.add(30, 'day');


  return (
    <div id="date-time">
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid item>
        <DateCalendar aria-label="Date picker" value={selectedDate} onChange={handleDateChange} id="date-picker" defaultValue={dayjs()}  maxDate={maxDate} minDate={dayjs()}/>
        <p aria-label="Select a date">Selected Date: {selectedDate ? new Date(selectedDate).toLocaleDateString() : 'No date selected'}</p>
      </Grid>
      <Grid item>
        <Form selectedDate={selectedDate}/>
      </Grid>
    </LocalizationProvider>
    </div>
  );
}

export default DateTime;