import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Button from '../Button';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');

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
          <TimePicker label="What time?" />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Name & Surname"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={handleBlur}
          />
        </div>
        <div>
          <TextField
            id="outlined-required"
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleBlur}
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
          />
        </div>
      </Box>
      <Button/>
    </div>
    </>
  );
}

export default Form;