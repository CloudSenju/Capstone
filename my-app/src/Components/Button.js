import { Alert } from 'bootstrap';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function BButton({nameSurenameValidation, nameSurename, contactNumberValidation, contactNumber, dateValidation, date, timeValidation, time}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <>
        <div id="confirm-booking">
            {nameSurenameValidation && contactNumberValidation && dateValidation && timeValidation
            ?
            <button
                onClick={handleOpen}
            >
            Confirm Booking
            </button>
            :
            <button disabled>
            Confirm Booking
            </button>
            }
        </div>
        <div id="button-modal">
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style}}>
                <h2 id="child-modal-title">Booking details:</h2>
                <p id="child-modal-description">
                    Booking made for the {date} at {time}. Reserved under {nameSurename}, contact number {contactNumber}
                </p>
                <Button onClick={handleClose}>Confirm</Button>
                </Box>
            </Modal>
        </div>
    </>
  );
}