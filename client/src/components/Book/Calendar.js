import * as React from 'react';
// import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import { MainContainer} from './bookingElements';
import { services } from '../../data';


const Calendar = ({selections}) => {

  const [value, setValue] = React.useState(new Date());

  const myDates = ['Mon Feb 28 2022', 'Tue Mar 1 2022', 'Wed Mar 2 2022', 'Thurs Mar 3 2022', 'Fri Mar 4 2022', 'Sat Mar 5 2022'];

  const disableDates = (date) => {
    return !myDates.map((myDate) => new Date(myDate).getTime()).includes(date.getTime());
   }
  // const displayServices = (selections) => {
  //   console.log('in func', selections)
  //   if(selections.length === 1) return services[selections-1].name
  //   for (let i = 0; i < selections.length; i++){
  //     console.log('selections in loop', selections)
  //     return services[selections[i]].name
  //   }
  // }

  const selectedServices = services.filter((service) => {
    return selections.includes(service.id)
  })

  return (
    <div>
      Calendar here
      {console.log('services', services)}
      {console.log('selections', selections)}
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
  <button>Submit</button>
  <div>
    {selectedServices.map(service => {
      return service.name
    })}
  </div>
    </div>
  )
}

export default Calendar
