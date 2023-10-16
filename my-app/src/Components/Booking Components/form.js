import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import BButton from '../Button';
import DateTime from './DateTime';

function Form({selectedDate}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [time, setTime] = useState('12:00:00');

  const validateEmail = () => {
    // Regular expression to validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateContactNumber = () => {
    // Check if it's a valid number and meets the minimum length requirement
    return !isNaN(contactNumber) && contactNumber.length >= 10;
  };

  const validateNameSurename = () => {
    return name.trim().length > 0;
  };

  const validateTime = () => {
    return toString(time).length > 0;
  };


  const validateDate = () => {
    if (selectedDate)
      return true;
    else{
      return false;
    }
  }

  const handleBlur = () => {
    if (email && !validateEmail()) {
      alert('Please enter a valid email address.');
    }

    if (contactNumber && !validateContactNumber()) {
      alert('Please enter a valid contact number.');
    }

    if (!validateNameSurename()) {
      alert('Please enter a valid Name & Surname.');
    }
  };

  console.log(time)
  return (
    <>
    <div>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        Validate
        autoComplete="off"
        className="centered-form"
      >
        <div>
          <TimePicker
            label="What time?"
            value={time}
            onChange={(e) => setTime(e)}
            onBlur={handleBlur}
            aria-label="Select a time"
            />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Name & Surname"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={handleBlur}
            aria-label="Username and surename"
          />
        </div>
        <div>
          <TextField
            id="outlined-required"
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleBlur}
            aria-label="Complete email address"
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Contact Number"
            type="tel" // Use type "tel" for contact numbers
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            onBlur={handleBlur}
            inputProps={{ minLength: 10 }} // Minimum length of 10 digits
            aria-label="Complete contact details"
          />
        </div>
      </Box>
      <BButton
        nameSurenameValidation={validateNameSurename()}
        nameSurename={name}
        contactNumberValidation={validateContactNumber()}
        contactNumber={contactNumber}
        dateValidation={validateDate()}
        date={new Date(selectedDate).toLocaleDateString()}
        timeValidation={validateTime()}
        time={new Date(time).toTimeString()}
        aria-label="Confirm"
      />
    </div>
    </>
  );
}

export default Form;