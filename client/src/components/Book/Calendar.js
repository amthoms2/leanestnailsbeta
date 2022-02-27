import { useState } from 'react';
// import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import { MainContainer} from './bookingElements';
import { services } from '../../data';
import BookingForm from "./BookingForm"

const Calendar = ({selections, handleClick}) => {

  const [value, setValue] = useState(new Date());
  const [formPageView, setFormPageView] = useState(false);

  const myDates = ['Mon Feb 28 2022', 'Tue Mar 1 2022', 'Wed Mar 2 2022', 'Thurs Mar 3 2022', 'Fri Mar 4 2022', 'Sat Mar 5 2022'];

  const disableDates = (date) => {
    return !myDates.map((myDate) => new Date(myDate).getTime()).includes(date.getTime());
   }

  const selectedServices = services.filter((service) => {
    return selections.includes(service.id)
  })

  const serviceName = selectedServices.map(service => {
    return service.name
  })

  const handleForm = () => {
    setFormPageView(!formPageView)
  }

  return (
    <>
    {formPageView ? <BookingForm handleClick={handleClick} date={value} servicesList={serviceName}/> :
    <div>
    <button onClick={handleClick}>Go back</button>
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
  <button onClick={handleForm}>Next</button>
  <div>
    {serviceName}
  </div>
  </div>
  }
    </>
  )
}

export default Calendar
