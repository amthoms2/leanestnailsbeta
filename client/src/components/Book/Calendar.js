import { useState } from 'react';
// import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import { MainContainer} from './bookingElements';
import { services } from '../../data';


const Calendar = ({selections, handleClick}) => {

  const [value, setValue] = useState(new Date());

  const myDates = ['Mon Feb 28 2022', 'Tue Mar 1 2022', 'Wed Mar 2 2022', 'Thurs Mar 3 2022', 'Fri Mar 4 2022', 'Sat Mar 5 2022'];

  const disableDates = (date) => {
    return !myDates.map((myDate) => new Date(myDate).getTime()).includes(date.getTime());
   }

  const selectedServices = services.filter((service) => {
    return selections.includes(service.id)
  })

  return (
    <div>
      <button onClick={handleClick}>Go back</button>
      {/* {console.log('services', services)}
      {console.log('selections', selections)} */}
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <MainContainer>
    <StaticDatePicker
        orientation="landscape"
        openTo="day"
        value={value}
        shouldDisableDate={disableDates}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      </MainContainer>
  </LocalizationProvider>
  <button>Next</button>
  <div>
    {selectedServices.map(service => {
      return service.name
    })}
  {console.log('value', value)}
  </div>
    </div>
  )
}

export default Calendar
