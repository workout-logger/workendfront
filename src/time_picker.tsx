import * as React from 'react';
import { useState } from 'react';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Dayjs from 'dayjs';

function FancyTimePicker() {
    const [selectedTime, setSelectedTime] = useState(Dayjs());
    const handleChange = (newValue) => {
        setSelectedTime(newValue);
    };

    // Create a dark theme instance
    const darkTheme = createTheme({
        palette: {
            mode: 'dark', // Switch to dark mode
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                    views={['hours', 'minutes']}
                    label="Duration"
                    value={selectedTime}
                    onChange={handleChange}
                    inputFormat="HH:mm"
                    ampm={false}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </ThemeProvider>
    );
}

export default FancyTimePicker;
