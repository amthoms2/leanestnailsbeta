import { useState } from 'react'
import Form from '../Form'
import config from "./config"
import axios from 'axios';

const BookingForm = ({handleClick, date, servicesList}) => {
  const [status, setStatus] = useState('');
  // let newDate = JSON.stringify(date);
  // newDate = newDate.slice(1,11)
  // console.log('new date', newDate)
  console.log('date', date)
  // console.log('services', servicesList)

  const handleSubmit = async (form) => {
    setStatus('loading')
    form = {...form, Date: date}
    console.log('form',form)
    try{
      const res = await axios.post("http://localhost:8080/api/booking/book", form);
      console.log("res in front", res.data);
    }catch(err){
      console.log(err)
    }
    setTimeout(() => {
      setStatus('success')
    }, 3000)
  }

  return (
    <>
      <button onClick={handleClick}>Go back</button>
      <Form form={config} onSubmit={handleSubmit} status={status}/>
    </>
  )
}

export default BookingForm
